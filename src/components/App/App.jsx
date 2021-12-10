import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onSubmit = newContact => {
    const { id, name, number } = newContact;

    //проверка на одинаковые контакты
    const isInContactList = contact => contact.name === newContact.name;

    this.state.contacts.some(isInContactList)
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, { id, name, number }],
        }));
  };

  onChangeInput = e => {
    this.setState({ filter: e.target.value });
  };

  //поиск совпадений в списке контактов
  onFilterChange = () => {
    const value = this.state.filter;
    return this.state.contacts.filter(elem =>
      elem.name.toLowerCase().includes(value.toLowerCase()),
    );
  };

  deleteContact = id => {
    //перезаписываем текущее состояние state -> вернёт массив без удудалённого объекта определит его по id
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(elem => elem.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1 className={s.title}>PhoneBook</h1>
        <div className={s.wrap}>
          <ContactForm onSubmit={this.onSubmit} contacts={contacts} />
        </div>
        <Filter value={filter} onChange={this.onChangeInput} />
        <h2 className={s.subtitle}>Contacts:</h2>
        <ContactList
          contacts={this.onFilterChange()}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}
export default App;
