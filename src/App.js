import "./App.css";
import Navbar from "./component/Navbar";
import Box from "@mui/material/Box";

function App() {
  return (
    <div className="App">
      <>
        <Box
          sx={{
            height: "100vh",
            backgroundImage: `url(${"francesca-hotchin-FN-cedy6NHA-unsplash.jpg"})`,
            backgroundSize: "cover",
          }}
        >
          <Navbar></Navbar>
        </Box>
      </>
    </div>
  );
}

export default App;
