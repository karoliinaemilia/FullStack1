import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter1: 0,
      counter2: 0,
      counter3: 0
    }
  }

  kasvataYhdella = (nappi) => {
    return () => {
      if (nappi === 1) {
        this.setState({ counter1: this.state.counter1 + 1 })
      } else if (nappi === 2) {
        this.setState({ counter2: this.state.counter2 + 1 })
      } else {
        this.setState({ counter3: this.state.counter3 + 1 })
      }
    }
  }

  render() {
    return (
      <div>
        <h1>anna palautetta</h1>
        <button onClick={this.kasvataYhdella(1)}>
          hyvä
        </button>
        <button onClick={this.kasvataYhdella(2)}>
          neutraali
        </button>
        <button onClick={this.kasvataYhdella(3)}>
          huono
        </button>
        <div>{this.state.counter}</div>
        <h1>statistiikka</h1>
        <p>hyvä: {this.state.counter1}</p>
        <p>neutraali: {this.state.counter2}</p>
        <p>huono: {this.state.counter3}</p>
      </div>
    )
  }
}


ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
