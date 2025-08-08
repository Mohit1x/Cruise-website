import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout"
import AdminLayout from "./components/AdminLayout"; 
import { CruisePage } from "./pages/CruisePage";
import { AuthPage } from "./pages/AuthPages";
import AccountPage from "./pages/AccountPage";
import GoOnTrip from "./pages/GoOnTrip";
// import MembershipLevel from "./pages/MembershipLevel";\
import Dashboard from "./pages/admin-pages/Dashboard";

function App() {
  return (
      <Router>
        <Routes>
    {/* main website pages*/}
          <Route path="/auth" element={<AuthPage />} />
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/find-a-cruise/:id" element={<CruisePage />} />
            <Route path="/go-to-a-trip" element={<GoOnTrip />} />
            <Route path="/account" element={<AccountPage />} />
          </Route>

      {/* admin Pages*/}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="membership-management" element={<Outlet />}>
              <Route path="member-list" element={<div>Member List Page Placeholder</div>} />
              {/* <Route path="membership-level" element={<MembershipLevel />} /> */}
            </Route>
            <Route path="trade" element={<div>Trade Page Placeholder</div>} />
            <Route path="help-center" element={<div>Help Center Page Placeholder</div>} />
            <Route path="system-management" element={<div>System Management Page Placeholder</div>} />
            <Route path="agent-management/proxy-list" element={<div>Proxy List Page Placeholder</div>} />
            <Route path="customer-service/1" element={<div>Customer Service 1 Page Placeholder</div>} />
            <Route path="customer-service/2" element={<div>Customer Service 2 Page Placeholder</div>} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
