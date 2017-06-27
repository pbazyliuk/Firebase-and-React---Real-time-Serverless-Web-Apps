import React, { Component } from 'react';
import { database } from './firebase';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      newData: ''
    };
      
    //this.dataRef = null;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
      
    //this.dataRef = database.ref('/WOWOWO/lololo/hehehe');

    database.ref('/').on('value', (snapshot) => {
      // console.log('THE DATA CHANGED', snapshot.val());
      this.setState({
        data: snapshot.val()
      })
    });
  }


  handleSubmit(event) {
    event.preventDefault();

    database.ref('/amazing new data')
      // .child('amazing new data')
      .push(this.state.newData);

     this.setState({
      newData: ''
    });
  }

  handleChange(event) {
    const newData = event.target.value;
    
    this.setState({
      newData: newData
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App--header">
          <h2>Welcome to React and Firebase</h2>
        </div>
        <pre className="App--data">
          One day, some data from Firebase will go here.
          { JSON.stringify(this.state.data, null, 2) }
        </pre>

        <form action="" className="App--form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.newData} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
