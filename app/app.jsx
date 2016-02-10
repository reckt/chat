import React from 'react';
import ReactDOM from 'react-dom';

class Chat extends React.Component {
    render() {
        return (
            <h1>Hello World!</h1>
        );
    }
}

ReactDOM.render(<Chat />, document.getElementById('app'));
