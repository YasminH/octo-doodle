import { useEffect, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import SearchBox from "../SearchBox/SearchBox";

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

  const handleCheckboxChange = (value: string) => {
    const activeFiltersFiltered = activeFilters.filter(
      (item) => item !== value
    );
    const isNotActive = activeFiltersFiltered.length === activeFilters.length;
    const newActiveFilters = [...activeFilters, value];

    if (isNotActive) {
      setActiveFilters(newActiveFilters);
      localStorage.setItem("activeFilters", JSON.stringify(newActiveFilters));
    } else {
      setActiveFilters(activeFiltersFiltered);
      localStorage.setItem(
        "activeFilters",
        JSON.stringify(activeFiltersFiltered)
      );
    }
  };

  const handleSearchBoxChange = (value: string) => {
    setFilteredItems(
      items.filter((item) =>
        item.toLocaleLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <>
      {activeFilters.map((item, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: item }} />
      ))}
      <div>
        <SearchBox onChange={handleSearchBoxChange} />
        {filteredItems?.length && (
          <ul>
            {filteredItems.map((item) => (
              <li key={item}>
                <Checkbox
                  value={item}
                  onChange={handleCheckboxChange}
                  checked={activeFilters.includes(item)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
