import React from "react";
import { ControlComponent } from "../controlComponent/ControlComponent";
import styles from './FormComponent.module.scss'

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                login: '',
                firstName: '',
                lastName: ''
            },

            isShowResult: false

        }

        this.submitHandler = this.submitHandler.bind(this);
        this.onChangeControl = this.onChangeControl.bind(this);
        this.showValues = this.showValues.bind(this);
    }

    submitHandler(e) {
        e.preventDefault();
        console.log(e.target)
    }

    onChangeControl(obj) {
        this.setState({ form: { ...this.state.form, ...obj } });

    }

    showValues() {
            this.setState({ isShowResult: true });        
    }

    render() {
        return (
            <div className={styles.container}>
                <form onSubmit={this.submitHandler}>
                    <ControlComponent onChangeControl={this.onChangeControl} name="login" />
                    <ControlComponent onChangeControl={this.onChangeControl} name="firstName" />
                    <ControlComponent onChangeControl={this.onChangeControl} name="lastName" />
                    <div className={styles.btnSubmit}>
                        <input type="submit" value="Submit" onClick={this.showValues} />
                    </div>
                </form>
                {this.state.isShowResult && <p>Данные отправлены</p>}
            </div>

        );
    }

}

export default FormComponent;