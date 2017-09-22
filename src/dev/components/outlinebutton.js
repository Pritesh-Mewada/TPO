import React, { Component } from 'react';

class Outline extends Component{
    render(){
        return(
            <button className="Outline-button" >{this.props.name}</button>
        )
    }
}

export default Outline;