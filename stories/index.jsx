import React, {useState} from 'react'
import {storiesOf} from '@storybook/react'

import AutoHeight, {AutoHeightOfChildren} from '../src'
import './index.css'

const rndColor = () =>
  `rgb(${Array.from(Array(3))
    .map(() => Math.floor(Math.random() * 100 + 155))
    .join(', ')})`

storiesOf('AutoHeight')
  .add('default', () => {
    const [content, setContent] = useState('\n.')
    const [background, setBackground] = useState('yellowgreen')
    const handleClick = () => {
      const rndLines = '.\n'.repeat(Math.random() * 20)
      setContent(`\n${rndLines}end`)
      setBackground(rndColor())
    }
    return (
      <div onClick={handleClick}>
        <pre>{`
          import AutoHeight from 'react-auto-height'
          
          <AutoHeight className="additional-css" style={{background}} onClick={handleClick}>
            {dynamicContent}
          </AutoHeight>
        `}</pre>
        <AutoHeight className="additional-css" style={{background}}>
          click here multiple times to change content
          {content}
        </AutoHeight>
      </div>
    )
  })
  .add('Nested AutoHeights', () => {
    const [isShort, setIsShort] = useState(true)
    const handleClick = () => setIsShort((prev) => !prev)
    const extra = isShort ? null : <div>{' ... extra\n ... extra'}</div>
    return (
      <div onClick={handleClick} className="nested">
        <div>
          <div style={{background: 'salmon'}}>
            <pre>{'<div>\n  <div />\n  <div />\n</div>'}</pre>
            none:
            <div>.{extra}</div>
            <div>.{extra}</div>
            <b>{extra}</b>. ✗
          </div>
          <AutoHeight style={{background: 'orange'}}>
            <pre>{'<AutoHeight>\n  <div />\n  <div />\n</AutoHeight>'}</pre>
            outer AutoHeight:
            <div>.{extra}</div>
            <div>.{extra}</div>
            <b>{extra}</b>. ✗
          </AutoHeight>
          <div style={{background: 'gold'}}>
            <pre>{'<div>\n  <AutoHeight />\n  <AutoHeight />\n</div>'}</pre>
            inner AutoHeights:
            <AutoHeight>.{extra}</AutoHeight>
            <AutoHeight>.{extra}</AutoHeight>
            <b>{extra}</b>. ✓
          </div>
          <AutoHeight style={{background: 'yellowgreen'}}>
            <pre>{'<AutoHeight>\n  <AutoHeight />\n  <AutoHeight />\n</AutoHeight>'}</pre>2 levels
            of nesting:
            <AutoHeight>.{extra}</AutoHeight>
            <AutoHeight>.{extra}</AutoHeight>
            <b>{extra}</b>. ✓
          </AutoHeight>
          <AutoHeight style={{background: 'greenyellow'}}>
            <pre>{'<AutoHeight>\n  ...\n  ...\n</AutoHeight>'}</pre>3 levels of nesting:
            <AutoHeight>
              <AutoHeight>.</AutoHeight>
              <AutoHeight>{extra}</AutoHeight>
            </AutoHeight>
            <AutoHeight>
              <AutoHeight>.</AutoHeight>
              <AutoHeight>{extra}</AutoHeight>
            </AutoHeight>
            <b>
              <AutoHeight>{extra}</AutoHeight>
            </b>
            . ✓
          </AutoHeight>
        </div>
        <i>(click to change content)</i>
        <p>Nested AutoHeights should work fine, but please test your app more carefully.</p>
      </div>
    )
  })
  .add('AutoHeightsOfChildren', () => {
    const [parentCounter, setCounter] = useState(0)
    const items = ['1st', '2nd', '3rd', '4th', '5th']

    const createClickHandler = (updateHeight) => (event) => {
      event.stopPropagation()
      const current = event.target.innerText
      event.target.innerText = current.includes('.')
        ? current.replace(/(\s\.)+/g, '')
        : current + '\n.\n.'
      updateHeight()
    }

    const handleReRender = () => {
      setCounter((prev) => prev + 1)
    }

    return (
      <div onClick={handleReRender}>
        <pre>{`
          import {AutoHeightOfChildren} from 'react-auto-height'
          
          <AutoHeightOfChildren element="ul">
            {(updateHeight) => (
              
              {items.map((item) => (
                <li onClick={createClickHandler(updateHeight)} className="some-transition" key={item}>
                  {item}
                </li>
              ))}
              
            )}
          </AutoHeightOfChildren>
        `}</pre>
        <AutoHeightOfChildren element="ul">
          {(updateHeight) => (
            <>
              {items.map((item) => (
                <li
                  key={item}
                  onClick={createClickHandler(updateHeight)}
                  className="additional-css"
                  style={{
                    transition: '300ms cubic-bezier(0.5, -0.5, 0.5, 1.5) ',
                    background: rndColor(),
                  }}
                >
                  {item}
                </li>
              ))}
            </>
          )}
        </AutoHeightOfChildren>
        <i>
          (click an item to change content, click here to re-render random colors of parent: #
          {parentCounter})
        </i>
      </div>
    )
  })
  .add('Interference with margin collapse', () => {
    const [isShort, setIsShort] = useState(true)
    const handleClick = () => setIsShort((prev) => !prev)
    const extra = isShort ? null : (
      <>
        <p> ... extra paragraph 1</p>
        <p> ... extra paragraph 2</p>
      </>
    )

    return (
      <pre onClick={handleClick}>
        <span>{'<p>...</p>'}</span>
        <p>{'<p>...</p>'}</p>
        <p>
          <AutoHeight style={{background: 'yellowgreen'}}>
            {'<p>\n  <AutoHeight>'} <b>works fine inside an element with margin</b> {extra}
            {'  </AutoHeight>\n</p>'}
          </AutoHeight>
        </p>
        <p>{'<p>...</p>'}</p>
        <AutoHeight>
          <p style={{background: 'gold'}}>
            {'<AutoHeight>\n  <p>'}{' '}
            <b>
              if AutoHeight contains an element with margin, it will prevent{' '}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing"
                target="_blank"
                rel="noopener"
              >
                margin collapse
              </a>
            </b>
            {extra}
            {'  </p>\n</AutoHeight>'}
          </p>
        </AutoHeight>
        <p>{'<p>...</p>'}</p>
        <i>(click to change content)</i>
      </pre>
    )
  })
  .add('Do NOT combine with other solutions', () => {
    const handleAutoResize = (ev) => {
      ev.currentTarget.style.height = ev.currentTarget.scrollHeight - 2 + 'px'
    }
    return (
      <div>
        Please do NOT combine AutoHeight with other auto-resizing solutions, e.g. a dynamic
        textarea:
        <br />
        <AutoHeight style={{background: 'orange'}}>
          AutoHeight + other solution will NOT work: ✗ <textarea onKeyDown={handleAutoResize} />
        </AutoHeight>
        <div style={{background: 'gold'}}>
          Other solution only: ✓ <textarea onKeyDown={handleAutoResize} />
        </div>
        <AutoHeightOfChildren style={{background: 'yellowgreen'}}>
          {(updateHeight) => (
            <>
              AutoHeightOfChildren (without other solution): ✓ <textarea onKeyDown={updateHeight} />
            </>
          )}
        </AutoHeightOfChildren>
        <pre>{`
          <AutoHeightOfChildren>
            {(updateHeight) => (
            
              <textarea onKeyDown={updateHeight} />
              
            )}
          </AutoHeightOfChildren>
        `}</pre>
        <i>(try typing long text into textareas)</i>
      </div>
    )
  })
