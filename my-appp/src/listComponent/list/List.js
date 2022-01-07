import React from "react";
import Checkbox from '@mui/material/Checkbox';
import styles from "./List.module.scss"
// import { green } from "@mui/material/colors";


export class List extends React.Component {

    handleClick(id) {
        this.props.onDelete(id)
    }

    handleChange(id, checked) {
        this.props.onChange(id, checked)
       
    }


    render() {
        return (
            <ul>
                {this.props.list.map(element => {
                   
                    return (
                        <li key={element.id} className={element.checked ? styles.green : ''}>
                            <span>
                                <Checkbox onChange={(e) => this.handleChange(element.id, e.target.checked)} color="success" />
                                {element.value}
                            </span>
                            <button onClick={() => this.handleClick(element.id)}>X</button>
                            
                        </li>
                    )
                })}
            </ul>
        );
    }
}