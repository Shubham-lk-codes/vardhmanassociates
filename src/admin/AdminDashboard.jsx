import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);

  const token = localStorage.getItem("adminToken");

  const fetchContacts = async () => {
    const res = await axios.get("http://localhost:5000/api/contact", {
      headers: { Authorization: token },
    });
    setContacts(res.data);
  };

  const markRead = async (id) => {
    await axios.put(
      `http://localhost:5000/api/contact/${id}`,
      {},
      { headers: { Authorization: token } }
    );
    fetchContacts();
  };

  const deleteContact = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/contact/${id}`,
      { headers: { Authorization: token } }
    );
    fetchContacts();
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1f35] text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Admin – Contact Messages</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-white/10">
          <thead className="bg-[#1c3557]">
            <tr>
              <th className="p-3">Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((c) => (
              <tr key={c._id} className="border-t border-white/10">
                <td className="p-3">{c.name}</td>
                <td>{c.email}</td>
                <td>{c.subject}</td>
                <td className="max-w-xs truncate">{c.message}</td>
                <td className={c.isRead ? "text-green-400" : "text-yellow-400"}>
                  {c.isRead ? "Read" : "Unread"}
                </td>
                <td className="space-x-2">
                  {!c.isRead && (
                    <button
                      onClick={() => markRead(c._id)}
                      className="px-3 py-1 bg-blue-500 rounded"
                    >
                      Read
                    </button>
                  )}
                  <button
                    onClick={() => deleteContact(c._id)}
                    className="px-3 py-1 bg-red-500 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
