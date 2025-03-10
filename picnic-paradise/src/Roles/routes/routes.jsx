import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserNavbar from "./roles/USER/UserNavbar";
import AdminNavbar from "./roles/ADMIN/AdminNavbar";
import SupportNavbar from "./roles/SUPPORT/SupportNavbar";
import CategoryPage from "./pages/CategoryPage";
import EventDetailPage from "./pages/EventDetailPage";
import HomePage from "./pages/HomePage";
import AdminDashboard from "./roles/ADMIN/AdminDashboard";
import ManageEvents from "./roles/ADMIN/ManageEvents";
import ManageUsers from "./roles/ADMIN/ManageUsers";
import SupportDashboard from "./roles/SUPPORT/SupportDashboard";
import TicketManagement from "./roles/SUPPORT/TicketManagement";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* User Routes */}
        <Route path="/user/*" element={<UserNavbar />}>
          <Route index element={<HomePage />} />
          <Route path="categories" element={<CategoryPage />} />
          <Route path="event/:id" element={<EventDetailPage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminNavbar />}>
          <Route index element={<AdminDashboard />} />
          <Route path="events" element={<ManageEvents />} />
          <Route path="users" element={<ManageUsers />} />
        </Route>

        {/* Support Routes */}
        <Route path="/support/*" element={<SupportNavbar />}>
          <Route index element={<SupportDashboard />} />
          <Route path="tickets" element={<TicketManagement />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
