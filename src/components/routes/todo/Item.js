import React from 'react';

function Item({ item, toggleItem, removeItem }) {
  return (
    <li className="list-item">
      <span
        style={item.packed ? { textDecoration: 'line-through' } : {}}
        className="item-description"
      >
        {item.description}
      </span>
      <button
        onClick={() => toggleItem(item.id)}
        className="item-button"
      >
        ✅
      </button>
      <button
        onClick={() => removeItem(item.id)}
        className="item-button"
      >
        ❌
      </button>
    </li>
  );
}

export default Item;
