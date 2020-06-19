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

  /*Function to map 'email' and add the information to the table



  */
  render () {
    return (
      <div>
        {this.state.didYaGetThatThingISentYa || this.state.email ? (
            <div>No... </div>
        ) : (
            <div>
            <div>email is here</div>
            </div>
            /*Create the table where the email will be displayed so that I can start to manipulate it. Table would have "sender", "recipient", "subject", "message", "date", and "id". All fields would initially be hidden except for "subject" and "sender"*/
        )}
      </div>
    );
  }
}
//export default FetchEmail;