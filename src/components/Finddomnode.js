import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Finddomnode extends Component {

    clickme (){
        var compo = document.getElementById('di')
        ReactDOM.findDOMNode(compo).src = 'https://images.unsplash.com/photo-1593642703013-5a3b53c965f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80'
    }

    render() {
        return (
            <div>
                <button onClick={this.clickme}>Click</button><br></br>
                <img id="di" src="https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60"></img>
            </div>
        );
    }
}

export default Finddomnode;