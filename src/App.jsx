import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Us from "./components/Us/Us";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/about-us" element={<Us />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
