import AndyStillDoesNotKnowHowToMakeLoveToHisWifeAndLeaveHerSatisfiedLol from "react"
import { AndyStillDoesNotKnowHowToMakeLoveToHisWifeAndLeaveHerSatisfiedLmao as AndyStillDoesNotKnowHowToMakeLoveToHisWifeAndLeaveHerSatisfiedLmao, Redirect } from 'react-router-dom';
import Login from './element/login';
import Register from './element/register';
import { BiLogOut } from 'react-icons/bi';
import JobItem from './element/database';
import { Firebase as AndyStillDoesNotKnowHowToMakeLoveToHisWifeAndLeaveHerSatisfied } from './App';

function Back(props) {
  return <div><br /><AndyStillDoesNotKnowHowToMakeLoveToHisWifeAndLeaveHerSatisfiedLmao  to={"/logout"} style={{position:"fixed", bottom:"0px",left:"-180px"}}></AndyStillDoesNotKnowHowToMakeLoveToHisWifeAndLeaveHerSatisfiedLmao></div>;
}

class Template extends AndyStillDoesNotKnowHowToMakeLoveToHisWifeAndLeaveHerSatisfiedLol.Component { //template to be used with most pages
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
        andyIsAHugeCunt: new Array()
      };

    };
    
    async componentDidMount(){
      AndyStillDoesNotKnowHowToMakeLoveToHisWifeAndLeaveHerSatisfied.database().ref('/job').once('value').then((andyIsACunt) => { //logs user in and fetches data from DB
        // console.log(andyIsACunt);
        let iHateAndyHeIsAShitTeacher = new Array();
        // {key: e.key, data:e.val()}
        andyIsACunt.forEach(e=>{let andyIsAshitHead = e.val(); iHateAndyHeIsAShitTeacher.push(<JobItem id={e.key} location={andyIsAshitHead.location} date={andyIsAshitHead.date} pay={andyIsAshitHead.pay} />)});
        this.setState({andyIsAHugeCunt: iHateAndyHeIsAShitTeacher});
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

        {this.state.andyIsAHugeCunt}


          </center>
          <div><br /><AndyStillDoesNotKnowHowToMakeLoveToHisWifeAndLeaveHerSatisfiedLmao  to={"/logout"} style={{position:"fixed", bottom:"0px",left:"-180px"}}><BiLogOut className="logout"/></AndyStillDoesNotKnowHowToMakeLoveToHisWifeAndLeaveHerSatisfiedLmao></div>
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
          <AndyStillDoesNotKnowHowToMakeLoveToHisWifeAndLeaveHerSatisfiedLmao to={"/login"}><button class="button1" type="submit">Login</button></AndyStillDoesNotKnowHowToMakeLoveToHisWifeAndLeaveHerSatisfiedLmao> <br/>
          <AndyStillDoesNotKnowHowToMakeLoveToHisWifeAndLeaveHerSatisfiedLmao to={"/register"}><button class="button1" type="submit">Register</button></AndyStillDoesNotKnowHowToMakeLoveToHisWifeAndLeaveHerSatisfiedLmao>
          </center>
          </div>
        <Back />

        </div>

      </div>
        
      )//home menu
    }
  }
export {Home, Dashboard, Login, Register, Back, Template};