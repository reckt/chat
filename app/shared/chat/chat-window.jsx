import React from 'react';
import Message from './chat-message';

export default class ChatWindow extends React.Component {
    static propTypes = {
        messages: React.PropType.array.isRequired
    };
    render() {
        return (
            <ul>
                {this.props.messages.map(message => (
                    <li><Message message={message} /></li>
                    ))}
            </ul>
        );
    }
}
