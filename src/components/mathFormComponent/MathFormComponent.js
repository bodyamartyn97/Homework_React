import React from "react";
import { ControlMathComponent } from "./controlMathComponent/ControlMathComponent";

export class MathFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                firstValue: '',
                secondValue: ''
            },
        }

        this.onChangeControl = this.onChangeControl.bind(this);
    }

    onChangeControl(obj) {
        this.setState({ form: { ...this.state.form, ...obj } });
    }


    render() {
        console.log();
        return (
            <div>
                <form>
                    <ControlMathComponent onChangeControl={this.onChangeControl} name="firstValue" />
                    <ControlMathComponent onChangeControl={this.onChangeControl} name="secondValue" />
                </form>
                <p>Конвертация на 0,5 = {this.state.form.firstValue * 0.5}</p>
                <p>Конвертация на 0,05 = {this.state.form.secondValue * 0.05}</p>
            </div>
        );
    }
}