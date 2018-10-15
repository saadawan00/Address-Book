import React, { Component } from 'react';
import './App.css';
class Book extends Component {



render(){
    const {data} = this.props
    console.log("data11",data);
    return(
        <div
        className = ""
        >
        <p
        className = "heading-text"
        >
        {
            this.props.data.map((data,i) => 
            <li
            className = "list"
            key = {i}
            >
            {i+1}. {data.name}, {data.address}
            <button
            className = "button-action"
            >
            Delete
            </button>
            <button
            className = "button-action"
            >
            Edit
            </button>
            </li>

            )
        }
        </p>
        </div>
    )
}
}
export default Book;