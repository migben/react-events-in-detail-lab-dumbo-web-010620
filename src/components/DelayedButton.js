// Code DelayedButton Component Here
import React, { Component } from "react"

class DelayedButton extends Component {

   handleClicky = e => {
        e.persist()
        window.setTimeout( () => {
            this.props.onDelayedClick(e)
        }, this.props.delay)
    }

    render(){
        return <button onClick={this.handleClicky}>Delayed</button>
    }
}

export default DelayedButton