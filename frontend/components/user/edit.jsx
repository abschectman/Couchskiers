import React from "react"
class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.currentUser,
      email: this.props.users[this.props.currentUser].email,
      description: this.props.users[this.props.currentUser].description,
      hosting_status: this.props.users[this.props.currentUser].hosting_status
    }
    this.logout = this.props.logout.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.selectLocation = this.selectLocation.bind(this);
    this.showList = this.showList.bind(this);
    this.change = this.change.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.hostingOptions = this.hostingOptions.bind(this);
    this.cancel = this.cancel.bind(this)
  }

  handleLogout(e) {
    e.preventDefault();
    this.logout();
    this.props.history.push("/signup")
  }


    handleUpdate(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  selectLocation(e) {
    e.preventDefault();
    this.setState({
      location: e.currentTarget.innerText
    })
    this.props.clearLocations();
  }

  change(e){
    e.preventDefault();
    let h = document.getElementById("ddlViewBy");
    let hosting = h.options[h.selectedIndex].text;
    let user = this.state
    user["hosting_status"] = hosting;
    this.props.changeUser(user).then(user => (this.props.history.push(`/users/${this.props.currentUser}`)))
  }

  cancel(e){
    e.preventDefault();
    this.props.history.push(`/users/${this.props.currentUser}`)
  }

  showList(e) {
    e.preventDefault();
    let lis = document.getElementsByClassName("settings-li-hidden");
    if (lis[0]) {
      lis = Array.from(lis)
      lis.forEach(li => {
        li.className = "settings-li-shown"
      })
    } else {
      lis = document.getElementsByClassName("settings-li-shown");
      lis = Array.from(lis)
      lis.forEach(li => {
        li.className = "settings-li-hidden"
      })
    }

  }

  hostingOptions(){
    let options = ["Accepting Guest", "Maybe Accepting Guests", "Not Accepting Guest", "Wants to Meet Up"].map(str => {
      if(this.state.hosting_staus === str){
      return <option selected="selected" onSelect={this.handleUpdate("hosting_status")} value={str}>{str}</option>
    } else {
        return <option onSelect={this.handleUpdate("hosting_status")} value={str}>{str}</option>
    }
  })
  return options
  }

  handleLocation(e) {
    e.preventDefault();
    this.props.clearLocations();
    this.setState({ location: e.currentTarget.value })
    this.props.findLocations(e.currentTarget.value)
  }

  render() {
    let displayString = [];
    if (this.props.locations instanceof Array) {
      displayString = this.props.locations.map(lo => <li className="dropdown" id={lo.id} key={lo.id} onClick={this.selectLocation}>{(lo.city + ", " + lo.country)}</li>)
    }
    return (
      <main className="show">
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
          <span className="pro">Profile</span>
          <ul className="head-settings" onClick={this.showList}> <img id="setting-img" alt="" /> Settings
      <li className="settings-li-hidden" onClick={this.handleEdit}>Account and Settings</li>
            <li className="settings-li-hidden" onClick={this.handleLogout}>Log Out</li>
          </ul>
        </section>

        <section id="edit-outer">
      <section className="edit-left">
        <img className="left-img" src="" alt=""/>
        <div id="overview">
          <span>OVERVIEW</span>
          <li>Member since 2019</li>
        </div>
      </section>

      <section className="edit-main">
        <h1>{this.state.email}</h1>
        <form action="">
          <div id="row-one">
            <span id="abt">About</span>
              <button className="edit-button-page" onClick={this.change}>Save</button>
                <button className="edit-button-page" onClick={this.cancel}>Cancel</button>
          </div>
         <label htmlFor="">Hosting Availibility
         <select id="ddlViewBy">
               {this.hostingOptions()}
          </select>
         </label>

            <label id="descript" htmlFor="">About Me
         <input type="textarea" value={this.state.description} onChange={this.handleUpdate("description")} />
            </label>
          </form>
      </section>
        </section>
      </main>
    )
  }
}

export default Edit;
