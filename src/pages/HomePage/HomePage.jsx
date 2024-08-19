import PageTitle from "../../components/PageTitle/PageTitle";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <PageTitle>
        Welcome to the Contact Book{""}
        <span role="img" aria-label="Greeting icon"></span>
      </PageTitle>
      <p>Your personal contacts manager</p>
    </div>
  );
}
