import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import { CruisePage } from "./components/find-a-cruise/CruisePage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/find-a-cruise/:id" element={<CruisePage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
