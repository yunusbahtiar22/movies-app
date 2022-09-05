// import logo from './logo.svg';
// import './App.css';
import ApplBar from "./components/ApplBar";
import Carousel from "./components/Carousel";
import Slider from "./components/Slider";
import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <ApplBar />
      <section style={{ width: "95%", margin: "1rem auto" }}>
        <Carousel />
      </section>
      <Typography>Popular</Typography>
      <section style={{ width: "95%", margin: "1rem auto" }}>
        <Slider />
      </section>
    </>
  );
}

export default App;
