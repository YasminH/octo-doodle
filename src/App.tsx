import MultiSelectFilter from "./MultiSelectFilter/MultiSelectFilter";
import styles from "./App.module.scss";

export default function App() {
  return (
    <>
      <header>
        <h1 className={styles.title}>Multi select filter </h1>
      </header>
      <main>
        <MultiSelectFilter />
        <div className={styles.placeholder}>Placeholder for listing</div>
      </main>
      <footer>
        <a href="https://github.com/YasminH/octo-doodle" target="_blank">
          🍰 Y.H.
        </a>
      </footer>
    </>
  );
}
