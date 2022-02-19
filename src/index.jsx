import React, {useEffect, useRef} from 'react'
import './index.css'

const myClassName = 'react-auto-height'
const myAdjustHeight = 'data-react-auto-height-adjust-height'
const elementsToUpdate = new Set()
let isUpdateScheduled = false

/**
 * Reusable function to set height property of a DOM element to an absolute value (in px),
 * based on the element's "natural" scrollHeight as if it had height:auto style
 * (i.e. to the height of its content). This function needs to be called after every
 * content change (e.g. in React.useEffect, but it would work without React too).
 *
 * This is useful for CSS transitions based on height, because browsers cannot transition
 * the auto value (as explained in README.md).
 *
 * Summary of the implementation logic:
 *  1. disable transitions
 *  2. set height to auto
 *  3. measure scrollHeight
 *  4. set height to the original value (and force reflow to "apply" the change)
 *  5. enable transitions
 *  6. set height to the explicit value measured in step 2
 *
 * If the DOM tree contains nested elements with height transition, the future height of the
 * parent needs to be adjusted to include the future height of the children, not just the
 * current scrollHeight. So if an element detects that some ancestor will need to be adjusted,
 * it modifies a singleton set `elementsToUpdate` - shared by all elements on a page, to avoid
 * overcompensation if the ancestor contains multiple height transitioned elements.
 *
 * Thus, if the current element is one of those previously flagged in `elementsToUpdate`,
 * step 6. also includes the height adjustment communicated from nested children. All children
 * must pre processed before the parents (which is how React.useEffect works out of the box),
 * so that we can remove the currently processed element from `elementsToUpdate`.
 *
 * @param {HTMLElement} el DOM element used as a wrapper for dynamic content,
 *                         must have style compatible with height:auto (e.g. display:block)
 */
function setNewHeight(el) {
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
  elementsToUpdate.delete(el)

  if (origHeight != newHeight) {
    const myAdjust = parseInt(newHeight) - parseInt(origHeight)
    let parent = el.parentElement
    while (parent) {
      if (parent.className.includes(myClassName)) {
        const existingAdjust = parseInt(parent.getAttribute(myAdjustHeight)) || 0
        parent.setAttribute(myAdjustHeight, existingAdjust + myAdjust)
        elementsToUpdate.add(parent)
        parent = null
      } else {
        parent = parent.parentElement
      }
    }
    updateParents()
  }
}

/**
 * If React (or other library) re-renders all Components, the `elementsToUpdate` set will be empty
 * in the end. However, if only a sub-tree is re-rendered, some ancestor DOM elements might need
 * to adjust to the new height of their re-rendered (grand)children.
 *
 * Thus, schedule a check in the next JS event loop tick to setNewHeight for all elements that
 * might still need to be adjusted even after all library effects were applied in the current tick.
 */
function updateParents() {
  if (isUpdateScheduled || elementsToUpdate.size === 0) return

  isUpdateScheduled = true
  setTimeout(() => {
    isUpdateScheduled = false
    for (const el of elementsToUpdate) {
      setNewHeight(el)
    }
  }, 0)
}

function AutoHeight({children, element = 'div', className: propClassName = '', ...props}) {
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
  }

  useEffect(updateHeight)

  return (
    <Element ref={ref} className={`${myClassName} ${propClassName}`} {...props}>
      {typeof children === 'function' ? children(updateHeight) : children}
    </Element>
  )
}
AutoHeight.displayName = 'AutoHeight'
export default AutoHeight
