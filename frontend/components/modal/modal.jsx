import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.props.login.bind(this)
    this.closer = this.closer.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = this.state
    this.props.login(user)
  }

  demoLogin(e) {
    e.preventDefault();
    let demoUser = {
      email: "demo@test.com",
      password: "password"
    }
    this.props.login(demoUser)
  }

  closer(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    let err = [];
    let cont = [];
    if (this.props.errors instanceof Array && this.props.errors[0] === "Invalid Username or Password") {
      err = this.props.errors.map(er => <li key={er}>{er}</li>)
      cont = <div className="errors">{err}</div>
    }
    if (this.props.modal){
    return (
      <section className="auth-info-modal">
        <form onSubmit={this.handleSubmit} className="signup" >
          <button type="button" className="exit" onClick={this.closer}>X</button>
          <h3>Log In</h3>
          <button type="button" className="demo" onClick={this.demoLogin}>Demo User</button>
          {cont}
          <div className="email">
            <label htmlFor="">Email</label>
            <input type="email" value={this.state.email} onChange={this.update('email')} />
          </div>

          <div className="password">
            <label htmlFor="">Password</label>
            <input type="password" value={this.state.password} onChange={this.update('password')} />
          </div>

          <input className="bottom-join" type="submit" value="Log In" />

        </form >

        </section>


    )}
     else return null;
  }

}


export default Modal;
