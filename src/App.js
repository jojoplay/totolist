import React, { Component } from 'react';
import List from './List'

//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: []

      // {
      //   text:[],
      //   complete:false
      // } 
    }

  }
  save = (e) => {
    e.preventDefault()
    const t = this.input.value
    const temp = this.state.text

    temp.push( {text:t,complete:false})

    this.setState({
      text:temp
    })

    
  }
  ondelete = (key) =>{
    const temp = this.state.text;
    temp.splice(key,1)
    this.setState({
      text:temp
    })
  }
 togglecomplete = (key) => {
    // let a = this.state.text[key].complete;
    // const t = this.state.text[key].text;
    // let temp = []
    // temp = [{
    //   text:t,
    //   complete:a,
    // }]
 
    // a = !a;

    const temp = this.state.text;
    temp[key].complete = !temp[key].complete;
    this.setState({
      text:temp
    })
  }
  render() {
    return (
      <div className="App">
        <input type="text" ref= {(c) => this.input = c}/><button onClick={this.save}>ok</button>
        <List textfromapp={this.state.text} togglecomplete={this.togglecomplete} ondelete={this.ondelete}/>
      </div>
    );
  }
}

export default App;
