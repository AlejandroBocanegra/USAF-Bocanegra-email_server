import React from 'react';
//import logo from './logo.svg';
import FetchEmail from "./FetchEmail"
import './App.css';



function App() {
  return (
    <div>
<FetchEmail />
    </div>
  );
}

let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}
App.use(allowCrossDomain);


export default App;
  /*
React Checkpoint
This project will evaluate your ability to create a web application with React (using create-react-app).

Using Create-React-App and a server that we have provided to you with fake email data, please implement the following functionality to mock the "GMail" service.

Mandatory Content

1. View all of my email messages (subject line + sender) //start here
a. I need to pull all the email from the server and place it within a JSON so that I can access it later
b. I need to extract the subject line and header information from the stored data in the JSON
c. I need to display the info in a list or table

2. View one of my email messages with all of its details //third
a. I need to attach an onClick function to the list or table
b. handleClick need to display the email

3. Send an email //second
a. need to create a button for a new email
b. button need an onClick function built into it where the click triggers the composer
c. composer will need to display 'From', 'To', 'Subject', 'Body'
d. composer will need a button to send
e. the button will have a handleClick method to display alert "Your Message Has Been Sent"

4. Search for a specific email by subject //fourth
a. Need to create a search bar at the top (thats all I know about how to do that)

*/