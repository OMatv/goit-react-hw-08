import PageTitle from "../../components/PageTitle/PageTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import styles from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <div className={styles.container}>
      <PageTitle>Register your contact</PageTitle>
      <RegistrationForm />
    </div>
  );
}
