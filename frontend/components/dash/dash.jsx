import React from "react"
import NavContainer from "../navbar/nav_container"
class Dash extends React.Component{
constructor(props){
  super(props)
  this.state = {
    location: "",
    myLocation: this.props.location,
    targetUser: {},
    start_date: "",
    end_date: "",
    booked: false,
    reservation_message: "",
    reqStatus: "res-req-none",
    descriptionClass: "description-section",
    referenceClass: "reference-section-hidden "

  }
  this.handleEdit = this.handleEdit.bind(this)
  this.handleLink = this.handleLink.bind(this)
  this.update = this.update.bind(this)
  this.handleReq = this.handleReq.bind(this);
  this.toggleForm =this.toggleForm.bind(this);
  this.toggleShow = this.toggleShow.bind(this);
  this.handleReferences = this.handleReferences.bind(this);
}

componentDidMount(){
  this.props.getUser(parseInt(this.props.userId))
  if (parseInt(this.props.userId) === this.props.currentUser){
    this.setState({ reqStatus: "res-req-none"})
  }
  // this.props.findLocation(this.props.users[this.props.userId].location_id)
}

  toggleShow(e){
    e.preventDefault();
    e.currentTarget.innerText === "References" ? 
    this.setState({
    descriptionClass: "description-section-hidden",
    referenceClass: "reference-section" 
   }) 
    : this.setState({ 
      descriptionClass: "description-section",
      referenceClass: "reference-section-hidden"
     });
   
  }

  handleReferences(){
    debugger
    return this.props.users[this.props.userId].references.map(ref => <li> {this.props.references[ref].body} </li>)
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.history.push(`/banana/${this.props.currentUser}`)
  }

  handleLink(e){
    e.preventDefault();
    this.props.history.push(`/locations/${parseInt(this.props.test)}`)
  }

  handleReq(e){
    e.preventDefault();
    let req = {
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      reservation_message: this.state.reservation_message,
      booked: false,
      reserver_id: this.props.currentUser,
      host_id: parseInt(this.props.userId)
    }
    this.props.createRes(req).then(re => this.setState({reqStatus: "res-req-none"}))
    
  }

    update(field) {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }

    toggleForm(e){
      e.preventDefault();
      if(this.state.reqStatus === "res-req-none"){
      this.setState({reqStatus: "res-req"})} else {
        this.setState({ reqStatus: "res-req-none" })
      }
    }



render (){
  let edit = [];
  let view;
  let loc;
  if(this.props.locations[this.props.test]){
    loc = this.props.locations[this.props.test].city + ", " + this.props.locations[this.props.test].country
  }
 
  if(parseInt(this.props.userId) === this.props.currentUser){
    edit = <button className="edit-button" onClick={this.handleEdit}>Edit My Profile</button>
  } else {
    edit = <button className="edit-button" onClick={this.toggleForm}>Send Request</button>;
  }
  if(this.props.users[this.props.userId]) {
    view = (
      
    <main className="show">
        <NavContainer />
    <section className="show-body">
    <section className="show-left">
          <img id="user-img"></img>
      <span>{this.props.users[this.props.userId].email}</span>
            <a id="loc-link" onClick={this.handleLink}href="">{loc}</a>
        
        <span id="profile">Profile not Verified</span>
        <li id="list-li">Payment not verified</li>
          <li id="list-li">Phone not verified</li>
          <li id="list-li">Government ID not verfied</li>
          <li id="list-li">Address not verified</li>
    </section>

    <section className="show-middle">
      <div className="middle-top">
        <div className="top-left">
            <span className="show-host">{this.props.users[this.props.userId].hosting_status}</span>
        <span className="login-time">Last login today</span>
        </div>
        {edit}
      </div>

        <div className={this.state.reqStatus}>
          <h1>REQUEST TO STAY</h1>
          <form action="" onSubmit={this.handleReq}>
            <div className="dates">
                <div id="date-cont">
                  <label htmlFor="">Arrival Date </label>
                  <input id="dateId" type="date" value={this.state.start_date} onChange={this.update('start_date')} />
                  </div>
                  <div id="date-cont">
                  <label htmlFor="">Departure Date </label>
                    <input id="dateId" type="date" value={this.state.end_date} onChange={this.update('end_date')} />
                  </div>
            </div>

            <div id="date-cont">
              <label id="mess-head" htmlFor="">Message</label>
                <input id="mess-text" type="textarea" value={this.state.reservation_message} onChange={this.update('reservation_message')} />
            </div>
                <input id="send-button" type="submit" value="Send"/>
          </form>
          </div>

      <div className="middle-middle">
        <div className="middle-tool">
          <span onClick={this.toggleShow}>About</span>
          <span onClick={this.toggleShow}>References</span>
        </div>
        <div className={this.state.referenceClass}>
            <ul>{this.handleReferences()}</ul>
        </div>
        <div className={this.state.descriptionClass}>
              <span>{this.props.users[this.props.userId].description}</span>
        </div>
      </div>
    </section>
      </section>
    </main>
  )} else{
    view = <h1>Loading ...</h1>
  }
return view
}}


export default Dash;
