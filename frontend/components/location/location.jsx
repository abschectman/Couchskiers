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
    let i = 0;
    while (i < this.props.locations[this.props.locationId].hosts.length){
      arr.push(this.props.locations[this.props.locationId].hosts[i].email)
      i++
    }
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