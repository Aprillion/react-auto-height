import React, {useEffect, useRef} from 'react'
import './index.css'

const myClassName = 'react-auto-height'
const myAdjustHeight = 'data-react-auto-height-adjust-height'

const needsUpdate = new Set()
const updateParents = () => {
  setTimeout(() => {
    for (const el of needsUpdate) {
      setNewHeight(el)
    }
  }, 0)
}

const setNewHeight = (el) => {
  const origDelay = getComputedStyle(el).getPropertyValue('transition-delay')
  const origDuration = getComputedStyle(el).getPropertyValue('transition-duration')
  const origHeight = el.style.height || getComputedStyle(el).getPropertyValue('height')

  el.style.transitionDelay = '0'
  el.style.transitionDuration = '0'
  el.style.height = 'auto'

  const adjustHeight = parseInt(el.getAttribute(myAdjustHeight)) || 0
  const newHeight = el.scrollHeight + adjustHeight + 'px'
  el.style.height = origHeight

  el.scrollHeight // force reflow before re-enabling transitions

  el.style.transitionDelay = origDelay
  el.style.transitionDuration = origDuration
  el.style.height = newHeight

  el.setAttribute(myAdjustHeight, 0)
  needsUpdate.delete(el)

  if (origHeight != newHeight) {
    const myAdjust = parseInt(newHeight) - parseInt(origHeight)
    let parent = el.parentElement
    while (parent) {
      if (parent.className.includes(myClassName)) {
        const existingAdjust = parseInt(parent.getAttribute(myAdjustHeight)) || 0
        parent.setAttribute(myAdjustHeight, existingAdjust + myAdjust)
        needsUpdate.add(parent)
        parent = null
      } else {
        parent = parent.parentElement
      }
    }
  }
}

const AutoHeight = ({children, element = 'div', className: propClassName = '', ...props}) => {
  const Element = element
  const ref = useRef()

  const updateHeight = () => {
    const {current: el} = ref
    if (!el) {
      return
    }
    if (typeof children === 'function') {
      for (const child of el.children) {
        child.getAttribute && setNewHeight(child)
      }
    }
    setNewHeight(el)
    updateParents()
  }

  useEffect(() => {
    updateHeight()
  })

  return (
    <Element ref={ref} className={`${myClassName} ${propClassName}`} {...props}>
      {typeof children === 'function' ? children(updateHeight) : children}
    </Element>
  )
}
AutoHeight.displayName = 'AutoHeigh'
export default AutoHeight
