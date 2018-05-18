import React, {Component} from 'react'
import omit from 'lodash/omit'

class AsyncLoader extends Component {

  static defaultProps = {
    loadKey: '',
    load: () => {},
    renderLoading: () => {
      return (
        <div>Loading...</div>
      )
    },
    renderError: (err) => {
      console.error(err)
      return (
        <div style={{backgroundColor: '#F22', position: 'fixed', top: 0, right: 0, left: 0, bottom: 0}}>
          <pre style={{color: '#FFF'}}>
            {err.stack || err.message || err}
          </pre>
        </div>
      )
    },
   
  }

  state = {
    loadState: 1,
    CurrentComponent: null,
    error: null
  }

  componentDidMount = () => {
    this.load(this.props)
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.loadKey !== prevProps.loadKey) {
      this.load(this.props)
    }
  }

  load = (props) => {
    this.setState({
      loadState: 1,
      CurrentComponent: null
    })
    props.load((e, CurrentComponent) => {
      if (e) {
        return this.setState({
          loadState: 3,
          error: e
        })
      }
      this.setState({
        loadState: 2,
        // handle both es module and commonjs
        CurrentComponent: CurrentComponent.default ? CurrentComponent.default : CurrentComponent
      })
    })
  }

  renderSuccess = (CurrentComponent) => {
    const pickedProps = omit(this.props, ['load', 'loadKey'])
    return (
      <CurrentComponent {...pickedProps}/>
    )
  }

  render(){
    const {renderLoading, renderError} = this.props
    const {loadState, CurrentComponent, error} = this.state

    if (typeof this.props.children === 'function') {
      return this.props.children(loadState, CurrentComponent, error)
    }

    const renderSuccess = this.props.renderSuccess || this.renderSuccess

    return loadState === 1 ?
      renderLoading():
      loadState === 2 ?
        renderSuccess(CurrentComponent):
        renderError(error)
  }
}

export default AsyncLoader