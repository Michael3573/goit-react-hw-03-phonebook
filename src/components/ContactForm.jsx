import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleNumberChange = (e) => {
    this.setState({ number: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          className="form"
          type="text"
          name="name"
          placeholder="   Name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input
          className="form"
          type="tel"
          name="number"
          placeholder="   Phone Number"
          value={this.state.number}
          onChange={this.handleNumberChange}
        />
        <button className="add-btn" type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
