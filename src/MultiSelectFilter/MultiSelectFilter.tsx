import { useEffect, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";

export default function MultiSelectFilter() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = "./items.json";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setItems(data.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ul>
      {items?.length &&
        items.map((item, index) => (
          <li key={index}>
            <Checkbox value={item} />
          </li>
        ))}
    </ul>
  );
}
