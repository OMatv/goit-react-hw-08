import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContactList from "../../components/ContactList/ContactList";

import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import styles from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <PageTitle>Your Contacts</PageTitle>
      <SearchBox />
      <ContactForm />
      <div>{isLoading && "Loading ..."}</div>
      <ContactList />
    </div>
  );
}
