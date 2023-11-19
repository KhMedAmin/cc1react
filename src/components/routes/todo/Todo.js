import React, { useState } from 'react';
import './todo.css';
import Form from './Form';
import PackingList from './PackingList';

const initialItems = [
  { id: 1, description: "préparer un projet", packed: false },
  { id: 2, description: "gestion de base donnée", packed: false },
  { id: 3, description: "méthode agile", packed: false },
  
];

export default function Todo() {
    const [items, setItems] = useState(initialItems);

  function addItem(description) {
    const newTache = { description, packed: false, id: Date.now() };
    setItems([...items, newTache]);
  }

  function toggleItem(id) {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(updatedItems);
  }

  function removeItem(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  }
  return (
    <div className='tododiv'>
      
      <Form addItem={addItem} />
      <PackingList
        items={items}
        toggleItem={toggleItem}
        removeItem={removeItem}
      />
    </div>
  )
}
