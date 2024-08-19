import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import styles from "./ContactEditor.module.css";

export default function ContactEditor() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;
    if (text !== "") {
      dispatch(addContact(text));
      form.reset();
      return;
    }
    alert("Contact cannot be empty. Enter some text!");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input name="text" className={styles.input} />
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
}
