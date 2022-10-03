import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 1}
  onIncrement = () => {
    this.setState(prevState => {
      console.log(`previous value is ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  onDecrement = () => {
    this.setState(prevState => {
      console.log(`previous value is ${prevState.count}`)
      return {count: prevState.count - 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className=" container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button onClick={this.onIncrement} className="button">
            increase
          </button>
          <button onClick={this.onDecrement} className="button">
            decrase
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
