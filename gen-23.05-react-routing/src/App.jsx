import ProductDetail from "./components/ProductDetail";
import Home from "./Routes/Home.jsx";
import ErrorPage from "./components/Error-page.jsx";
import Detail from "./Routes/Detail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "detail/:detailId",
    element: <Detail />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
