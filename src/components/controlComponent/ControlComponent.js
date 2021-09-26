import React from "react";

export class ControlComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }

        this.changeHandler = this.changeHandler.bind(this);
    }

    

    changeHandler(e) {
        this.props.onChangeControl({[this.props.name]: e.target.value})
        this.setState({value: e.target.value});
        console.log(e.target.name)
    }

    render() {
        return (
            <div>
                <input type="text" name={this.props.name} value={this.state.value} onChange={this.changeHandler}/>
            </div>
        );
    }
}