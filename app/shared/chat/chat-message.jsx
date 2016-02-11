import React from 'react';

export default class Message extends React.Component {
    static propTypes = {
        message: React.PropTypes.string.isRequired,
        username: React.PropTypes.string
    };
    render() {
        return (<p>{this.props.username ? this.props.username + ": " : ""}{this.props.message}</p>);
    }
}
