import React from "react";
import './Input.css';


export default class Input extends React.Component {
    render() {
        const { id, name, type, placeholder} = this.props;
        return (
        <input className="CommonInput" 
                name={name} 
                id={id}
                type={type} 
                placeholder={placeholder}/>
        )
    }
}