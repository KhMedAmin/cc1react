import React, { useState } from 'react';

function Form({ addItem }) {
  const [description, setDescription] = useState("");

  function ajout(e) {
    e.preventDefault();

    if (!description) return;

    addItem(description);
    setDescription("");
  }

  return (
    <form className="ajouter-forme" onSubmit={ajout}>
      <h3 className="forme-title">📑📝 Organisez votre vie 📑📝</h3><br />
      <input
        type="text"
        placeholder="tache..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="forme-input "
      />
      <button className="btn-hover color-8" style={{fontSize:'20px'}}>Ajouter</button>
    </form>
  );
}

export default Form;
