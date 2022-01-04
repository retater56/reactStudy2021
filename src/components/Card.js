import React from "react";

const Card = (props) => {

  const cardStyle = {
    marginTop: "20px",
    padding: "20px",
    border: "1px solid black",
    borderRadius: "10px",
    boxShadow: "rgb(34 60 80 / 35%) 0px 5px 20px 0px",
  }

  return (
    <section style = {cardStyle}>
    <h2>{props.item.name}, card number {props.item.id}</h2>
    <h3>Birthday: {props.item.birthday}</h3>
    <h3>Country: {props.item.country}</h3>
    <h3>Want receive notifications: {props.item.notifications}</h3>
    </section>
  )
}

export default Card;
