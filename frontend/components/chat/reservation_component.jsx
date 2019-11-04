import React from 'react'

class Reservation extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getMessages(parseInt(this.props.reservationId))
  }

  render(){
    return (
    <div>
    </div>
    )}
}

export default Reservation;