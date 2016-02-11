import React from 'react';
import Message from './chat-message';

export default class ChatWindow extends React.Component {
    static propTypes = {
        messages: React.PropTypes.array.isRequired,
        username: React.PropTypes.string.isRequired
    };
    render() {
        return (
            <ul>
                {this.props.messages.map(({ message, username }) => (
                    <li style={{
                        listStyle: "none"
                    }}>
                        <Message me={this.props.username === username} message={message} username={username} />
                    </li>
                ))}
            </ul>
        );
    }
}
