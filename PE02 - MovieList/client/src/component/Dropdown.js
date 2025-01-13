import React, { useState } from "react";
import "../styles/dropdown.css";
function Dropdown({ title, items, onSelect }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({ id: null, name: "All Genres" });

  const toggle = () => setOpen(!open);

  const selectItem = (item) => {
    setSelected(item);
    setOpen(false);
    onSelect(item);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggle}>
        {selected ? selected.name : title}
      </div>
      {open && (
        <ul className="dropdown-list">
          <li onClick={() => selectItem({ id: null, name: "All Genres" })}>
            All Genres
          </li>
          {items.map((item) => (
            <li key={item.id} onClick={() => selectItem(item)}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;