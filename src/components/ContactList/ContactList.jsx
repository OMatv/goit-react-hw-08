import { useSelector } from "react-redux";
import { Contact } from "../../components/Contact/Contact";
import { selectAllContacts } from "../../redux/contacts/selectors";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectAllContacts);

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, text }) => (
        <li key={id}>
          <Contact id={id} text={text} />
        </li>
      ))}
    </ul>
  );
}
