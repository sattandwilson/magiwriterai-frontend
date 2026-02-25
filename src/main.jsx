import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./lib/ScrollToTop";
import { UserProvider } from "./context/userContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <ScrollToTop />
      <App />
      <Toaster />
    </UserProvider>
  </BrowserRouter>
);
