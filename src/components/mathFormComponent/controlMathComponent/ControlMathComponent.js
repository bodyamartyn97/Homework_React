import React from "react";

export class ControlMathComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e) {
        if ((e.target.value !== null) && (/^\d+$/.test(e.target.value))) {
            this.setState({ value: e.target.value });
            this.props.onChangeControl({ [this.props.name]: e.target.value })
        }
    }

    render() {
        return (
            <div>
                <input type="text" name={this.props.name} value={this.state.value} onChange={this.changeHandler} />
            </div>
        );
    }
}
