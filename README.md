> Work in progress - please DO NOT USE yet!

# AutoHeight

A React component that automagically transitions `height: auto` elements when their content is changed.

Browsers do not support the transition to or from `auto` value for 
width and height, see W3C issue [csswg-drafts#626](https://github.com/w3c/csswg-drafts/issues/626) for discussion. This is a workaround for React apps, inspired by the JavaScript technique from [CSS-Tricks](https://css-tricks.com/using-css-transitions-auto-dimensions/#article-header-id-5).

### Basic Usage

```jsx
const content = 'I can be different next render.'
<AutoHeight>
  {content}
</AutoHeight>
```

### Advanced Usage

https://aprillion.github.io/react-auto-height contains a Storybook.
