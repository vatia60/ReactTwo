import React, { Component } from 'react';

class Forceupdate extends Component {
    constructor(props) {
        super(props);
        this.refreshnow = this.refreshnow.bind(this)
    }
     refreshnow(){
         this.forceUpdate()
     }
    render() { 
        return <div>
            <button onClick={this.refreshnow}>Refresh</button>
    <h1>{Math.random()}</h1>
        </div>;
    }
}
 
export default Forceupdate;