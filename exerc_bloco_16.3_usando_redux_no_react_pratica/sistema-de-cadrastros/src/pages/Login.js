import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import addAssingnment from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      senha: ""
    }
  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">Email
            <input id="email" onChange={event => this.setState({ email: event.target.value })}/>
          </label>
          <label htmlFor="senha">Senha
            <input id="senha" onChange={event => this.setState({ senha: event.target.value })}/>
          </label>
          </form>
            <Link to={'/clientes-cadastrados'}>
              <button onClick={() => this.props.add(this.state)}>
                Enviar
            </button>
          </Link>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  add: e => dispatch(addAssingnment(e))});

export default connect(null, mapDispatchToProps)(Login);