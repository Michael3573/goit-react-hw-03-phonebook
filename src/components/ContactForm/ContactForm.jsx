import React, { Component } from 'react';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleNumberChange = e => {
    this.setState({ number: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={styles.form}
          type="text"
          name="name"
          placeholder="   Name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input
          className={styles.form}
          type="tel"
          name="number"
          placeholder="   Phone Number"
          value={this.state.number}
          onChange={this.handleNumberChange}
        />
        <button className={styles['add-btn']} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
