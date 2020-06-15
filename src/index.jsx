import React, {useEffect, useRef} from 'react'
import './index.css'

const myClassName = 'react-auto-height'
const myPrevHeight = 'data-react-auto-height-previous-height'
const setNewHeight = (el) => {
  const origDelay = getComputedStyle(el).getPropertyValue('transition-delay')
  const origDuration = getComputedStyle(el).getPropertyValue('transition-duration')
  const origHeight = el.style.height || getComputedStyle(el).getPropertyValue('height')

  // find descendants created by nested AutoHeights and adjust future height of current element by the future heights of children
  // skip for first render
  let adjustBy = 0
  if (el.style.height) {
    el.setAttribute(myPrevHeight, el.style.height)
    let descendants = Array.from(el.children)
    for (const child of descendants) {
      const prevHeight = child.getAttribute(myPrevHeight)
      if (prevHeight) {
        adjustBy += parseInt(child.style.height) - parseInt(prevHeight)
      } else if (child.children && child.children.length) {
        Array.from(child.children).forEach((grandChild) => {
          if (grandChild.getAttribute) {
            descendants.push(grandChild)
          }
        })
      }
    }
  }

  el.style.transitionDelay = '0'
  el.style.transitionDuration = '0'
  el.style.height = 'auto'

  const newHeight = el.scrollHeight + adjustBy + 'px'
  el.style.height = origHeight

  el.scrollHeight // force reflow before re-enabling transitions

  el.style.transitionDelay = origDelay
  el.style.transitionDuration = origDuration
  el.style.height = newHeight
}

const AutoHeight = ({children, element = 'div', className: propClassName = '', ...props}) => {
  const Element = element
  const ref = useRef()

  const updateHeight = () => {
    const {current: el} = ref
    if (!el) {
      return
    }
    for (const child of el.children) {
      child.getAttribute && setNewHeight(child)
    }
  }

  useEffect(() => {
    if (typeof children === 'function') {
      updateHeight()
    } else {
      const {current: el} = ref
      el && setNewHeight(el)
    }
  })

  return (
    <Element ref={ref} className={`${myClassName} ${propClassName}`} {...props}>
      {typeof children === 'function' ? children(updateHeight) : children}
    </Element>
  )
}
AutoHeight.displayName = 'AutoHeigh'
export default AutoHeight
