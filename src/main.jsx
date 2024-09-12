import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./routes/Bag.jsx";
import App from "./routes/App.jsx";
import "./index.css";
import Home from "./routes/home.jsx";
import { Provider } from "react-redux";
import myntreStore from "./store/index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./routes/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntreStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
