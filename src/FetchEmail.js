import React from 'react';
//import App from "./App"
//import { unmountComponentAtNode } from 'react-dom';

export default class FetchEmail extends React.Component {
  state = {
    loading: true
  };

async componentDidMount () {
    const url = "http://localhost:3001";
    const response = await fetch(url);
    const data= await response.json();
    console.log(data);

  }

  render () {
    return (
      <div>
        {this.state.loading ? <div> Loading... </div> : <div> person... </div>}
      </div>
    );
  }
}
//export default FetchEmail;