import React from 'react';

export default class FetchEmail extends React.Component {
  state = {
    didYaGetThatThingISentYa: true,
    email: null,
  };

async componentDidMount () {
    const url = "http://localhost:3001/emails.json";
    const response = await fetch(url);
    const data= await response.json();
    this.setState ({email: data, didYaGetThatThingISentYa: false});
    console.log(data);
  }

  render () {
    return (
      <div>
        {this.state.didYaGetThatThingISentYa || this.state.email ? (
            <div>No... </div>
        ) : (
            <div>
            <div>email is here</div>
            </div>
        )}
      </div>
    );
  }
}
//export default FetchEmail;