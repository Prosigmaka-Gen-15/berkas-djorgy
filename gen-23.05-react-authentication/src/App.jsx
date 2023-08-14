import Home from "./Routes/Home.jsx";
import Detail from "./Routes/Detail";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Admin from "./Routes/Admin.jsx";
import CartItem from "./components/CartItem.jsx";
import LoginForm from "./components/LoginForm.jsx";
import PrivatePage from "./Routes/PrivatePage.jsx";
import CustomerPage from "./Routes/CustomerPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/cart" element={<CartItem />} />
        <Route element={<PrivatePage />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route element={<CustomerPage />}>
          <Route path="/login" element={<LoginForm />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
