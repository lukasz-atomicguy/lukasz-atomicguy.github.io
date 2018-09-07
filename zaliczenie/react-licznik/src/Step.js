import React, {
    Component
} from "react";

class Step extends Component {

    constructor(props) {
        super(props);
        
    this.state = {
      fieldVal: ""
    }
    }

    //    updateButton(){
    //            this.props.updateCounter();
    //        }

    //    onChange(e) {
    //        let value = e.target.value;
    //        console.log(value);
    //        return value;
    //    }

    update = (e) => {
        console.log(e.target.value);
        this.props.onUpdate(e.target.value);
        this.setState({
            fieldVal: e.target.value
        });
    };

    render() {
        return ( <
            input className = "wybierz-krok"
            type = "number"
            min = "1"
            id = "krok"
            name = "krok"
            onChange = {
                this.update
            }
            value={this.state.fieldVal}
            />
        )
    }
}



export default Step;
