import { ReactNode } from "react";
import styles from "./Pill.module.scss";

type PillProps = {
  children: ReactNode;
};

export default function Pill({ children }: PillProps) {
  return <span className={styles.pill}>{children}</span>;
}
