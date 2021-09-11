import React, { useState } from "react";

const HookOne = () => {
  const [items, setItem] = useState([]);
  return (
    <div>
      <button
        type="button"
        onClick={() =>
          setItem([
            ...items,
            {
              id: items.length,
              value: Math.floor(Math.random() * 10) + 1,
            },
          ])
        }
      >
        Add the items
      </button>
      <ul>
        {items.map((eachItem) => (
          <li key={eachItem.id}>{eachItem.value}</li>
        ))}
      </ul>
      <div>{JSON.stringify(items)}</div>
    </div>
  );
};

export default HookOne;
