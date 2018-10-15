import React, { Component } from 'react';
import './App.css';
import Book from './Book.js';

class App extends Component {
      state = {
      data: [],
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
      })
      this.refs.myForm.reset();
      this.refs.name.focus();

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
          <button
          className = "button-action"
          onClick = {this.handleChange}
          >
          Submit
          </button>

        </form>
        <Book
        data = {this.state.data}
        />


      </div>
    );
  }
}

export default App;
