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
    const [isShort, setIsShort] = useState(true)
    const content = isShort ? (
      'Short content - click to make longer'
    ) : (
      <div style={{whiteSpace: 'pre'}}>
        {
          'Long content\n. (animation not implemented yet, TDD in progress)\n.\n.\n.\n.\n...all the way here - click to make shorter'
        }
      </div>
    )
    return (
      <div onClick={() => setIsShort(x => !x)}>
        <AutoHeight>{content}</AutoHeight>
      </div>
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
