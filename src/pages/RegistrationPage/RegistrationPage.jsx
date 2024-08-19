import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import styles from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <div className={styles.container}>
      <h2>Register</h2>
      <RegistrationForm />
    </div>
  );
}
