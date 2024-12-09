import React from "react";
import { Box, Button } from "@mui/material";

const Home = ({ navigateTo }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "rgba(60, 59, 59, 0.98)",
      }}
    >
      <Button variant="contained" onClick={() => navigateTo("native")} sx={{ mb: 2 }}>
        Draggable List (JS + CSS)
      </Button>
      <Button variant="contained" onClick={() => navigateTo("dnd-kit")} sx={{ mb: 2 }}>
        Draggable List (DND Kit + MUI)
      </Button>
    </Box>
  );
};

export default Home;
