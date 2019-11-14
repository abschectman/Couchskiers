import React from "react"
import NavContainer from "../navbar/nav_container"
import ReservationComponent from "../chat/reservation_container"
import Reference from "../reference/reference"
import Travel from "../travel/travel"

class Dash extends React.Component{
constructor(props){
  super(props)
  this.state = {
    location: "",
    myLocation: this.props.location,
    targetUser: {},
    start_date: "",
    user: "",
    end_date: "",
    booked: false,
    reservation_message: "",
    reqStatus: "res-req-none",
    descriptionClass: "description-section",
    tripsClass: "trips-section-hidden",
    referenceClass: "reference-section-hidden"
  }
  
  this.refCount = 0;
  this.img = "res-req-none"
  this.unFetched = true;
  this.handleEdit = this.handleEdit.bind(this)
  this.handleLink = this.handleLink.bind(this)
  this.update = this.update.bind(this)
  this.handleReq = this.handleReq.bind(this);
  this.toggleForm =this.toggleForm.bind(this);
  this.toggleShow = this.toggleShow.bind(this);
  this.createRef = this.createRef.bind(this)
  this.handleReferences = this.handleReferences.bind(this);
  this.handleReservations= this.handleReservations.bind(this);
}

componentDidMount(){
  this.props.getUser(parseInt(this.props.userId)).then(use =>{
    this.setState({user: use.user.id})
  })
  if (parseInt(this.props.userId) === this.props.currentUser){
    this.setState({ reqStatus: "res-req-none"})
  }
    let h = document.getElementById("user-img")
    this.props.profile === undefined
      ? this.img = "user-img-def"
      : h.innerHTML = this.props.profile
  
}

componentDidUpdate(){
  this.state.user !== parseInt(this.props.userId) ? 
  this.props.getUser(parseInt(this.props.userId)).then(use => {
    this.setState({ user: use.user.id })
  }) : null
  if (document.getElementById("user-img")) {
    let h = document.getElementById("user-img")
    this.props.profile === undefined
      ? this.img = "user-img-def"
      : h.innerHTML = this.props.profile
  } 
}

  toggleShow(e){
    e.preventDefault();
    if(e.currentTarget.innerText === "References"){
      this.setState({
        descriptionClass: "description-section-hidden",
        tripsClass: "trips-section-hidden",
        referenceClass: "reference-section"
      })
    } else if (e.currentTarget.innerText === "About"){
      this.setState({
        descriptionClass: "description-section",
        tripsClass: "trips-section-hidden",
        referenceClass: "reference-section-hidden"
      })
    } else {
      this.setState({
        descriptionClass: "description-section-hidden",
        tripsClass: "trips-section",
        referenceClass: "reference-section-hidden"
      })
    }
  }

  handleReferences(){
    let list = []
    if (this.props.users[this.props.userId].references){ 
      list = this.props.users[this.props.userId].references
      .map(ref => {
        let customProps = {
          rating: this.props.references[ref].positive,
          sendersEmail: this.props.users[this.props.userId].email,
          receiversEmail: this.props.users[this.props.references[ref].referer_id].email,
          location: this.props.locations[this.props.users[this.props.references[ref].referer_id].location_id],
          body: this.props.references[ref].body
        }
        return <Reference key={ref.id} props={customProps} />
      })
    }
    return list
  }
  handleReservations(){
    if (this.props.users[this.props.userId].host_reservations && parseInt(this.state.user) === this.props.currentUser){
      let trips = this.props.users[this.props.userId].trip_reservations.concat(this.props.users[this.props.userId].host_reservations)
      if(trips.length === 0){ return <h2>No upcoming trips</h2>}
     return trips.map(resId => {
        return <ReservationComponent reservationId={resId} user={this.props.currentUser}/>
      })
    } else {
      return <h2>Log in to see your trips</h2>
    }
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

    createRef(e){
      e.preventDefault();
      this.props.history.push(`/refs/${this.props.userId}`)
    }



render (){
  let edit = [];
  let view;
  let loc;
  let refer = [];
  if (this.props.users[this.props.userId] && this.props.users[this.props.userId].references) { this.refCount = this.refCount = this.props.users[this.props.userId].references.length}
  if(this.props.locations[this.props.test]){
    loc = this.props.locations[this.props.test].city + ", " + this.props.locations[this.props.test].country
  }
 
  if(parseInt(this.props.userId) === this.props.currentUser){
    edit = <button className="edit-button" onClick={this.handleEdit}>Edit My Profile</button>
  } else {
    edit = <button className="edit-button" onClick={this.toggleForm}>Send Request</button>;
    refer = <button className="edit-button" onClick={this.createRef}>Write Reference</button>
  }
  if(this.props.users[this.props.userId]) {
    
    view = (
      
    <main className="show">
        <NavContainer />

    <section className="show-body">
      {/* <ReservationComponent reservationId={2} /> */}
    <section className="show-left">
      <div id="user-img"><img id={this.img} alt=""/></div>
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

        <div id="space">

        </div>

        <div id="buttons">
        {edit}
        {refer}
        </div>

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

          <div className="abt-div">
            <span onClick={this.toggleShow}>About</span>
          </div>

          <div className="res-div">
            <span onClick={this.toggleShow}>Upcoming Trips</span>
          </div>

          <div className="ref-div">
            <span onClick={this.toggleShow}>References</span>
            <p className="badge">{this.refCount}</p>
          </div>

        </div>

        <div className={this.state.referenceClass}>
            <div className="refrences">{this.handleReferences()}</div>
        </div>

        <div className={this.state.tripsClass}>
            <div>{this.handleReservations()}</div>
        </div>

        <div className={this.state.descriptionClass}>
              <span>{this.props.users[this.props.userId].description}</span>
        </div>
      </div>
      <Travel {... this.props}/>
    </section>
      </section>
    </main>
  )} else{
    view = <h1>Loading ...</h1>
  }
return view
}}


export default Dash;
