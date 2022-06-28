import "./App.css";
import Navbar from "./component/Navbar";
import Box from "@mui/material/Box";

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${"daoudi-aissa-Pe1Ol9oLc4o-unsplash.jpg"})`,
          backgroundSize: "cover",
        }}
      >
        <Navbar></Navbar>
      </Box>
    </div>
  );
}

export default App;
