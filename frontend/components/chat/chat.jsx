import React from "react";
import MessageForm from "./messageform.jsx"

class Chat extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: []
    }
    this.bottom = React.createRef();
  }

  componentDidMount() {
    App.cable.subscriptions.create(
      { channel: "ChatChannel" },
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

  componentDidUpdate(){
    this.bottom.current.scrollIntoView();
  }
  render() {
    const messageList = this.state.messages.map(message => {
      return (
        <li key={message.id}>
          {message}
          <div ref={this.bottom} />
        </li>
      );
    });
    return (
      <div className="chat-container">
        <div>Chat</div>
        <div className="message-list">{messageList}</div>
        <MessageForm />
      </div>
    );
  }
}

export default Chat;
