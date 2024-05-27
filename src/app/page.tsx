import Link from "next/link";
import FormSubmit from "./components/form-submitions";
import styles from "./index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Create <span className={styles.pinkSpan}>T3</span> App
        </h1>
        <div className={styles.cardRow}>
         
            <FormSubmit/>
        </div>
      </div>
    </main>
  );
}
