import { useCallback, useEffect, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import SearchBox from "../SearchBox/SearchBox";
import styles from "./MultiSelectFilter.module.scss";
import Pill from "../Pill/Pill";

export default function MultiSelectFilter() {
  const [items, setItems] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState<string[]>([]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  useEffect(() => {
    const url = "./items.json";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setItems(data.data);
        setFilteredItems(data.data);
      })
      .catch((error) => console.error(error))
      .then(() => {
        const storageItems = localStorage.getItem("activeFilters");

        if (storageItems) {
          setActiveFilters(JSON.parse(storageItems));
        }
      });
  }, []);

  const toggleFilter = useCallback((value: string) => {
    setActiveFilters((prevFilters) => {
      const newFilters = prevFilters.includes(value)
        ? prevFilters.filter((item) => item !== value)
        : [...prevFilters, value];

      localStorage.setItem("activeFilters", JSON.stringify(newFilters));
      return newFilters;
    });
  }, []);

  const onSearchChange = useCallback(
    (value: string) => {
      setFilteredItems(
        items.filter((item) =>
          item.toLocaleLowerCase().includes(value.toLowerCase())
        )
      );
    },
    [items]
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Productgroep</h2>
      <SearchBox onChange={onSearchChange} />
      {activeFilters?.length > 0 && (
        <div className={styles.activeFilters}>
          Gekozen filters:
          {activeFilters.map((item, index) => (
            <Pill key={index}>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </Pill>
          ))}
        </div>
      )}
      {filteredItems?.length > 0 && (
        <ul className={styles.list}>
          {filteredItems.map((item) => (
            <li key={item} className={styles.listItem}>
              <Checkbox
                value={item}
                onChange={toggleFilter}
                checked={activeFilters.includes(item)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
