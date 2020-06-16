# AutoHeight

A React component that animates `height: auto` children when their content is changed, using CSS transitions.

Browsers do not support the transition to or from `auto` value for
height and width, see W3C issue [csswg-drafts#626](https://github.com/w3c/csswg-drafts/issues/626) for discussion.
This component implements a workaround inspired by the JavaScript technique from [CSS-Tricks](https://css-tricks.com/using-css-transitions-auto-dimensions/#article-header-id-5).

Use only if you have a trully dynamic content without deterministic height value. There is a small performance consideration (small when evaluated as an addition to the CSS transition itself) - after the first DOM paint that will follow a re-render, this components will cause multiple browser re-flows, to calculate the actual height, and then the CSS transition will start (estimated ~1ms on desktop for each AutoHeight, but YMMV).

### Installation

```bash
npm i react-auto-height
# or
yarn add react-auto-height
```

### Usage

```jsx harmony
import AutoHeight from 'react-auto-height'
...
let content = 'I can be different (or null) next render.'
return (
  <AutoHeight>
    {content}
  </AutoHeight>
)
```

See the Storybook in https://aprillion.github.io/react-auto-height for more examples.

![animated preview](./react-auto-height-in-action.gif)

### Development

```bash
yarn
yarn audit fix
yarn start
# make changes and manually test dynamic interactions in storybook
# update version in package.json
yarn build
git
npm publish
```
