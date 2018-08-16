import React from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return <button onClick={props.onClick}>{props.nimi}</button>
}

const Statistics = (props) => { 
  if (props.hyva === 0 && props.neutraali === 0 && props.huono === 0) {
    return <p>ei yhtään palautetta annettu</p>
  } else {
    return (
      <table>
        <tbody>
          <Statistic nimi="hyvä" arvo={props.hyva} />
          <Statistic nimi="neutraali" arvo={props.neutraali} />
          <Statistic nimi="huono" arvo={props.huono} />
          <Statistic nimi="keskiarvo" arvo={props.ka} />
          <Statistic nimi="positiivisia" arvo={props.pos + " %"} />
        </tbody>
      </table>
    )
  }
} 


const Statistic = (props) => {
   return (
      <tr>
        <td>{props.nimi}</td>
        <td>{props.arvo}</td>
      </tr>
   )
}

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

    const hy = this.state.counter1
    const n = this.state.counter2
    const hu = this.state.counter3
    const total = hy+hu+n
    const ka = Math.round(((hy-hu)/(total))*10)/10
    const pos = Math.round(((hy/total)*100)*10)/10

  
    return (
      <div>
        <h1>anna palautetta</h1>
        <Button onClick={this.kasvataYhdella(1)} nimi="hyvä" />
        <Button onClick={this.kasvataYhdella(2)} nimi="neutraali" />
        <Button onClick={this.kasvataYhdella(3)} nimi="huono" />
        <h1>statistiikka</h1>
        <Statistics hyva={hy} neutraali={n} huono={hu} ka={ka} pos={pos} />
      </div>
    )
  }
}


ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
