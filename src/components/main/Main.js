import React, { Component } from "react";
import Card from "./Card";

import "./main.scss";

class Main extends Component {
  render() {
    const categories = [
      "International Tourism",
      "Business Tourism",
      "Adventure Tourism",
      "Wildlife Tourism",
      "Medical Tourism",
      "Wellness Tourism",
      "Dark Tourism",
      "Celebrity Tourism",
      "Cruise Tourism",
      "Space Tourism",
    ];

    const card = categories.map((name, ind) => (
      <Card key={name} category={`${ind + 1}. ` + name} image = {name.replace(' ', '')}/>
    ));

    return (
      <main className="main">
        <div className="main__list">{card}</div>
      </main>
    );
  }
}

export default Main;
