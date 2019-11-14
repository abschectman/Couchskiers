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
    if(e.currentTarget.value.length > 0) {this.props.findLocations(e.currentTarget.value)}
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
      <span className="title" onClick={this.handleShow}>Couchskiers</span>
      <div className="explore">
        <span>Explore</span>
        <i className="fas fa-search"></i>
        <div className="explore-search">
          <input onChange={this.handleLocation} type="text" placeholder="Where are you going?" value={this.state.location} />
          <ul className="dis-list">{displayString}</ul>
        </div>
      </div>
        <ul className="container">
          
          <li><a href="https://www.linkedin.com/in/asher-schectman-b24a2b195?trk=people-guest_profile-result-card_result-card_full-click"
            target="_blank"><i className="fab fa-linkedin fa-2x"></i><span>Linked In</span></a> </li>

          <li><a href="https://angel.co/asher-schectman" target="_blank"><i className="fab fa-angellist fa-2x"></i><span>AngelList</span></a>
            </li>

          <li><a href="https://github.com/abschectman" target="_blank"><i className="fab fa-github-square fa-2x"></i><span>Github</span></a>
          </li>

          <li><a href="https://abschectman.github.io/" target="_blank"><i className="fas fa-laptop-code fa-2x"></i><span>Website</span></a>
            </li>

          <li><a href="" target="_blank" onClick={this.handleShow}><i className="fas fa-user-circle fa-2x"></i><span>Profile</span></a>
           </li>

          <li><a href="" target="_blank" onClick={this.showList}><i className="fas fa-cog fa-2x"></i><span>Settings</span></a>
            </li>
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