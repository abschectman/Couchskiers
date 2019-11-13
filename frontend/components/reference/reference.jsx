import React from 'react'


class Reference extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.message = "";
  }

  componentDidMount() {
    this.props.props.rating ? this.message = `Would Stay With ${this.props.props.sendersEmail.slice(0, 5)} Again`
      : this.message = `Would Not Stay With ${this.props.sendersEmail.slice(0,5)} Again`
  }

  render() {
    if (this.props.props.receiversEmail && this.props.props.location){
    return (
      <div className="ref-list">
        <img id="host-img" />
        <div className="ref-list-info">
          <span id="ref-email">{this.props.props.receiversEmail}</span>
          <span id="ref-loc">{this.props.props.location.city
            + ", " + this.props.props.location.country}</span>
          <span id="ref-member">Member since 2019</span>
          <span id={this.message.split(" ")[1]}>{this.message}</span>
          <span id="ref-body"> {this.props.props.body} </span>
        </div>
      </div>
    )
    } else{
      return <h1>Loading ...</h1>
    }
  }
}

export default Reference;