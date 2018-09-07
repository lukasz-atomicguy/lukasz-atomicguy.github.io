import React from "react";
import "./Counter.css";
import Display from "./Display";
import Button from "./Button";
import Step from "./Step";


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.init,
            start: false,
            fieldVal: "",
        }
    }

    addOne = () => {
        this.setState((oldCounter) => {
            return {
                counter: +oldCounter.counter + +this.state.fieldVal,
            }
        });
    }

    onUpdate = (val) => {
        this.setState({
            fieldVal: val
        });
//        console.log(val);
//        return val;
    };

    reset() {
        this.setState((oldCounter) => {
            return {
                counter: 0,
            }
        });
    }

    countDown = () => {
        var self = this;

        self.setState((oldCounter) => {
            return {
                start: true,
            }
        });

        var sti = setInterval(function () {
            if (self.state.counter === 1) {
                clearInterval(sti);

                self.setState((oldCounter) => {
                    return {
                        start: false,
                    }
                });

            }
            self.setState((oldCounter) => {
                return {
                    counter: oldCounter.counter - 1,
                }
            })
        }, 1000);
    }

    render() {
        return ( <
            div id = "counter" >
            <
            div className = "output" >
            <
            Display currentCount = {
                this.state.counter
            }
            /> <
            /div> <
            div className = "btns" >
            <
            Button start = {
                false
            }
            updateCounter = {
                this.addOne
            }
            text = {"+" + this.state.fieldVal} / > {
                this.state.counter > 0 ? < Button start = {
                    this.state.start
                }
                updateCounter = {
                    this.countDown
                }
                text = "Odliczaj" / > : null
            } <
            /div> <
            div >
            <
            label id = "krok"
            htmlFor = "krok" > Zwiększ o : < /label> <Step onUpdate={this.onUpdate} / >
            <
            /div> <
            /div>
        );
    }
}

export default Counter;


