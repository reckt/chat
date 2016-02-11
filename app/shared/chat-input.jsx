import React from 'react';

export default class ChatInput extends React.Component {
    static propTypes = {
        submit: React.PropTypes.func.isRequired,
        placeholder: React.PropTypes.string
    };
    change(event) {
        if (event.key === 'Enter') {
            this.props.signin(event.target.value);
        }
    }
    render() {
        return (
            <input type="text" placeholder={this.props.placeholder} onKeyPress={this.change.bind(this)} />
        )
    }
}

