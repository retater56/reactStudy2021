import React, { Component } from "react";
import "./card.scss";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="card__name">{this.props.category}</div>
        <div
          className="card__img"
          style={{
            backgroundImage: `url('../../assets/img/${this.props.image}.jpg')`,
          }}
        ></div>
        <div className="card__desc">
          <div className="card__desc_likes"></div>
          <div className="card__desc_views"></div>
        </div>
      </div>
    );
  }
}

export default Card;
