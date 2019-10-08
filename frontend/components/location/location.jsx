import React from "react"

class Location extends React.Component{
  constructor(props){
    super(props)
    this.getUsers = this.getUsers.bind(this)
  }

  componentDidMount(){
    this.props.findLocation(this.props.locationId).then(ri => {
      console.log(ri)})
    this.props.getLocationUsers(this.props.locationId)
  }

  getUsers(){
    let arr = [];
    this.props.locations[parseInt(this.props.locationId)].hosts.forEach(el => {
        arr.push(<li>{this.props.users[el.id].email}</li>)
    });
    return arr;
  }


render(){
  if(this.props.locations[parseInt(this.props.locationId)]){
    let hosts = this.getUsers();
    return (
      <main>
      <span>{this.props.locations[this.props.locationId].city}</span>
      <span>{hosts}</span>
      </main>
    )
  } else{
    return ( <h1>Loading...</h1> )
  }
}


}

export default Location;