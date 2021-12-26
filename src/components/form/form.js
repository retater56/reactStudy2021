import React, { Component } from "react";

import "./form.scss";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      date: "",
      select: "Canada",
      check: false,
      news: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;

    let value;
    if (target.name == "check" || target.name == "news") {
      value = target.checked;
    } else {
      if (target.classList.contains("input__incorrect")) {
        target.classList.remove("input__incorrect");
      }
      value = target.value;
    }

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    const target = event.target;
    if (target.type == "submit") {
      event.preventDefault();
      if (this.state.name == "") {
        document.querySelector(".form__name").classList.add("input__incorrect");
      }
      if (this.state.date == "") {
        document.querySelector(".form__date").classList.add("input__incorrect");
      }
      if (document.querySelector('.input__incorrect')) {
        console.log('input__incorrect')
        return
      }
      console.log(this.state);
    }
  }

  render() {
    const countries = [
      "Canada",
      "Japan",
      "Germany",
      "Switzerland",
      "Australia",
      "United States",
      "New Zealand",
      "United Kingdom",
      "Sweden",
      "Netherlands",
    ];

    const countriesList = countries.map((name) => {
      return (
        <option key={name} value={name}>
          {name}
        </option>
      );
    });

    return (
      <form className="form">
        <label>
          Your name:
          <input
            name="name"
            className="form__name"
            onChange={this.handleInputChange}
            value={this.state.name}
          ></input>
        </label>
        <label>
          Your birthday:
          <input
            type="date"
            name="date"
            className="form__date"
            onChange={this.handleInputChange}
          ></input>
        </label>
        <label>
          Your best country:
          <select
            name="select"
            className="form__select"
            onChange={this.handleInputChange}
            value={this.state.select}
          >
            {countriesList}
          </select>
        </label>

        <label>
          Your data is correct?
          <input
            name="check"
            type="checkbox"
            className="form__checkbox"
            onChange={this.handleInputChange}
            value={this.state.check}
          ></input>
        </label>
        <div className="switch__wrapper">
          Do you want read our news?
          <label className="switch">
            <input
              name="news"
              type="checkbox"
              onChange={this.handleInputChange}
              value={this.state.news}
            />
            <div></div>
          </label>
        </div>
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
