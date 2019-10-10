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
    reservation_message: ""

  }
  this.handleEdit = this.handleEdit.bind(this)
  this.handleLink = this.handleLink.bind(this)
  this.update = this.update.bind(this)
  this.handleReq = this.handleReq.bind(this)
}

componentDidMount(){
  this.props.getUser(parseInt(this.props.userId))
  // this.props.findLocation(this.props.users[this.props.userId].location_id)
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
      reserver_id: this.props.currentUser,
      host_id: parseInt(this.props.userId)
    }
    debugger
    this.props.createRes(req)
  }

    update(field) {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
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
    edit = [];
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

        <div className="res-req">
          <h1>REQUEST TO STAY</h1>
          <form action="" onSubmit={this.handleReq}>
            <div className="dates">
                  <label htmlFor="">Arrival Date </label>
                    <input type="date" value={this.state.start_date} onChange={this.update('start_date')} />
                
                  <label htmlFor="">Departure Date </label>
                    <input type="date" value={this.state.end_date} onChange={this.update('end_date')} />
                  
            </div>
              <label htmlFor="">Message</label>
                <input type="textarea" value={this.state.reservation_message} onChange={this.update('reservation_message')} />

                <input type="submit" value="Send"/>
          </form>
          </div>

      <div className="middle-middle">
        <span>ABOUT ME</span>
        <div className="description-section">
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
