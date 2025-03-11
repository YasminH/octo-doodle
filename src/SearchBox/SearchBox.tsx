import styles from "./SearchBox.module.scss";

type SearchBoxProps = {
  onChange: (value: string) => void;
};

export default function SearchBox({ onChange }: SearchBoxProps) {
  return (
    <input
      type="text"
      name="search"
      id="search"
      placeholder="Zoek op ..."
      onChange={(e) => onChange(e.target.value)}
      className={styles.input}
    />
  );
}
