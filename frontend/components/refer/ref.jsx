import React from "react"
import NavContainer from "../navbar/nav_container"

class Ref extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      body: "",
      positive: true,
      ref_type: "host",
      yes: "",
      no: "",
      errors: []
    }
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handlePositive = this.handlePositive.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentDidMount(){
    this.props.getUser(parseInt(this.props.userId))
  }

  handleUpdate(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handlePositive(e){
    e.preventDefault();
    e.currentTarget.value === "true" ? this.setState({
    positive: true,
    no: null,
    yes: "checked"}) :
    this.setState({
    positive: false,
    no: "checked",
    yes: null})
  }

  submit(e){
    e.preventDefault();
    let ref = this.state;
    ref["referer_id"] = this.props.currentUser,
    ref["subject_id"] = parseInt(this.props.userId)
    this.props.createRef(ref).then((yay) => {
      this.props.history.push(`/users/${this.props.userId}`)}, (err) =>{
        this.setState({errors: err.errors})
      })
    
  }

  render(){
    let email;
    this.props.users[this.props.userId] ? email = this.props.users[this.props.userId].email
    : email = [];
    return (
      <main>
        <NavContainer/>
        <div id="ref-form">
          <form action="">
            <span>Would you recommend {email} ? </span>
              <div>
              <input value={true} type="radio" onChange={this.handlePositive} checked={this.state.yes}/>
                <label>Yes, I'd recommend</label>
              </div>
            <div>
              <input value={false} type="radio" onChange={this.handlePositive} checked={this.state.no}/>
              <label>No, I wouldn't recommend</label>
            </div>
            <span>
              Your reference will appear on {email}'s profile, 
              so be sure that you're only sharing words you're comfortable saying publicly.   
              Once you submit a reference, you can't edit or delete it
            </span>
            <input id ="ref-text" type="textarea" value={this.state.body} onChange={this.handleUpdate("body")} />
            <button className="edit-button-page" onClick={this.submit}>Submit</button>
          </form>
          <span className="ref-errors">{this.state.errors}</span>
        </div>
      </main>
    )
  }
}




export default Ref;