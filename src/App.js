import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Auth />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
