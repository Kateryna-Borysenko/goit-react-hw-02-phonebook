import React, { Component } from 'react';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
  };

  onSubmit = e => {
    e.preventDefault();

    const { name } = this.state;

    this.props.onSubmit({
      id: nanoid(),
      name,
    });
  };

  onChangeInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name } = this.state;

    return (
      <form className={s.contacsForm} onSubmit={this.onSubmit}>
        <label className={s.label}>
          <span className={s.title}>Name:</span>
          <input
            type="text"
            onChange={this.onChangeInput}
            value={name}
            name="name"
            placeholder="Borysenko Kateryna"
            required
          />
        </label>
        <button type="submit" className={s.addBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
