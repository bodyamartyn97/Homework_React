import React from "react";
import styles from './ControlComponent.module.scss';

export class ControlComponent extends React.Component {
    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e) {
            this.props.onChangeControl(this.props.name, e.target.value)
    }

    render() {
        return (
            <div className={styles.form_input}>
                <label>Введите {this.props.name}</label>
                <input type="text" onChange={this.changeHandler} className={this.props.isInvalid ? styles.error : undefined} name={this.props.name} value={this.props.value}  />
            </div>
        );
    }
}