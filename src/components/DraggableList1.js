import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
import { List, Paper, Button } from "@mui/material";

const DraggableList1 = ({ navigateTo }) => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = ({ active, over }) => {
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Button
        variant="contained"
        onClick={() => navigateTo("home")}
        sx={{ marginBottom: "20px" }}
      >
        Back to Home
      </Button>
      <Paper elevation={3} sx={{ width: 300, margin: "0 auto" }}>
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            <List>
              {items.map((item) => (
                <SortableItem key={item} id={item} />
              ))}
            </List>
          </SortableContext>
        </DndContext>
      </Paper>
    </div>
  );
};

export default DraggableList1;
