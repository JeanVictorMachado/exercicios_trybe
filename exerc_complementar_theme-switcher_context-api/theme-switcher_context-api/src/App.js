import React, { Component } from 'react';
import Context from './context/Context';

import Pai from './context/Pai';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cars: {
        carRed: 'red',
        carBlue: 'blue',
        carYellow: 'yellow'
      }
    }

    this.alert = this.alert.bind(this);
  }

  alert() {
    const { cars: { carBlue } } = this.state;

    if (carBlue === 'blue') {
      this.setState({
        cars: {
          carBlue: 'blue2'
        }
      })
    } else {
      this.setState({
        cars: {
          carBlue: 'blue'
        }
      })
    }

    alert(this.state.cars.carBlue)
  }

  render() {

    const contextValue = {
      cars: this.state.cars,
      functionAlert: this.alert
    }

    return (
      <div>
        <Context.Provider value={ contextValue }>
          <Pai />
        </Context.Provider>
      </div>
    )
  }
}

export default App;
