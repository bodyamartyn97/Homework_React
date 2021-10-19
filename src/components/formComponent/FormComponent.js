import React from "react";
import { ControlComponent } from "../controlComponent/ControlComponent";
import styles from './FormComponent.module.scss'

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                login: {
                    value: '',
                    isInvalid: false
                },
                firstName: {
                    value: '',
                    isInvalid: false
                },
                lastName: {
                    value: '',
                    isInvalid: false
                }
            },

            isShowResult: false,

        }

        this.submitHandler = this.submitHandler.bind(this);
        this.onChangeControl = this.onChangeControl.bind(this);
    }

    submitHandler(e) {
        e.preventDefault();
        this.validationForm();
        let isFormInvalid = Object.keys(this.state.form).some(prop => this.state.form[prop].isInvalid);

        if (isFormInvalid) {
            this.setState({isShowResult: false});            
        } else {
            this.setState({isShowResult: true});
        }
    }

    validationForm() {
        const newForm = Object.assign({}, this.state.form);
        Object.keys(newForm).forEach(prop => {
            newForm[prop].isInvalid = this.isControlInvalid(newForm[prop].value)
        });
        this.setState({ form: newForm });
    }

    isControlInvalid(value) {
        return value === '' || /^\d+$/.test(value);
    }

    onChangeControl(name, value) {
        const newForm = Object.assign({}, this.state.form);
        newForm[name].value = value;
        this.setState({ form: newForm });

    }

    render() {
        return (
            <div className={styles.container}>
                <form onSubmit={this.submitHandler}>
                    <ControlComponent onChangeControl={this.onChangeControl} value={this.state.form.login.value} isInvalid={this.state.form.login.isInvalid} name="login" />
                    <ControlComponent onChangeControl={this.onChangeControl} value={this.state.form.firstName.value} isInvalid={this.state.form.firstName.isInvalid} name="firstName" />
                    <ControlComponent onChangeControl={this.onChangeControl} value={this.state.form.lastName.value} isInvalid={this.state.form.lastName.isInvalid} name="lastName" />
                    <div className={styles.btnSubmit}>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                {this.state.isShowResult && <p>Данные отправлены</p>}
            </div>

        );
    }

}

export default FormComponent;