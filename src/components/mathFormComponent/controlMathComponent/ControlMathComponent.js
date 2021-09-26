import React from "react";

export class ControlMathComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }

        this.changeHandler = this.changeHandler.bind(this);
        this.checkNum = this.checkNum.bind(this)
    }

    changeHandler(e) {
        this.setState({ value: e.target.value });
        this.props.onChangeControl({ [this.props.name]: e.target.value })
    }

     checkNum(event) {
         if ((event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57) {
             return true;
         } else {
            event.preventDefault();
         }
    }

   

    render() {
        return (
            <div>
                <input type="text" name={this.props.name} value={this.state.value} onKeyPress={this.checkNum} onChange={this.changeHandler} />
            </div>
        );
    }
}
