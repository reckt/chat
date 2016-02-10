import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import chatApp from './redux/reducers';
import { signin } from './redux/actions';
import LoginInput from './shared/login-input';

const client = require('socket.io-client')('http://localhost:8080');
let store = createStore(chatApp);

class Chat extends React.Component {
    login(username) {
        this.props.dispatch(signin(username));
        client.emit('add user', username);
    }
    render() {
        return (
            <div>
                {this.props.username ?
                    <h1>Hello, {this.props.username}</h1>
                        :
                    <div>
                        <h1>Choose a Username</h1>
                        <LoginInput signin={this.login.bind(this)} />
                    </div>
                }
            </div>
        );
    }
}

let App = connect(
              state => ({
                  username: state.username
              })
)(Chat);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById('app'));
