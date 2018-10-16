import React, { Component } from 'react';
import './App.css';
import Book from './Book.js';

class App extends Component {
      state = {
      data: [],
      batch: '',
    }

    handleChange = event => {
      event.preventDefault();
      let userObj = {
          name: '',
          address: '',
        };
      let dataArr = this.state.data;  

      userObj.name = this.refs.name.value;
      userObj.address = this.refs.address.value;
      dataArr.push(userObj);
      this.setState({
        data: dataArr,
        batch: this.refs.batch.value
      })
      this.refs.myForm.reset();
      this.refs.name.focus();
      console.log(this.state.batch)

    }
    handleDelete = e => {
      console.log("del", e)
      // this.setState({
      //   data: 
      // })
    }
    handleEdit = e => {

    }
  render() {
    
    return (
      <div className="main-div">
        <p
        className = "heading-text" 
        >
        Address Book
        </p>
        <form
        ref = "myForm"
        >
          <input
          className = "user-input"
          placeholder = "Enter Name"
          ref = "name"
          />
          <input
          className = "user-input"
          placeholder = "Enter Address"
          ref = "address"
          />
          <input
          className = "user-input"
          placeholder = "Enter Batch"
          ref = "batch"
          />
          <button
          className = "button-action"
          onClick = {this.handleChange}
          >
          Submit
          </button>

        </form>
        <Book
        data = {this.state.data}
        batch = {this.state.batch}
        deleteRecord = {this.handleDelete}
        editRecord = {this.handleEdit}
        />


      </div>
    );
  }
}

export default App;
