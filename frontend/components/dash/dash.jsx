import React from "react"
class Dash extends React.Component{
constructor(props){
  super(props)
  this.state = {
    location: "",
    myLocation: this.props.location,
    targetUser: {},
  }
  this.logout = this.props.logout.bind(this);
  this.handleLogout = this.handleLogout.bind(this);
  this.handleLocation = this.handleLocation.bind(this);
  this.selectLocation = this.selectLocation.bind(this);
  this.showList = this.showList.bind(this);
  this.handleEdit = this.handleEdit.bind(this)
}

componentDidMount(){
  this.props.getUser(parseInt(this.props.userId))
  this.props.findLocation(this.props.users[this.props.userId].location_id)
  
}

handleLogout(e){
  e.preventDefault();
  this.logout();
  this.props.history.push("/signup")
}

  selectLocation(e) {
    e.preventDefault();
    this.setState({
      location: e.currentTarget.innerText
    })
    this.props.clearLocations();
    this.props.history.push(`/locations/${parseInt(e.currentTarget.id)}`)
  }

  showList(e){
    e.preventDefault();
    let lis = document.getElementsByClassName("settings-li-hidden");
    if(lis[0]){
    lis = Array.from(lis)
    lis.forEach(li => {
      li.className = "settings-li-shown"
    })} else {
      lis = document.getElementsByClassName("settings-li-shown");
      lis = Array.from(lis)
      lis.forEach(li => {
        li.className = "settings-li-hidden"
      })
    }

  }

  handleLocation(e) {
    e.preventDefault();
    this.props.clearLocations();
    this.setState({ location: e.currentTarget.value })
    this.props.findLocations(e.currentTarget.value)
  }

  handleEdit(e){
    e.preventDefault();
    this.props.history.push(`/banana/${this.props.currentUser}`)
  }


render (){
  let displayString = [];
  let edit = [];
  let view;
  if (this.props.locations instanceof Array) {
    displayString = this.props.locations.map(lo => <li className="dropdown" id={lo.id} key={lo.id} onClick={this.selectLocation}>{(lo.city + ", " + lo.country)}</li>)
  }
  if(parseInt(this.props.userId) === this.props.currentUser){
    edit = <button className="edit-button" onClick={this.handleEdit}>Edit My Profile</button>
  } else {
    edit = [];
  }
  if(this.props.users[this.props.userId]) {
    view = (
    <main className="show">
    <section className="show-header">
        <img id ="show-logo" alt=""/>
      <div className="explore">
          <span>Explore</span>
          <img src="" alt=""/>
          <div className="explore-search">
            <input onChange={this.handleLocation} type="text" value={this.state.location}/>
          <ul className="dis-list">{displayString}</ul>
          </div>
      </div>
      <span className="pro">Profile</span>
        <ul className="head-settings" onClick={this.showList}> <img id="setting-img" alt=""/> Settings
      <li className="settings-li-hidden" onClick={this.handleEdit}>Account and Settings</li>
        <li className="settings-li-hidden" onClick={this.handleLogout}>Log Out</li>
      </ul>
    </section>
<section className="show-body">
    <section className="show-left">
          <img id="user-img"></img>
      <span>{this.props.users[this.props.userId].email}</span>
          <a href="">{this.props.users[this.props.userId].location}</a>
        
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
