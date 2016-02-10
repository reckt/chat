import React from 'react';

export default class Message extends React.Component {
    static propTypes = {
        message: React.PropTypes.string.isRequired
    };
    render() {
        return (<p>{this.props.message}</p>);
    }
}
