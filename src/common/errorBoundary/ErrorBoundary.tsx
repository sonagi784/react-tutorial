import React from 'react'

interface IProps {
  children?: any
}

interface IState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <div>error!</div>
    }
    return this.props.children
  }
}

export default ErrorBoundary
