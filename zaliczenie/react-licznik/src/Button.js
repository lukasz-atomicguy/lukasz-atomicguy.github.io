import React, {Component} from "react";

class Button extends Component {
    constructor(props){
        super(props);
    }
    
    updateButton(){
        this.props.updateCounter();
    }
    
    render(){
        return(
            <button disabled={this.props.start == true ? true : false} onClick={() => this.updateButton()}>{this.props.text}</button>
        )
    }
}

export default Button;