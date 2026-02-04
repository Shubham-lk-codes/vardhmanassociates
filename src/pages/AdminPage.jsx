import { useState } from "react";
import AdminLogin from "../admin/AdminLogin"
import AdminDashboard from "../admin/AdminDashboard";

const AdminPage = () => {
  const [loggedIn, setLoggedIn] = useState(
    !!localStorage.getItem("adminToken")
  );

  return loggedIn ? (
    <AdminDashboard />
  ) : (
    <AdminLogin onLogin={() => setLoggedIn(true)} />
  );
};

export default AdminPage;
