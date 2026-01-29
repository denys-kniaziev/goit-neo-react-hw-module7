import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import styles from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <div className={styles.row}>
          <span className={styles.icon}>👤</span>
          <span className={styles.name}>{contact.name}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.icon}>📞</span>
          <span className={styles.number}>{contact.number}</span>
        </div>
      </div>
      <button
        className={styles.button}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
