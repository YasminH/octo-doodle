import SearchIcon from "../SearchIcon/SearchIcon";
import styles from "./SearchBox.module.scss";

type SearchBoxProps = {
  onChange: (value: string) => void;
};

export default function SearchBox({ onChange }: SearchBoxProps) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Zoek op ..."
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
      />
      <SearchIcon className={styles.icon} width={26} height={26} />
    </div>
  );
}
