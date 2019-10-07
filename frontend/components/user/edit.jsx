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
    let user = this.state
    this.props.changeUser(user).then(user => (this.props.history.push(`/users/${this.props.currentUser}`)))
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
      <section className="edit-left">

      </section>

      <section className="edit-main">
        <form action="">
          <button className="edit-button" onClick={this.change}>Save</button>
         <label htmlFor="">Hosting Availibility
         <select>
                <option onClick={this.handleUpdate("hosting_status")} value="Accepting Guests">Accepting Guests</option>
                <option onClick={this.handleUpdate("hosting_status")} value="Maybe Accepting Guests">Maybe Accepting Guests</option>
                <option onClick={this.handleUpdate("hosting_status")} value="Not Accepting Guests">Not Accepting Guests</option>
                <option onClick={this.handleUpdate("hosting_status")} value="Wants To Meet Up">Wants To Meet Up</option>
          </select>
         </label>

            <label htmlFor="">About Me
         <input type="text" value={this.state.description} onChange={this.handleUpdate("description")} />
            </label>
          </form>
      </section>
      </main>
    )
  }
}

export default Edit;
