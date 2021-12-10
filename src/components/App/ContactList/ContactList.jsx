import s from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
  <ul className={s.contactList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={s.contactListItem}>
        <span className={s.contactName}>{name}</span>: {number}
      </li>
    ))}
  </ul>
);

export default ContactList;
