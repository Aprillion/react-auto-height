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
  // TODO: more examples
  .add('Recursive', () => {
    return (
      <AutoHeight>
        blah blah
        <AutoHeight>nested 1</AutoHeight>
        <AutoHeight>nested 2</AutoHeight>
        <AutoHeight>nested 3</AutoHeight>
        TODO: add event handlers to show how nested AutoHeight interplay with a
        parent
      </AutoHeight>
    )
  })
