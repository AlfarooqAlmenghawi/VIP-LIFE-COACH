import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
