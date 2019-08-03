import React, {useState} from 'react'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'

import AutoHeight from '../src'
import './index.css'

const header = (
  <p>
    This is a demo of{' '}
    <a href="https://github.com/Aprillion/react-auto-height">
      react-auto-height
    </a>
    .
  </p>
)

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
    const [content, setContent] = useState('\n.')
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
      transition: '300ms; /* overwrite transition for height */',
    }
    return (
      <AutoHeight
        className="additional-css"
        style={style}
        onClick={handleClick}
      >
        click here multiple times to change content
        {content}
      </AutoHeight>
    )
  })
  .add('Nested AutoHeights', () => {
    const [isShort, setIsShort] = useState(true)
    const handleClick = () => setIsShort(prev => !prev)
    const extra = isShort ? null : <div>{' ... extra\n ... extra'}</div>
    return (
      <div onClick={handleClick} className="nested">
        <div>
          <div style={{background: 'salmon'}}>
            none:
            <div>.{extra}</div>
            <div>.{extra}</div>
            <b>{extra}</b>. ✗
          </div>
          <AutoHeight style={{background: 'orange'}}>
            outer AutoHeight:
            <div>.{extra}</div>
            <div>.{extra}</div>
            <b>{extra}</b>. ✗
          </AutoHeight>
          <div style={{background: 'gold'}}>
            inner AutoHeights:
            <AutoHeight>.{extra}</AutoHeight>
            <AutoHeight>.{extra}</AutoHeight>
            <b>{extra}</b>. ✓
          </div>
          <AutoHeight style={{background: 'yellowgreen'}}>
            2 levels of nesting:
            <AutoHeight>.{extra}</AutoHeight>
            <AutoHeight>.{extra}</AutoHeight>
            <b>{extra}</b>. ✓
          </AutoHeight>
          <AutoHeight style={{background: 'greenyellow'}}>
            3 levels of nesting:
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
        <p>Nested AutoHeights should work fine. Please test more carefully.</p>
      </div>
    )
  })
  .add('Interference with margin collapse', () => {
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
        <p>paragraph</p>
        <p>paragraph</p>
        <p>
          <AutoHeight>
            <b>Good AutoHeight, inside an element with margin</b>
            {extra}
          </AutoHeight>
        </p>
        <p>paragraph</p>
        <p>paragraph</p>
        <AutoHeight>
          <p>
            <b>
              Bad AutoHeight, containning a block element with margin,
              preventing
            </b>{' '}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">
              margin collapse
            </a>
            {extra}
          </p>
        </AutoHeight>
        <p>paragraph</p>
        <p>paragraph</p>
        <i>(click to change content)</i>
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
