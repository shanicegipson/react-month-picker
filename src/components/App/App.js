import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import MonthList from '../MonthList/MonthList';


class App extends Component {
    
  state = {
    monthList: []
  }

  componentDidMount() {
    this.getMonth();
  }

  getMonth() {
    axios({
      method: 'GET',
      url: '/calendar'
    })
    .then((response) => {
      this.setState({
        monthList: response.data
      });
    })
    .catch((err) => {
      console.log(`Error in GET: ${err}`)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Select a Month</h1>
          <h3>SELECTED MONTH GOES HERE</h3>
          <br/>
        </header>
        <br/>
        <MonthList  MonthList={this.state.monthList}/>
      </div>
    );
  }
}

export default App;
