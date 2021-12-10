import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
  };

  onSubmit = newContact => {
    const { id, name, number } = newContact;

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id, name, number }],
    }));
  };

  onChangeInput = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h1 className={s.title}>PhoneBook</h1>
        <div className={s.wrap}>
          <ContactForm onSubmit={this.onSubmit} contacts={contacts} />
        </div>
      </div>
    );
  }
}
export default App;
