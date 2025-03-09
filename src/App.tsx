import { useEffect, useState } from "react";

function App() {
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
            <input type="checkbox" value={item} name={item} id={item} />
            <label htmlFor={item} dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
    </ul>
  );
}

export default App;
