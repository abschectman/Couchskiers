import React from "react"

class Location extends React.Component{
  constructor(props){
    super(props)
    this.getUsers = this.getUsers.bind(this)
    this.handleHost = this.handleHost.bind(this)
  }

  componentDidMount(){
    this.props.findLocation(this.props.locationId)
  }

  handleHost(e){
    e.preventDefault();
    this.props.history.push(`/users/${e.currentTarget.id}`)
  }

  getUsers(){
    return this.props.location.hosts.map(host => {
      let e = this.props.users[host.id].email.indexOf("@")
      return (<li className="host-list" id={this.props.users[host.id].id} onClick={this.handleHost}> <img id="host-img" src="
    " alt=""/> <span>{this.props.users[host.id].email.slice(0, e)}... </span></li>)
  })
  }


render(){
  if(this.props.location){
    let hosts = this.getUsers();
    return (
      <main id="location-main">
        <div id="location-header">
          <span id="country">{this.props.location.country},</span>
          <span id="city">{this.props.location.city}</span>
        </div>
        <section id="location-middle">
        <div id="location-hosts">
            <span id="hosts-header">Local Hosts</span>
            <span id="hosts-count">Stay with one of {hosts.length.toString()} hosts in {this.props.location.city}</span>
            <div id="hosts-body">
              <ul id="hosts-outer-list">
            {hosts}
              </ul>
            </div>
        </div>
        
        <div id="location-visitors">

        </div>
        </section>

        <section id="location-events">

        </section>
      
      </main>
    )
  } else{
    return ( <h1>Loading...</h1> )
  }
}


}

export default Location;