import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Reactdom extends Component {

    myfun(){
        var container = document.getElementById('idn')
        var element = <h2>Second comment</h2>

        var callback = function(){
            alert('ok')
        }

        ReactDOM.render(element, container, callback)
    }
    render() {
        return (
            <div>
                <button onClick={this.myfun}>Click</button>
                <h1 id="idn">First comment</h1>
            </div>
        );
    }
}

export default Reactdom;