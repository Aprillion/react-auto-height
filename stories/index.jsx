import React, {useState} from 'react'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'

import AutoHeight from '../src'

const header = (
  <p>
    This is a demo of{' '}
    <a href="https://github.com/Aprillion/react-auto-height">
      react-auto-height
    </a>
    .
  </p>
)

const minWidth = 130

storiesOf('AutoHeight', module)
  .addDecorator(withInfo)
  .addDecorator(Story => <Story />)
  .addParameters({
    options: {
      showPanel: false,
      isToolshown: false,
    },
    info: {
      inline: true,
      header: false,
      text: header,
      styles: {
        infoBody: {
          background: '#ddd',
        },
      },
    },
  })
  .add('Dynamic content', () => {
    const [content, setContent] = useState('\n ')
    const [background, setBackground] = useState('orange')
    const handleClick = () => {
      const rndLines = '.\n'.repeat(Math.random() * 20)
      const rndColor = Array.from(Array(3))
        .map(() => Math.floor(Math.random() * 100 + 155))
        .join(', ')
      setContent(`\n${rndLines}end`)
      setBackground(`rgb(${rndColor})`)
    }
    const style = {
      background,
      transition: '300ms /* overwriting transition for height */',
      whiteSpace: 'pre',
      cursor: 'pointer',
    }
    return (
      <>
        <AutoHeight onClick={handleClick} style={style}>
          click here to change content
          {content}
        </AutoHeight>
      </>
    )
  })
  .add('Nested AutoHeights are OK', () => {
    const [isShort, setIsShort] = useState(true)
    const handleClick = () => setIsShort(prev => !prev)
    const extra = isShort ? null : (
      <pre style={{margin: 0}}>{' ... extra\n ... extra'}</pre>
    )
    return (
      <div onClick={handleClick}>
        <i>(click to change content)</i>
        <div style={{display: 'flex', alignItems: 'flex-start'}}>
          <div style={{background: 'salmon', minWidth}}>
            none:
            <div>a{extra}</div>
            <div>b{extra}</div>
            <div>c{extra}</div>
            {extra}✗
          </div>
          <AutoHeight style={{background: 'orange', minWidth}}>
            outer AutoHeight:
            <div>a{extra}</div>
            <div>b{extra}</div>
            <div>c{extra}</div>
            {extra}✗
          </AutoHeight>
          <div style={{background: 'gold', minWidth}}>
            inner AutoHeights:
            <AutoHeight>a{extra}</AutoHeight>
            <AutoHeight>b{extra}</AutoHeight>
            <AutoHeight>c{extra}</AutoHeight>
            {extra}✓
          </div>
          <AutoHeight style={{background: 'yellowgreen', minWidth}}>
            2 levels of nesting:
            <AutoHeight>a{extra}</AutoHeight>
            <AutoHeight>b{extra}</AutoHeight>
            <AutoHeight>c{extra}</AutoHeight>
            {extra}✓
          </AutoHeight>
          <AutoHeight style={{background: 'gold', minWidth}}>
            3 levels of nesting:
            <AutoHeight>
              <AutoHeight>a</AutoHeight>
              <AutoHeight>{extra}</AutoHeight>
            </AutoHeight>
            <AutoHeight>
              <AutoHeight>b</AutoHeight>
              <AutoHeight>{extra}</AutoHeight>
            </AutoHeight>
            <AutoHeight>
              <AutoHeight>c</AutoHeight>
              <AutoHeight>{extra}</AutoHeight>
            </AutoHeight>
            <AutoHeight>{extra}</AutoHeight>¯\_(ツ)_/¯
          </AutoHeight>
        </div>
        <p>Nested AutoHeights should work fine. Please test more carefully.</p>
      </div>
    )
  })
  .add('Interferes with margin collapsing', () => {
    const [isShort, setIsShort] = useState(true)
    const handleClick = () => setIsShort(prev => !prev)
    const extra = isShort ? null : (
      <>
        <p> ... extra paragraph 1</p>
        <p> ... extra paragraph 2</p>
      </>
    )

    return (
      <div onClick={handleClick}>
        <p>
          paragraph <i>(click to change content)</i>
        </p>
        <p>paragraph</p>
        <p>
          <AutoHeight>
            Good-enough AutoHeight, inside margin-significant element{extra}
          </AutoHeight>
        </p>
        <p>paragraph</p>
        <AutoHeight>
          <p>
            Incorrect AutoHeight, preventing{' '}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">
              margin collapse
            </a>
            {extra}
          </p>
        </AutoHeight>
        <p>paragraph</p>
      </div>
    )
  })
  .add('Do NOT combine with other solutions', () => {
    const handleAutoResize = ev => {
      ev.currentTarget.style.height = ev.currentTarget.scrollHeight - 2 + 'px'
    }
    return (
      <div>
        Please do NOT combine AutoHeight with other auto-resizing solutions,
        e.g. a dynamic textarea:
        <br />
        <textarea
          onKeyDown={handleAutoResize}
          placeholder="I will expand for longer text"
        />
        <AutoHeight>
          <textarea
            onKeyDown={handleAutoResize}
            placeholder="I will too, but AutoHeight will not detect it"
          />
        </AutoHeight>
      </div>
    )
  })
