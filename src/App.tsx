import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TailwindProfile from "./pages/TailwindProfile";
import StyledProfile from "./pages/StyledProfile";

function App() {
  return (
    <Router>
      <nav className="p-4 bg-white shadow flex gap-4 justify-center">
        <Link to="/tailwind">Tailwind Card</Link>
        <Link to="/styled">Styled Card</Link>
      </nav>
      <Routes>
        <Route path="/tailwind" element={<TailwindProfile />} />
        <Route path="/styled" element={<StyledProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
