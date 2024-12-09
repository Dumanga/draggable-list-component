import React, { useState } from "react";

const DraggableList2 = ({ navigateTo }) => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    const draggedIndex = e.dataTransfer.getData("text");
    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(draggedIndex, 1);
    updatedItems.splice(index, 0, draggedItem);
    setItems(updatedItems);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button onClick={() => navigateTo("home")} style={{ marginBottom: "20px" }}>
        Back to Home
      </button>
      <ul style={{ listStyle: "none", padding: 0, maxWidth: "300px", margin: "0 auto" }}>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            style={{
              padding: "10px",
              marginBottom: "5px",
              backgroundColor: "#f0f0f0",
              border: "1px solid #ddd",
              cursor: "grab",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DraggableList2;
