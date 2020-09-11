import React from 'react';
import './UserName.css';
import PropTypes from 'prop-types';

class UserName extends React.Component {
    render() {
        const name = this.props.name

        return (<span className="name">{name}</span>)
    }
}
// define quais os tipos das informacoes
UserName.propTypes = {
    name: PropTypes.string
}
// define alguma coisa se nao for passado nada como parametro
UserName.defaultProps = {
    name: 'Stranger'
}

export default UserName;