import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/page/Home";
import SignIn from "./assets/page/SignIn";
// import { I18nextProvider } from "react-i18next";
// import i18n from "./i18n";
// import LanguageSwitcher from "./LanguageSwitcher";

const page = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);
function App() {
  return <RouterProvider router={page} />;
}

export default App;
