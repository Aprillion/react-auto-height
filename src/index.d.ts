declare function AutoHeight(
  props: {
    children: JSX.Element | ((updateHeight: () => void) => JSX.Element)
    element: keyof React.ReactHTML | React.ComponentType
    className: string
  } & {
    [prop: string]: React.ComponentProps<'div'>
  },
): JSX.Element

export default AutoHeight
