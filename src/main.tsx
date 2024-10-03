import { createRoot } from 'react-dom/client'
import App from "./App";
import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
