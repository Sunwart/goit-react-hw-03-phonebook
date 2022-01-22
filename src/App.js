import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactsList/ContactList';
import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  checkContact = name => {
    const { contacts } = this.state;
    const normilizedName = name.toLowerCase();
    return contacts.find(contact => normilizedName === contact.name.toLowerCase());
  };

  addContact = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };
    if (this.checkContact(name)) {
      alert(`${name} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleNumbers = () => {
    const { contacts, filter } = this.state;
    const normilizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normilizedFilter));
  };

  componentDidUpdate(prevState) {
    console.log('Component upd');
    if (this.state.contacts !== prevState.contacts) {
      console.log('Contacts updated');
      localStorage.setItem('Contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const userContacts = JSON.parse(localStorage.getItem('Contacts'));
    if (userContacts) {
      this.setState({ contacts: userContacts });
    } else {
      this.setState({
        contacts: [
          { id: 'id-1', name: 'Fire emergency', number: '101' },
          { id: 'id-2', name: 'Police', number: '102' },
          { id: 'id-3', name: 'Ambulance', number: '103' },
          { id: 'id-4', name: 'Gas emergency', number: '104' },
        ],
      });
    }
  }

  render() {
    const { filter } = this.state;
    const visibleNumbers = this.getVisibleNumbers();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm submit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList visibleNumbers={visibleNumbers} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}

export default App;
