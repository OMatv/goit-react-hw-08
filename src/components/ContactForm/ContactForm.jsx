import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />
      <input
        type="text"
        name="number"
        placeholder="Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Add Contact
      </button>
    </form>
  );
}
