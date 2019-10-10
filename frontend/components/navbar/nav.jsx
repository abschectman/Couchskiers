import React from "react"
import { withRouter } from 'react-router-dom'; 

class Nav extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      location: "",
      hiddenSetting: "settings-li-hidden"
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.selectLocation = this.selectLocation.bind(this);
    this.showList = this.showList.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleShow = this.handleShow.bind(this)
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
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

  showList(e) {
    e.preventDefault();
   if(this.state.hiddenSetting === "settings-li-hidden"){
     this.setState({hiddenSetting: "lis-count"})
   } else{
     this.setState({hiddenSetting: "settings-li-hidden"})
   }

  }

  handleLocation(e) {
    e.preventDefault();
    this.props.clearLocations();
    this.setState({ location: e.currentTarget.value })
    this.props.findLocations(e.currentTarget.value)
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.history.push(`/banana/${this.props.currentUser}`)
  }

  handleShow(e){
    e.preventDefault();
    this.props.history.push(`/users/${this.props.currentUser}`)
  }

  render(){
    let displayString;
    if (this.props.locations){
      displayString = this.props.locations.map(lo => <li className="dropdown" id={lo.id} key={lo.id} onClick={this.selectLocation}>{(lo.city + ", " + lo.country)}</li>)}
    return (
    <section className="show-header">
      <img id="show-logo" alt="" />
      <div className="explore">
        <span>Explore</span>
        <img src="" alt="" />
        <div className="explore-search">
          <input onChange={this.handleLocation} type="text" value={this.state.location} />
          <ul className="dis-list">{displayString}</ul>
        </div>
      </div>
      <span className="pro" onClick={this.handleShow}>Profile</span>
        <ul className="head-settings" onClick={this.showList}> <img id="setting-img" alt="" /> 
        <span>Settings</span> 
          <ul className={this.state.hiddenSetting}>
            <li className="settings-li-shown" onClick={this.handleEdit}>Account and Settings</li>
            <li className="settings-li-shown" onClick={this.handleLogout}>Log Out</li>
          </ul>
      </ul>
    </section>)
  }
}


export default withRouter(Nav);