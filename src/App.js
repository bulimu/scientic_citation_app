import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Doi from "./pages/doi";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Navigate to="/doi" replace />} />
            <Route path="/doi" element={<Doi />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
