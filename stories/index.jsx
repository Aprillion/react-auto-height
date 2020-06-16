import React, {useState} from 'react'
import {storiesOf} from '@storybook/react'

import AutoHeight from '../src'
import './index.css'

const intro = (
  <div className="intro">
    <h2>AutoHeight examples</h2>
    Demo of{' '}
    <a href="https://www.npmjs.com/package/react-auto-height" target="_blank" rel="noopener">
      <code>react-auto-height</code>
    </a>
    , full storybook source code available on{' '}
    <a
      href="https://github.com/Aprillion/react-auto-height/blob/master/stories/index.jsx"
      target="_blank"
      rel="noopener"
    >
      github
    </a>
    .
  </div>
)

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
        {intro}
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
      <div onClick={handleClick}>
        {intro}
        <div className="nested">
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
  .add('Custom element', () => {
    const [itemCount, setCount] = useState(5)
    const [expanded, setExpanded] = useState({})
    const [colors, setColors] = useState(Array.from(Array(itemCount)).map((_) => rndColor()))
    const items = Array.from(Array(itemCount)).map((_, i) => i)

    const createClickHandler = (id) => (event) => {
      event.stopPropagation()
      setExpanded((prev) => ({...prev, [id]: !prev[id]}))
    }

    const handleReRender = () => {
      const nextCount = 2 + Math.floor(Math.random() * 10)
      setCount(nextCount)
      setColors(Array.from(Array(nextCount)).map((_) => rndColor()))
    }

    return (
      <div onClick={handleReRender}>
        {intro}
        <pre>{`
          <AutoHeight element="ul">
            {items}
          </AutoHeight>
        `}</pre>
        <AutoHeight element="ul">
          {items.map((item) => (
            <AutoHeight
              element="li"
              onClick={createClickHandler(item)}
              style={{
                background: colors[item],
                overflow: 'visible',
                transition: '200ms cubic-bezier(0, -0.5, 1, 1.5)',
              }}
              className="additional-css"
              key={item}
            >
              item {item}
              {expanded[item] ? '\n.'.repeat(1 + (itemCount % 5)) : ''}
            </AutoHeight>
          ))}
        </AutoHeight>
        <i>
          (click an item to expand/collapse, click outside to re-render number of items in the list)
        </i>
      </div>
    )
  })
  .add('Textarea (controlled via render props)', () => {
    const handleAutoResize = (ev) => {
      ev.currentTarget.style.height = ev.currentTarget.scrollHeight - 2 + 'px'
    }
    return (
      <div>
        {intro}
        <pre>{`
          <AutoHeight>
            {(updateHeight) => (
              <textarea onInput={updateHeight} />
            )}
          </AutoHeight>
        `}</pre>
        <AutoHeight style={{background: 'yellowgreen'}}>
          {(updateHeight) => (
            <>
              AutoHeight render props: ✓ <textarea onInput={updateHeight} />
            </>
          )}
        </AutoHeight>
        <br />
        Please do NOT combine AutoHeight with other auto-resizing solutions:
        <AutoHeight style={{background: 'orange'}}>
          AutoHeight + other solution will NOT work: ✗ <textarea onKeyPress={handleAutoResize} />
        </AutoHeight>
        <div style={{background: 'gold'}}>
          Other solution only: ✓ <textarea onKeyPress={handleAutoResize} />
        </div>
        <i>(try typing long text into textareas)</i>
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
      <>
        {intro}
        <pre>
          <AutoHeight>
            {'<AutoHeight>'}
            <Child />
            {'  '}...
            <Child />
            {'</AutoHeight>'}
          </AutoHeight>
        </pre>
        <i>
          (click on individual children to re-render them and update parent height, without
          re-rendering the parent)
        </i>
      </>
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
      <>
        {intro}
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
      </>
    )
  })
