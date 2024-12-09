import React, { useState } from "react";
import Home from "./screens/Home";
import DraggableList1 from "./components/DraggableList1";
import DraggableList2 from "./components/DraggableList2";

const App = () => {
  const [currentView, setCurrentView] = useState("home");

  const navigateTo = (view) => {
    setCurrentView(view);
  };

  return (
    <>
      {currentView === "home" && <Home navigateTo={navigateTo} />}
      {currentView === "dnd-kit" && <DraggableList1 navigateTo={navigateTo} />}
      {currentView === "native" && <DraggableList2 navigateTo={navigateTo} />}
    </>
  );
};

export default App;
