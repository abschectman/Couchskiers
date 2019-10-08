import React from "react"

class Location extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.findLocation(this.props.locationId).then(ri => {
      debugger
      console.log(ri)})
    this.getUsers();
  }

  getUsers(){
    this.setState();
    // this.props.locations[parseInt(this.props.locationId)].hosts.forEach(el => {
    //   this.props.getUser(el["id"])
    // });
  }


render(){
  if(this.props.locations[parseInt(this.props.locationId)]){
    // this.props.locations[parseInt(this.props.locationId)].hosts.forEach(el => {
    //   this.props.getUser(el["id"])
    // });
    return (
      <span>{this.props.locations[this.props.locationId].city}</span>
    )
  } else{
    return ( <h1>Loading...</h1> )
  }
}


}

export default Location;