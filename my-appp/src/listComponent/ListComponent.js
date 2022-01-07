import React from "react";
import { SubmitComponent } from "./submitComponent/SubmitComponent";
import { v4 } from 'uuid';
import { List } from "./list/List";
import styles from "./ListComponent.module.scss"



export class ListComponent extends React.Component {

    state = {
        list: [],
    }

    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    submitHandler(value) {
        const data = {
            id: v4(),
            value,
            checked: false
        }
        this.setState({ list: [...this.state.list, data] })
    }

    onDeleteHandler(id) {
        this.setState({ list: this.state.list.filter(li => li.id !== id) })
    }

    onChange(id, checked) {
        let item = this.state.list.find(element => element.id === id);
        item.checked = checked;
        this.setState({ list: this.state.list })
    }

    render() {
        return (
            <div>
                <p>У вас накопилось {this.state.list.length} задач</p>
                <SubmitComponent onSubmit={this.submitHandler} />
                <List onChange={this.onChange} list={this.state.list} onDelete={this.onDeleteHandler} />
            </div>

        );
    }

}