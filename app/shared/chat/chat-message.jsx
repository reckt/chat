import React from 'react';

export default class Message extends React.Component {
    static propTypes = {
        message: React.PropTypes.string.isRequired,
        me: React.PropTypes.bool.isRequired,
        username: React.PropTypes.string
    };
    render() {
        return (
            <div className={this.props.me ? "bubble me" : "bubble other"}>
                {this.props.username ? this.props.username + ": " : ""}{this.props.message}
            </div>
        );
    }
}
