import Home from "./Routes/Home.jsx";
import ErrorPage from "./components/Error-page.jsx";
import Detail from "./Routes/Detail";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "detail/:detailId",
//     element: <Detail />,
//   },
// ]);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </Router>
  );
}
export default App;
