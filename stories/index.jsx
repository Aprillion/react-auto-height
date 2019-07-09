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
      transition: '300ms /* overwriting default transition for height */',
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
          default paragraph <i>(click to change content)</i>
        </p>
        <p>default paragraph</p>
        <p>
          <AutoHeight>
            Correct AutoHeight, inside margin-significant element{extra}
          </AutoHeight>
        </p>
        <p>default paragraph</p>
        <AutoHeight>
          <p>
            Incorrect AutoHeight, preventing{' '}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">
              margin collapse
            </a>
            {extra}
          </p>
        </AutoHeight>
        <p>default paragraph</p>
      </div>
    )
  })
  .add('Nested', () => {
    const [isShort, setIsShort] = useState(true)
    const handleClick = () => setIsShort(prev => !prev)
    const extra = isShort ? null : (
      <>
        <p> ... extra paragraph 1</p>
        <p> ... extra paragraph 2</p>
      </>
    )
    return (
      <AutoHeight onClick={handleClick}>
        click to change content
        <AutoHeight>nested 1{extra}</AutoHeight>
        <AutoHeight>nested 2{extra}</AutoHeight>
        <AutoHeight>nested 3{extra}</AutoHeight>
        end
      </AutoHeight>
    )
  })
  .add('Textarea (without AutoHeight)', () => {
    const handleAutoResize = ev => {
      ev.currentTarget.style.height = ev.currentTarget.scrollHeight + 'px'
    }
    return (
      <div>
        <p>Do NOT combine AutoHeight with other auto-resizing solutions!</p>
        <textarea
          onKeyDown={handleAutoResize}
          placeholder="I will expand for longer text"
        />
      </div>
    )
  })
