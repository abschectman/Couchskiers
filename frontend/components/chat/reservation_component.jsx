import React from 'react'
import MessageForm from "./MessageForm"

class Reservation extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      messages: [],
      host: "",
      traveler: "",
      user: ""
    }
    this.channel = null;
    this.bottom = React.createRef();
  
  }

  componentDidMount(){
  
    let id =this.props.reservationId;
    let otherUser;
    this.props.getMessages(parseInt(this.props.reservationId)).then(
      res => {
        this.props.user === res.res[id].host_id ? otherUser = res.res[id].reserver_id : otherUser = res.res[id].host_id
      this.props.getUser(otherUser).then(use =>{
       this.setState({host: use.user.email})
      })
        res.res[this.props.reservationId].messages.forEach(mes => {
          if(res.messages[mes].reservation_id === this.props.reservationId){
            this.state.messages.push({ body: res.messages[mes].body, user: res.messages[mes].user_id})
        }});
      }
    )
    this.channel = App.cable.subscriptions.create(
      { channel: "ChatChannel", reservation_id: this.props.reservationId, user_id: this.props.user},
      {
        received: data => {
          this.setState({
            messages: this.state.messages.concat([{body: data.message, user: data.user_id}])
          });
        },
        speak: function (data) {
          return this.perform("speak", data);
        }
      }
    );
  }

  componentWillUnmount(){
   this.channel.unsubscribe();
  }


  componentDidUpdate() {
    this.bottom.current.scrollIntoView();
  }

  render(){
    console.log(this.props.user)
    const messageList = this.state.messages.map(message => {
      let type
      message.user === this.props.user ? type ="mine" : type = "yours"
     return (
       <div className={type + " messages"}>
        <div className="message last">
          {message.body}
        </div>
       </div>
      );
    });
    return (
    <div id={this.props.reservationId} className="res-chat">
      <span>Your conversation with {this.state.host}</span>
      
        <div className="chat">
          {messageList}
        <span ref={this.bottom}></span>
        </div>
        <MessageForm />
    
    </div>
    )}
}


export default Reservation;