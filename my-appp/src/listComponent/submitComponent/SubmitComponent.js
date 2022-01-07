import React from "react";

export class SubmitComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            value: ''
        }
    }

    submitHandler(e) {
        e.preventDefault();
        if (this.state.value !== '') {
            this.props.onSubmit(this.state.value)
        }
        this.setState({ value: '' });
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="Enter task" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Add Task" />
            </form>
        );
    }
}