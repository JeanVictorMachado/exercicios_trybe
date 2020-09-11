import React from 'react';
import PropTypes from 'prop-types';

class UserOtherInfo extends React.Component {
    render() {
        // const id = this.props.id
        // const email = this.props.email
        const { id, email } = this.props

    return (<span>{id} {email}</span>)
    }
}

UserOtherInfo.propTypes = {
    email: PropTypes.string,
    id: PropTypes.number.isRequired
}

export default UserOtherInfo;