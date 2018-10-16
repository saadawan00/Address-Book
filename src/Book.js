import React, { Component } from 'react';
import './App.css';
class Book extends Component {

// handleClick = e => {
//         // console.log("props",this.props.data[0]);
//         // console.log(e.target.value)
//          console.log("i",e)
// }

 handleClick = (props) => {
// console.log("name",e)
this.props.deleteRecord("1")
console.log("i",this.key);
}

// handleDelete = (name,address,i) => {
//     // this.props.deleteRecord
//     console.log("name",i)
// }

render(){
    const {data,batch} = this.props
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
            {i+1}. {data.name}, {data.address}, {batch}
            <button
            className = "button-action"
            onClick = {this.handleClick}
            key = {i}
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