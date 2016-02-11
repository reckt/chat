import React from 'react';
import Message from './chat-message';

export default class ChatWindow extends React.Component {
    static propTypes = {
        messages: React.PropTypes.array.isRequired
    };
    render() {
        return (
            <ul>
                {this.props.messages.map(({ message, username }) => (
                    <li style={{
                        listStyle: "none"
                    }}>
                        <Message message={message} username={username} />
                    </li>
                ))}
            </ul>
        );
    }
}
