import React from "react"
import { Link, Redirect } from 'react-router-dom';
import {Back, Template} from '../rootComponents';
import {register} from '../loginHandler';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Email:"",
        Username:"",
        Password:"",
        passwordConf:"",
        firstName:"",
        lastName:"",
        dateOfBirth:"",
      };
      this.handleChange = this.handleChange.bind(this);
      this.register = async () => {
        await  register(this.state.Email, this.state.Password, this.state.Username, this.state.firstName, this.state.lastName, this.state.dateOfBirth) //registers the user
        .then(() => this.setState({}  ))
        .catch( (error) =>{
            NotificationManager.error(error.message, `Error ${error.code}`, 5000) //if error display
        })

      }
    }
    handleChange(event) {
        this.setState({[event.target.name]:event.target.value})
      }

    render() {
      
      if (localStorage.getItem('uid')) return(
        <Redirect to="/dashboard" />
      )
      return (
        <div>
          <Template />
        <div>
          <div class="child">
          <center>
          <h3>Register</h3>
          </center>
            <center>
            <form>
              <input type="email" name="Email" placeholder="Email" onChange={this.handleChange} value={this.state.email}/>
              <input type="text" name="Username" placeholder="Username" onChange={this.handleChange} value={this.state.Username}/>
              <input type="password" name="Password" placeholder="Password"  onChange={this.handleChange} value={this.state.Password}/>
              <input type="password" name="passwordConf" placeholder="Confirm Password"  onChange={this.handleChange} value={this.state.passwordConf}/>
              <input type="text" name="firstName" placeholder="Forename"  onChange={this.handleChange} value={this.state.firstName}/>
              <input type="text" name="lastName" placeholder="Surname"  onChange={this.handleChange} value={this.state.lastName}/>
              <input type="date" name="dateOfBirth" onChange={this.handleChange} value={this.state.dateOfBirth}/>
            </form>
            </center>
            <button onClick={async () => {this.register()}} class="button1">Register</button>
            <center>
            <Link to={"/login"}><h6>Already have an account? Login</h6></Link>
            </center>
          </div>
        <Back />
        <NotificationContainer/>

        </div>

      </div>
        
      ) //register menu
    }
  }
export default Register;