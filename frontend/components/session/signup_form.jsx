import React from "react";
import SignupNavContainer from "./signup_nav_container"

class SignupForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      description: "",
      location: "",
      location_id: "",
      hosting_status: "Not Accepting Guests"
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.modaling = this.modaling.bind(this);
    this.closer = this.closer.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.selectLocation = this.selectLocation.bind(this);
  }

  demoLogin(e){
    e.preventDefault();
    let demoUser = {
      email: "demo@test.com",
      password: "password"
    }
    this.props.login(demoUser)
    
  }

  handleSubmit(e){
    e.preventDefault();
    let users = this.state
    this.props.create(users)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  selectLocation(e){
    e.preventDefault();
    this.setState({ location: e.currentTarget.innerText,
      location_id: parseInt(e.currentTarget.id) })
      this.props.clearLocations();
  }

  handleLocation(e){
    e.preventDefault();
    this.props.clearLocations();
    this.setState({location: e.currentTarget.value})
    if(e.currentTarget.value.length > 0){
    this.props.findLocations(e.currentTarget.value)
    }
    // this.setState({ possibleLocations: poss})
  }

  closer(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  modaling() {
    this.props.openModal("modal")
  }

  render (){
    let displayString =[];
    let err = [];
    let cont = [];
    if(this.props.locations instanceof Array){
      displayString = this.props.locations.map(lo => <li className="dropdown" id={lo.id} key={lo.id} onClick={this.selectLocation}>{(lo.city + ", " + lo.country)}</li>)}
    if (this.props.errors instanceof Array){
       err = this.props.errors
       if (err[0] !== "Invalid Username or Password"){
        err = err.map(er => <li key={er}>{er}</li>)
       cont = <div className="errors">{err}</div>
    }}

   return (
       <main>
      
       <SignupNavContainer />
         <section className="auth-info">
         
           <span className="local">Ski with Locals and Meet Travelers</span>
           <span className="share">Share Authentic Travel Experiences</span>



          <form onSubmit={this.handleSubmit} className="signup" >
           <h3>Sign Up With Email</h3>
             {cont}
           <button type="button" className="demo" onClick={this.demoLogin}>Demo User</button>
           <div className="names">

             <div className="first-name">
               <label htmlFor="">First name</label>
            <input type="text" />

             </div>

            <div className="last-name">
               <label htmlFor="">Last name</label>
            <input type="text" />

             </div>

           </div>

           <div className="email">
           <label htmlFor="">Email</label>
           <input type="email" value={this.state.email} onChange={this.update('email')} />
           </div>

            <div className="password">
           <label htmlFor="">Password</label>
           <input type="password" value={this.state.password} onChange={this.update('password')} />
           </div>

           <div className="password">
             <label htmlFor="">Location</label>
             <div className="loc-container">
             <input type="text" value={this.state.location} onChange={this.handleLocation } />
             <ul className="drop-container">{displayString}</ul>
             </div>
           </div>

           <input className="bottom-join" type="submit" value="Join" />

         </form >


           <span>Already a member?</span>
           <button className="login-button" onClick={this.modaling}>Log In</button>
         </section>


         <section className="foot">

         </section>
       </main>
   )
}

}





export default SignupForm;
