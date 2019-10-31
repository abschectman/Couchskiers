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
      <span className="title">Couchskiers</span>
      <div className="explore">
        <span>Explore</span>
        <img src="" alt="" />
        <div className="explore-search">
          <input onChange={this.handleLocation} type="text" value={this.state.location} />
          <ul className="dis-list">{displayString}</ul>
        </div>
      </div>
        <ul class="container">
          
          <li><a href="https://www.linkedin.com/in/asher-schectman-b24a2b195?trk=people-guest_profile-result-card_result-card_full-click"
            target="_blank" class="fab fa-linkedin fa-2x"></a> <a
              href="https://www.linkedin.com/in/asher-schectman-b24a2b195?trk=people-guest_profile-result-card_result-card_full-click"
              target="_blank">LinkedIn</a></li>

          <li><a href="https://angel.co/asher-schectman" target="_blank" class="fab fa-angellist fa-2x"></a>
            <a href="https://angel.co/asher-schectman" target="_blank">AngelList </a></li>

          <li><a href="https://github.com/abschectman" target="_blank" class="fab fa-github-square fa-2x"></a>
            <a href="https://github.com/abschectman" target="_blank">Github</a></li>

          <li><a href="https://abschectman.github.io/" target="_blank" class="fas fa-laptop-code fa-2x"></a>
            <a href="https://abschectman.github.io/" target="_blank">Website</a></li>

          <li><a href="" target="_blank" class="fas fa-user-circle fa-2x" onClick={this.handleShow}></a>
            <a href="" target="_blank" onClick={this.handleShow}>Profile</a></li>

          <li><a href="" target="_blank" class="fas fa-cog fa-2x" onClick={this.showList}></a>
            <a href="" target="_blank" onClick={this.showList}>Settings</a></li>
        </ul>
        <ul className="head-settings" onClick={this.showList}> <img id="setting-img" alt="" /> 
          <ul className={this.state.hiddenSetting}>
            <li className="settings-li-shown" onClick={this.handleEdit}>Account and Settings</li>
            <li className="settings-li-shown" onClick={this.handleLogout}>Log Out</li>
          </ul>
      </ul>
    </section>)
  }
}


export default withRouter(Nav);