// Code CoordinatesButton Component Here
import React, {Component} from "react"

class CoordinatesButton extends Component {


    handleClick = event => {
        let arr = [event.screenX, event.screenY]

        this.props.onReceiveCoordinates( arr )
    }

    render() {
        return(
            <div>
                <button onClick={ this.handleClick }></button>
            </div>
        )
    }
}

export default CoordinatesButton;