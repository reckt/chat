import React from 'react';

export default class LoginInput extends React.Component {
    static propTypes = {
        signin: React.PropTypes.func.isRequired
    };
    register(event) {
        if (event.key === 'Enter') {
            this.props.signin(event.target.value);
        }
    }
    render() {
        return (
            <input type="text" placeholder="username" onKeyPress={this.register.bind(this)} />
        )
    }
}

