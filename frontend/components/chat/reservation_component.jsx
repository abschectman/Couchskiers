import React from 'react'
import MessageForm from "./MessageForm"

class Reservation extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      messages: []
    }
  }

  componentDidMount(){
    this.props.getMessages(parseInt(this.props.reservationId))
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