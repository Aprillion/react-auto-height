# AutoHeight

A React component that animates `height: auto` children when their content is changed, using CSS transitions.

Browsers do not support the transition to or from `auto` value for
width and height, see W3C issue [csswg-drafts#626](https://github.com/w3c/csswg-drafts/issues/626) for discussion.
This component implements a workaround inspired by the JavaScript technique from [CSS-Tricks](https://css-tricks.com/using-css-transitions-auto-dimensions/#article-header-id-5).

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

### Development

```bash
npm i
npm audit fix
npm start
# make changes and manually test dynamic interactions in storybook
# update version in package.json
npm run build
git
npm publish
```
