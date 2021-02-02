import React, { Component } from 'react';
import Context from './Context';

class Pai extends Component {

  render() {

    return (
      <div>
        <Context.Consumer>
          { (value) => (
            <div>
              <h2>{ value.cars.carBlue }</h2>
              <button onClick={ value.functionAlert }>Alert!!</button>
            </div>
          )}
        </Context.Consumer>
      </div>
    )
  }
}

export default Pai;
