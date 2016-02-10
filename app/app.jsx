import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import chatApp from './redux/reducers';

const client = require('socket.io-client')('http://localhost:8080');
let store = createStore(chatApp);

class Chat extends React.Component {
    render() {
        return (
            <div>
                {this.props.username ? this.props.username : "Choose a Username"}
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
