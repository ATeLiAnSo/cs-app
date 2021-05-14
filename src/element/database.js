import React from "react"
import { Link, Redirect } from 'react-router-dom';
import {Back, Template } from '../rootComponents';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class JobItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    };


    render(){
        return (
            <div class="jobItem">
                <h6>ID: {this.props.id}</h6>
                <h6>Location: {this.props.location}</h6>
                <h6>Date: {this.props.date}</h6>
                <h6>Payment: {this.props.pay}</h6>
                <Link to={"/jobs/" + this.props.id} >More info</Link>
            </div>
        );
    };
};

export default JobItem;