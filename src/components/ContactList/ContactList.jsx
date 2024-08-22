import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  console.log("Contacts to display:", contacts);

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.listItem}>
          <p className={styles.contactText}>
            {name}: {number}
          </p>
          <button
            onClick={() => dispatch(deleteContact(id))}
            className={styles.deleteButton}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
