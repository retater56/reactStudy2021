import React, { Component } from "react";


class Card extends Component {

  constructor(props) {
    super(props);

    this.name = props.info.name;
    this.date = props.info.date;
  }

  render() {
    // console.log(this.props.info)
    return (
      <div>
        {this.name}
        {this.date}
        {/* Start */}
      </div>
    )
  }


}

export default Card;
