import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import chatApp from './redux/reducers';
import { signin, addMessage } from './redux/actions';
import ChatInput from './shared/chat-input';
import ChatWindow from './shared/chat/chat-window';

const client = require('socket.io-client')('http://localhost:8080');
let store = createStore(chatApp);

class Chat extends React.Component {
    login(username) {
        this.props.dispatch(signin(username));
        client.emit('add user', username);
        this.props.dispatch(addMessage({ message: "Welcome to the chat!" }));
    }
    say(message) {
        this.props.dispatch(addMessage({ username: this.props.username, message }));
        client.emit('new message', message);
    }
    render() {
        return (
            <div>
                {this.props.username ?
                    <div>
                        <h1>Hello, {this.props.username}</h1>
                        <ChatWindow messages={this.props.messages} />
                        <ChatInput placeholder="what would you like to say?" submit={this.say.bind(this)} />
                    </div>
                        :
                    <div>
                        <h1>Choose a Username</h1>
                        <ChatInput placeholder="username" submit={this.login.bind(this)} />
                    </div>
                }
            </div>
        );
    }
}

let App = connect(
              state => ({
                  username: state.username,
                  messages: state.messages
              })
)(Chat);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById('app'));
