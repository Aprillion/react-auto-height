import React, {useState} from 'react'
import {storiesOf} from '@storybook/react'

import AutoHeight from '../src'
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
            none:
            <pre>{'<div>\n  <div />\n  <div />\n</div>'}</pre>
            <div>.{extra}</div>
            <div>.{extra}</div>
            <b>{extra}</b>. ✗
          </div>
          <AutoHeight style={{background: 'orange'}}>
            outer AutoHeight:
            <pre>{'<AutoHeight>\n  <div />\n  <div />\n</AutoHeight>'}</pre>
            <div>.{extra}</div>
            <div>.{extra}</div>
            <b>{extra}</b>. ✗
          </AutoHeight>
          <div style={{background: 'gold'}}>
            inner AutoHeights:
            <pre>{'<div>\n  <AutoHeight />\n  <AutoHeight />\n</div>'}</pre>
            <AutoHeight>.{extra}</AutoHeight>
            <AutoHeight>.{extra}</AutoHeight>
            <b>{extra}</b>. ✓
          </div>
          <AutoHeight style={{background: 'yellowgreen'}}>
            2 levels of nesting:
            <pre>{'<AutoHeight>\n  <AutoHeight />\n  <AutoHeight />\n</AutoHeight>'}</pre>
            <AutoHeight>.{extra}</AutoHeight>
            <AutoHeight>.{extra}</AutoHeight>
            <b>{extra}</b>. ✓
          </AutoHeight>
          <AutoHeight style={{background: 'greenyellow'}}>
            3 levels of nesting:
            <pre>{'<AutoHeight>\n  ...\n  ...\n</AutoHeight>'}</pre>
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
  .add('Parents of re-rendered children', () => {
    const Child = () => {
      const [isShot, setShort] = useState(true)
      const content = isShot
        ? '  <AutoHeight>short</AutoHeight>'
        : '  <AutoHeight>\n    long\n    long\n  </AutoHeight>'
      const handleClick = () => setShort((prev) => !prev)
      return (
        <AutoHeight
          onClick={handleClick}
          className="additional-css"
          style={{background: 'yellowgreen'}}
        >
          {content}
        </AutoHeight>
      )
    }

    return (
      <pre>
        <AutoHeight>
          {'<AutoHeight>'}
          <Child />
          {'  '}...
          <Child />
          {'</AutoHeight>'}
        </AutoHeight>
        <br />
        <i>
          (click on individual children to re-render them and update parent height, without
          re-rendering the parent)
        </i>
      </pre>
    )
  })
  .add('Custom element and render props', () => {
    const [itemCount, setCount] = useState(5)
    const items = Array.from(Array(itemCount)).map((_, i) => i + 1)

    const createClickHandler = (updateHeight) => (event) => {
      event.stopPropagation()
      const current = event.target.innerText
      event.target.innerText = current.includes('.')
        ? current.replace(/(\s\.)+/g, '')
        : current + '\n.\n.'
      updateHeight()
    }

    const handleReRender = () => {
      setCount(2 + Math.floor(Math.random() * 10))
    }

    return (
      <div onClick={handleReRender}>
        <pre>{`
          <AutoHeight element="ul">
            {(updateHeight) => (
              
              {items.map((item) => (
                <li onClick={createClickHandler(updateHeight)} className="some-transition" key={item}>
                  {item}
                </li>
              ))}
              
            )}
          </AutoHeight>
        `}</pre>
        <AutoHeight element="ul">
          {(updateHeight) => (
            <>
              {items.map((i) => (
                <li
                  key={i}
                  onClick={createClickHandler(updateHeight)}
                  className="additional-css"
                  style={{
                    transition: '300ms cubic-bezier(0.5, -0.5, 0.5, 1.5) ',
                    background: rndColor(),
                  }}
                >
                  Item {i}
                </li>
              ))}
            </>
          )}
        </AutoHeight>
        <i>
          (click an item to change content, click outside to re-render parent - colors and number of
          items in the list)
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
          AutoHeight + other solution will NOT work: ✗ <textarea onKeyPress={handleAutoResize} />
        </AutoHeight>
        <div style={{background: 'gold'}}>
          Other solution only: ✓ <textarea onKeyPress={handleAutoResize} />
        </div>
        <AutoHeight style={{background: 'yellowgreen'}}>
          {(updateHeight) => (
            <>
              AutoHeight render props (without other solution): ✓{' '}
              <textarea onKeyPress={updateHeight} />
            </>
          )}
        </AutoHeight>
        <pre>{`
          <AutoHeight>
            {(updateHeight) => (
            
              <textarea onKeyPress={updateHeight} />
              
            )}
          </AutoHeight>
        `}</pre>
        <i>(try typing long text into textareas)</i>
      </div>
    )
  })
