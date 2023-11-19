import React from 'react';
import Item from './Item';

function PackingList({ items, toggleItem, removeItem }) {
  return (
    <div>
      <ul className="list">
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            toggleItem={toggleItem}
            removeItem={removeItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
