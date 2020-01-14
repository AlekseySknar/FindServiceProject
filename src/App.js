import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import SimpleContainer from "./GetServiseForms";



export default  class App extends Component {
  render() {
    return (
        <div className="App">
          <h1>Hello, eba!</h1>
            <SimpleContainer/>
        </div>
    );
  }
}


