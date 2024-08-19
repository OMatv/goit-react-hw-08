import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Contact Book</h1>
      <p>Your personal contacts manager</p>
    </div>
  );
}
