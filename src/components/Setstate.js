import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Setstate extends Component {
    constructor() {
        super();
        this.state = { name:'Maidul' }
    }

    changeName (a){
        this.setState({name:a})
    }

    render() { 
        return <div>
            <h1>{this.state.name}</h1>
            <button className='btn btn-success' onClick={this.changeName.bind(this,'Mukul')}>Click</button>
        </div>;
    }
}
 
export default Setstate;