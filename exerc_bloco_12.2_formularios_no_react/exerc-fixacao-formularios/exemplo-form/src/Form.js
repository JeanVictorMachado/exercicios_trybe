import React from 'react';
import './form.css';
import FormErrors from './FormErrors';

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

class Form extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
      addressType: '',
      resume: '',
      role: '',
      roleDescription: '',
      hasEntered: false,
      formErrors: {email: '', password: ''},
    };
  }

  changeHandler = event => {
    let { name, value } = event.target;

    if(name === 'name') value = value.toUpperCase()

    if(name === 'address') value = this.validateAddress(value)

    this.updateState(name, value)
  }

  onBlurHandler = event => {
    let { name, value } = event.target;

    if(name === 'city') value = value.match(/^\d/) ? '' : value

    this.updateState(name, value)
  }

  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
      formErrors: {
        ...state.formErrors,
        [name]: this.validateField(name, value)
      }
    }));
  }

  validateAddress = address => address.replace(/[^\w\s]/gi, '')

  handleSubmit = event => {
    event.preventDefault();
  }

  validateField(fieldName, value) {

    switch(fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
        return isValid ? '' : ' is invalid';
      default:
        break;
    }

    return '';
  }

  render() {
    return (
      <div>
        <h1>Exerc - React Forms</h1>
        <form className="form">
          <fieldset className="fieldSet">
            <legend>DADOS PESSOAIS</legend>
            <input value={this.state.name} onChange={this.changeHandler} className="espaco" type="name" name="name" placeholder="NOME:" required maxLength="40" />
            <input value={this.state.email} onChange={this.changeHandler} className="espaco" type="email" name="email" placeholder="EMAIL:" required maxLength="50" />
            <input value={this.state.cpf} onChange={this.changeHandler} className="espaco" type="text" name="cpf" placeholder="CPF:" required maxLength="11" />
            <input value={this.state.address} onChange={this.changeHandler} className="espaco" type="text" name="address" placeholder="ENDEREÇO:" required maxLength="200" />
            <input value={this.state.city} onBlur={this.onBlurHandler} onChange={this.changeHandler} className="espaco" type="text" name="city" placeholder="CIDADE:" required maxLength="28" />
            <select value={this.state.countryState} onChange={this.changeHandler} className="espaco" name="countryState" required >
              <option>UF:</option> 
              {states.map((value, key) => <option key={key}>{value}</option>)}
            </select>
            <label>
              <input className="espaco" type="radio" value="casa" /> CASA
              <input className="espaco" type="radio" value="apartamento" /> APARTAMENTO
            </label>
          </fieldset>
          <fieldset className="fieldSet">
            <legend>DADOS PROFISSIONAIS</legend>
            <label className="resumo espaco">
              <textarea value={this.state.resume} onChange={this.changeHandler} maxLength="1000" required placeholder="RESUMO DO CURRICULO:" />
            </label>
            <label className="resumo espaco">
              <textarea value={this.state.role} onChange={this.changeHandler} onMouseEnter={() => {
                    alert('Preencha com cuidado esta informação.') }} maxLength="40" required placeholder="CARGO:" />
            </label>
            <label className="resumo espaco">
              <textarea value={this.state.roleDescription} onChange={this.changeHandler} maxLength="500" required placeholder="DESCRIÇÃO DO CARGO:" />
            </label>
          </fieldset>
          <div className="buttons">
            <button className="enviar">ENVIAR</button>
            <button className="limpar">LIMPAR</button>
          </div>
        </form>
        <div className="container">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
      </div>
    )
  }
}

export default Form;