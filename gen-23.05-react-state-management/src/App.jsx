import Home from "./Routes/Home.jsx";
import Detail from "./Routes/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./Routes/Admin.jsx";
import CartItem from "./components/CartItem.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}
export default App;
