// import axios from 'axios';
import React, { Component } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Login from "../src/Image/Login.jpeg";
export default class New extends Component {
  render() {
    return (
        <div>
        <CssBaseline />
        <img src={Login}  className="img" alt="img"/> 
        <Container maxWidth="sm">
        <Box  className="box" sx={{ bgcolor: '#cfe8fc', height: '95vh' }}>
        <div className='field'>
        <h1>Shenba store</h1>
        <h5>Welcome to Shenba store</h5>
        <div className='text'>
        <TextField
        helperText="Please enter your name"
        id="demo-helper-text-misaligned"
        label="First Name" /><br/>
        <TextField
        helperText="Please enter your name"
        id="demo-helper-text-misaligned"
        label="Last  Name" /><br/>
        <TextField
        helperText="Please enter your Mobil number"
        id="demo-helper-text-misaligned"
        label="Number" /><br/>
        <TextField
        helperText="Please enter your New password"
        id="demo-helper-text-misaligned"
        label="Password" type="password" /><br/>
        <TextField
        helperText="Please enter your Password"
        id="demo-helper-text-misaligned"
        label="Conform password"  type="password"/><br/>
        <Button variant="contained">Submit</Button></div>
        </div>
</Box>
      </Container>
      </div>
    )
  }
}

// import React, { Component } from 'react'

// export default class New extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
        
    
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

