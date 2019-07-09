import React, {useState} from 'react'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'

import AutoHeight from '../src'

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
      styles: {
        infoBody: {
          background: '#ddd',
        },
      },
    },
  })
  .add('Dynamic content', () => {
    const msg = 'click to change content'
    const [content, setContent] = useState(msg)
    const [background, setBackground] = useState('orange')
    const handleClick = () => {
      const rndLines = '.\n'.repeat(Math.random() * 20)
      const rndColor = Array.from(Array(3))
        .map(() => Math.floor(Math.random() * 100 + 155))
        .join(', ')
      setContent(`${msg}\n${rndLines}end`)
      setBackground(`rgb(${rndColor})`)
    }
    const style = {
      background,
      transition: '300ms /* overwriting transition for height */',
      whiteSpace: 'pre',
      cursor: 'pointer',
    }
    return (
      <AutoHeight onClick={handleClick} style={style}>
        {content}
      </AutoHeight>
    )
  })
  .add('Margin collapsing', () => {
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
  .add('Nested AutoHeights', () => {
    const [isShort, setIsShort] = useState(true)
    const handleClick = () => setIsShort(prev => !prev)
    const extra = isShort ? null : <pre>{' ... extra\n ... extra'}</pre>
    return (
      <div onClick={handleClick}>
        <i>(click to change content)</i>
        <div style={{display: 'flex', alignItems: 'flex-start'}}>
          <AutoHeight style={{background: 'orange', minWidth: 150}}>
            nested:
            <AutoHeight>1{extra}</AutoHeight>
            <AutoHeight>2{extra}</AutoHeight>
            <AutoHeight>3{extra}</AutoHeight>✗
          </AutoHeight>
          <AutoHeight style={{background: 'gold', minWidth: 150}}>
            outer only:
            <div>1{extra}</div>
            <div>2{extra}</div>
            <div>3{extra}</div>
            ¯\_(ツ)_/¯
          </AutoHeight>
          <div style={{background: 'yellowgreen', minWidth: 150}}>
            inner only:
            <AutoHeight>1{extra}</AutoHeight>
            <AutoHeight>2{extra}</AutoHeight>
            <AutoHeight>3{extra}</AutoHeight>✓
          </div>
        </div>
        <p>
          Nested AutoHeight components will take longer to animate, +100%
          for each level because an outer layer has to wait until inner layers
          reach their final height.
        </p>
      </div>
    )
  })
  .add('Without AutoHeight', () => {
    const handleAutoResize = ev => {
      ev.currentTarget.style.height = ev.currentTarget.scrollHeight + 'px'
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
          <textarea onKeyDown={handleAutoResize} placeholder="I will too, but AutoHeight will not detect it" />
        </AutoHeight>
      </div>
    )
  })
