import React from "react"
import { Link, Redirect } from 'react-router-dom';
import Login from './element/login';
import Register from './element/register';
import { BiLogOut } from 'react-icons/bi';
function Back(props) {
  return <div><br /><Link  to={"/logout"} style={{position:"fixed", bottom:"0px",left:"-180px"}}></Link></div>;
}

class Template extends React.Component { //template to be used with most pages
  render() {
    return (
      <div>
        <h1 style={{textAlign: "center"}} styles="font-family: 'Lucida Console', Courier, monospace;">JJWD Portal</h1>
      </div>

    )
  }
}

class Dashboard extends React.Component { //dashboard
    render() {
      if (!localStorage.getItem('uid')) return(
        <Redirect to="/login" />
      )
      return (
        <div>
        <Template />

        <div>
          <div class="child">
            <center>
          <h3>Welcome back {localStorage.getItem('username')}!</h3>
          <h6>Test</h6>

          </center>
          <div><br /><Link  to={"/logout"} style={{position:"fixed", bottom:"0px",left:"-180px"}}><BiLogOut className="logout"/></Link></div>
          </div>
        <Back />

          </div>
        </div>
      ) //dashboard menu
    }
  }


  class Home extends React.Component {
    render() {
      return (
        <div>
          <Template />
        <div class="child">
          <div class="leftPageContentBox">
            <center>
          <h3>Please login or register:</h3>
            </center>
          <center>
          <Link to={"/login"}><button class="button1" type="submit">Login</button></Link> <br/>
          <Link to={"/register"}><button class="button1" type="submit">Register</button></Link>
          </center>
          </div>
        <Back />

        </div>

      </div>
        
      )//home menu
    }
  }
export {Home, Dashboard, Login, Register, Back, Template};