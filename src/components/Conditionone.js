import React, { Component } from 'react';

class Conditionone extends Component {
    constructor(props) {
        super(props);
        this.state = { login:false }
    }
    render() { 
        return this.state.login?<h1>Logout</h1>:<h1>Login</h1>
    }
}
 
export default Conditionone;