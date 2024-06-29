import { Item } from './Item';
import { useState, useEffect } from 'react';

export function Slider() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => data.slice(0, 6))
      .then((data) => setData(data))
      .catch((error) => error.message);
  }, []);

  return (
    <div>
      <Item data={data} />
    </div>
  );
}
