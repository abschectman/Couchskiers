import React from "react"
import NavContainer from "../navbar/nav_container"
class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.currentUser,
      photo: "",
      email: "",
      description: "",
      hosting_status: "",
      profile: "",
      img: "left-img"
    }
    this.updateNeed = true;
    this.profileMessage = "Upload Profile Picture:"
    this.change = this.change.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handlePhoto = this.handlePhoto.bind(this)
    this.hostingOptions = this.hostingOptions.bind(this);
    this.cancel = this.cancel.bind(this)
  }
  componentDidMount(){
    this.props.getUser(parseInt(this.props.currentUser)).then(use =>{
      this.setState({
        email: use.user.email,
        description: use.user.description,
        hosting_status: use.user.hosting_status,
        profile: use.user.photo
      })
    })
    if(this.state.profile){
      let h = document.getElementById("edit-user-img")
      h.innerHTML = this.state.profile
      this.setState({img: "nope"})
      this.profileMessage = "Change Profile Picture:"
    }
  }

  componentDidUpdate(){
    if (this.state.profile && this.updateNeed) {
      let h = document.getElementById("edit-user-img")
      h.innerHTML = this.state.profile
      this.setState({ img: "nope" })
      this.updateNeed = false
      this.profileMessage = "Change Profile Picture:"
    }
  }

  handlePhoto(e){
    let file = e.currentTarget.files[0];
    this.setState({photo: file})
  }


  handleUpdate(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  change(e){
    e.preventDefault();
    const userForm = new FormData();
    let h = document.getElementById("ddlViewBy");
    let hosting = h.options[h.selectedIndex].text;
    let userOb = this.state
    userOb["hosting_status"] = hosting;

    for (let key in userOb) {
      userForm.append(`user[${key}]`, userOb[key])
    }
    this.props.changeUser(userForm, userOb.id).then(user => (this.props.history.push(`/users/${this.props.currentUser}`)))
  }

  cancel(e){
    e.preventDefault();
    this.props.history.push(`/users/${this.props.currentUser}`)
  }


  hostingOptions(){
    let options = ["Accepting Guests", "Maybe Accepting Guests", "Not Accepting Guests", "Wants to Meet Up"].map(str => {
      if(this.state.hosting_staus === str){
      return <option selected="selected" key={str} onSelect={this.handleUpdate("hosting_status")} value={str}>{str}</option>
    } else {
        return <option onSelect={this.handleUpdate("hosting_status")} key={str} value={str}>{str}</option>
    }
  })
  return options
  }


  render() {
   
    return (
      <main className="show">
     <NavContainer />

        <section id="edit-outer">
      <section className="edit-left">
        <div id="edit-user-img"></div>
        <img className={this.state.img} src="" alt=""/>
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
            <label htmlFor=""> {this.profileMessage}
            <input type="file" onChange={this.handlePhoto}/>
              </label>
          </form>
      </section>
        </section>
      </main>
    )
  }
}

export default Edit;
