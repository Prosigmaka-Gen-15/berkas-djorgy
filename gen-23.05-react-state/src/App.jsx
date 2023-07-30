import { useState } from "react";
import Navbar from "./components/Navbar";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <ProductDetail />
      <Footer />
    </>
  );
}

export default App;
