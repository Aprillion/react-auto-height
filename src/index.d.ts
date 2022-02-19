declare function AutoHeight(
  props: {
    children?: JSX.Element | ((updateHeight: () => void) => JSX.Element) | false
    element?: keyof React.ReactHTML | React.ComponentType
    className?: string
  } & Record<string, unknown>,
): JSX.Element

export default AutoHeight
