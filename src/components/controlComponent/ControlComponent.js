import React from "react";
import styles from './ControlComponent.module.scss';

export class ControlComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isValid: false
        }
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e) {
            this.props.onChangeControl({ [this.props.name]: e.target.value })
            this.setState({ value: e.target.value });
            if ((e.target.value !== null) && !(/^\d+$/.test(e.target.value))) {
                this.setState({isValid: true})
            }     
    }

    render() {
        return (
            <div className={styles.form_input}>
                <label>Введите {this.props.name}</label>
                <input type="text" className={!this.state.isValid ? styles.error : undefined} name={this.props.name} value={this.state.value} onChange={this.changeHandler} />
            </div>
        );
    }
}