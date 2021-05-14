import React from "react"
import { reactDom as reactDom, Redirect } from 'react-router-dom';
import Login from './element/login';
import Register from './element/register';
import { BiLogOut } from 'react-icons/bi';
import JobItem from './element/database';
import { Firebase } from './App';

function Back(props) {
  return <div><br /><reactDom  to={"/logout"} style={{position:"fixed", bottom:"0px",left:"-180px"}}></reactDom></div>;
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
    constructor(){
      super();
      this.state = {
        itemArray: new Array()
      };

    };
    
    async componentDidMount(){
      Firebase.database().ref('/job').once('value').then((data) => { //logs user in and fetches data from DB
  
        let dataArray = new Array();
        // {key: e.key, data:e.val()}
        data.forEach(e=>{let database = e.val(); dataArray.push(<JobItem id={e.key} location={database.location} date={database.date} pay={database.pay} />)});
        this.setState({itemArray: dataArray});
    });
    };

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
          <h1>Jobs: </h1>

        {this.state.itemArray}


          </center>
          <div><br /><reactDom  to={"/logout"} style={{position:"fixed", bottom:"0px",left:"-180px"}}><BiLogOut className="logout"/></reactDom></div>
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
          <reactDom to={"/login"}><button class="button1" type="submit">Login</button></reactDom> <br/>
          <reactDom to={"/register"}><button class="button1" type="submit">Register</button></reactDom>
          </center>
          </div>
        <Back />

        </div>

      </div>
        
      )//home menu
    }
  }
export {Home, Dashboard, Login, Register, Back, Template};