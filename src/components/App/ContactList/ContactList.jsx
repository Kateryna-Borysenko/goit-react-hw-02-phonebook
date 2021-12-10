import s from './ContactList.module.css';
import Paper from '../common/Paper/Paper';

const ContactList = ({ contacts, onDelete }) => (
  <ul className={s.contactList}>
    {contacts.map(({ id, name, number }) => (
      <Paper>
        <li key={id} className={s.contactListItem}>
          <span className={s.contactName}>{name}</span>: {number}
          <button
            type="button"
            className={s.button}
            // первдала в props onDelete={this.deleteContact}
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </li>
      </Paper>
    ))}
  </ul>
);

export default ContactList;
