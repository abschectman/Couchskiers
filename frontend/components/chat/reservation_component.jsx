import React from 'react'
import MessageForm from "./MessageForm"

class Reservation extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      messages: [],
      host: "",
      traveler: ""
    }
  
  }

  componentDidMount(){
    this.props.getMessages(parseInt(this.props.reservationId)).then(
      res => {
        debugger
        // this.setState({host: res.res[this.props.reservationId.host_id]})
        res.res[this.props.reservationId].messages.forEach(mes => {
          this.state.messages.push(res.messages[mes].body)
        });
      }
    )
    App.cable.subscriptions.create(
      { channel: "ChatChannel", reservation_id: this.props.reservationId},
      {
        received: data => {
          this.setState({
            messages: this.state.messages.concat(data.message)
          });
        },
        speak: function (data) {
          return this.perform("speak", data);
        }
      }
    );
  }

  render(){
    const messageList = this.state.messages.map(message => {
      return (
        <li key={message.id}>
          {message}
          <div />
        </li>
      );
    });
    return (
    <div>
      <MessageForm />
      {messageList}
    </div>
    )}
}

export default Reservation;