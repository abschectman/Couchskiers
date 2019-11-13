import React from "react"


class Travel extends React.Component{
  constructor(props){
    super(props)
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e){
    e.preventDefault();
    this.props.history.push(`/locations/${e.currentTarget.id}`)
  }

  render(){
    return (<div id="travel">

      <div id="travel-header">
          <span>EXPLORE EVERY MOUNTAIN WITH COUCHSKIERS</span>
      </div>
        <div id="travel-links">
          <a onClick={this.handleSelect} className="travel-image-one" id="1699">New York City, United States</a>
          <a onClick={this.handleSelect} className="travel-image-two" id="2748">Chicago, United States</a>
          <a onClick={this.handleSelect} className="travel-image-three" id="3649">Boston, United States</a>
        </div>
      <div id="travel-search">
        
      </div>
    </div>
    )}
}

export default Travel;