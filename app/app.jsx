import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import chatApp from './redux/reducers';

let store = createStore(chatApp);

class Chat extends React.Component {
    render() {
        return (
            <h1>Hello World!</h1>
        );
    }
}

ReactDOM.render(<Provider store={store}>
                    <Chat />
                </Provider>,
                document.getElementById('app'));
