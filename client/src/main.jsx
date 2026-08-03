import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./context/AuthContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <AuthProvider>
    <Toaster
      position="top-right"
      reverseOrder={false}
      />
    <App />
      </AuthProvider>
  </>
);