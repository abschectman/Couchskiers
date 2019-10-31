import React from "react";

class SignupNav extends React.Component{
  constructor(props){
    super(props)
    this.closer = this.closer.bind(this);
    this.modaling = this.modaling.bind(this);
  }

  closer(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  modaling() {
    this.props.openModal("modal")
  }

  render(){
   return ( <section className="head">
      <span className="title">couchskiers</span>

      <input className="join" type="submit" value="Join" onClick={this.closer} />
      <input className="login" type="submit" value="Log In" onClick={this.modaling} />

    </section>

   )}
}

export default SignupNav;