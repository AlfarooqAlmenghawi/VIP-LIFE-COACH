import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Us from "./components/Us/Us";
import Coaching from "./components/Coaching/Coaching";
import Areas from "./components/Areas/Areas";
import Location from "./components/Location/Location";
import FeesAndPricing from "./components/FeesAndPricing/FeesAndPricing";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/about-us" element={<Us />} />
          <Route path="/client" element={<Coaching />} />
          <Route path="/coaching-areas" element={<Areas />} />
          <Route path="/location" element={<Location />} />
          <Route path="/fees-and-pricing" element={<FeesAndPricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
