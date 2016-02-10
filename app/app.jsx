import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import chatApp from './redux/reducers';

let store = createStore(chatApp);

class Chat extends React.Component {
    render() {
        return (
            <h1>{this.props.username}</h1>
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
