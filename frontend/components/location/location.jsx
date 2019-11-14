import React from "react"
import NavContainer from "../navbar/nav_container"
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class Location extends React.Component{
  constructor(props){
    super(props)
    this.getUsers = this.getUsers.bind(this)
    this.handleHost = this.handleHost.bind(this)
  }

  componentDidUpdate(){
    if(!this.props.location){
    this.props.findLocation(this.props.locationId)}
  }
  componentDidMount() {
      this.props.findLocation(this.props.locationId)
  }

  handleHost(e){
    e.preventDefault();
    this.props.history.push(`/users/${e.currentTarget.id}`)
  }

  getUsers(){
    if(this.props.location.hosts){
    return this.props.location.hosts.map(host => {
      let e = this.props.users[host.id].email.indexOf("@")
      let img;
      this.props.users[host.id].photo ? img = this.props.users[host.id].photo : img = "<img />" 
      return (<li className="host-list" id={this.props.users[host.id].id} key={this.props.users[host.id].id} onClick={this.handleHost}> {ReactHtmlParser(img)} <span>{this.props.users[host.id].email.slice(0, e)}... </span></li>)
  })} else {
    return [];
  }
  }

    getRequest(){
    if(this.props.location.requests){
    return this.props.location.requests.map(req => {
      if (this.props.requesters[req.id]){
      let e = this.props.requesters[req.id].email.indexOf("@")
        let img;
        this.props.requesters[req.id].photo ? img = this.props.requesters[req.id].photo : img = "<img /> "
        let tag = (
          <li
            className="host-list"
            id={this.props.requesters[req.id].id}
            key={this.props.requesters[req.id].id}
            onClick={this.handleHost}
          >
            {" "}
            {ReactHtmlParser(img)}
             <span> {this.props.requesters[req.id].email.slice(0, e)}... </span>
          </li>
        );
        // tag.innerHtml = img;
        return tag
  }})} else {
    return [];
  }
  }


render(){
  if(this.props.location){
    let hosts = this.getUsers();
    let travelers = this.getRequest();
    return (
      <main id="location-main">
        <NavContainer />
        <div id="location-header">
          <span id="country">{this.props.location.country},</span>
          <span id="city">{this.props.location.city}</span>
        </div>
        <section id="location-middle">
        <div id="location-hosts">
            <span id="hosts-header">Local Hosts</span>
            <span id="hosts-count">Stay with one of {hosts.length.toString()} hosts in {this.props.location.city}</span>
            <div id="hosts-body">
              <ul id="hosts-outer-list">
            {hosts}
              </ul>
            </div>
        </div>
          <div id="location-hosts">
            <span id="hosts-header">Upcoming Visitors</span>
            <span id="hosts-count">Meet or Host one of {travelers.length.toString()} travelers in {this.props.location.city}</span>
            <div id="hosts-body">
              <ul id="hosts-outer-list">
                {travelers}
              </ul>
            </div>
          </div>
        
        <div id="location-visitors">

        </div>
        </section>

        <section id="location-events">

        </section>
      
      </main>
    )
  } else{
    return ( <h1>Loading...</h1> )
  }
}


}

export default Location;