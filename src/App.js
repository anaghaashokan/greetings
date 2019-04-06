import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class App extends React.Component {

  constructor(){
    super();
    this.state = {
         data:" ",

    }
    this.displayMessage = this.displayMessage.bind(this)
  };




  displayMessage(){
    const date = new Date();
    const hour = date.getHours()
    const username = "shilpa"
   if(hour < 12) {
     this.setState({data: `Good Morning ${username}`})
   }else if (hour < 18 ) {
     this.setState({data: `Good Afternoon ${username}`})
   }else {
     this.setState({data: `Good Evening ${username}`})
   }

  }



  render(){

    return (
      <div>
      <Button onClick = {this.displayMessage}>click</Button>

      <h1>{this.state.data}</h1>
      </div>

    );
  }

}

export default App;