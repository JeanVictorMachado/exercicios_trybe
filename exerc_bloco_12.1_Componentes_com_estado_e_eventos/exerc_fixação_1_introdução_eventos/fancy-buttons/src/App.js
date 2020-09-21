import React from 'react';

class App extends React.Component {
  constructor() {
    super()

      this.handClick1 = this.handClick1.bind(this)
      this.state = {numeroDeClicks: 0}
  }

  handClick1() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeClicks: estadoAnterior.numeroDeClicks + 1
    }))
    //console.log(this.state.numeroDeClicks)
    this.greenButton(this.state.numeroDeClicks)
  }

  greenButton(numeroDeClicks) {
    //console.log(this.state.numeroDeClicks)
    if (numeroDeClicks % 2 === 0) {
        console.log(this.state.numeroDeClicks)
        console.log("Green")
    }
  }


  render() {
    return (
      <div>
        <button onClick={this.handClick1}>{this.state.numeroDeClicks}</button>
      </div>
    )
  }
}


export default App;
