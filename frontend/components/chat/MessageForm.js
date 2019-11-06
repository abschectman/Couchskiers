import React from "react";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].speak({
      message: this.state.body
    });
    this.setState({ body: "" });
  }

  render() {
    return (
      <div id="message-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            id="message-text"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder="Type message here"
          />
          <input type="submit" id="message-submit" value="Send"/>
        </form>
      </div>
    );
  }
}

export default MessageForm;
