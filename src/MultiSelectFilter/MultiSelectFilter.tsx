import { useEffect, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";

export default function MultiSelectFilter() {
  const [items, setItems] = useState<string[]>([]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  useEffect(() => {
    const url = "./items.json";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setItems(data.data))
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (value: string) => {
    const activeFiltersFiltered = activeFilters.filter(
      (item) => item !== value
    );
    const isNotActive = activeFiltersFiltered.length === activeFilters.length;

    if (isNotActive) {
      setActiveFilters([...activeFilters, value]);
    } else {
      setActiveFilters(activeFiltersFiltered);
    }
  };

  return (
    <>
      {activeFilters.map((item, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: item }} />
      ))}
      <ul>
        {items?.length &&
          items.map((item, index) => (
            <li key={index}>
              <Checkbox value={item} onChange={handleChange} />
            </li>
          ))}
      </ul>
    </>
  );
}
