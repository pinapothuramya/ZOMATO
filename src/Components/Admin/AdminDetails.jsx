import React, { useEffect, useState } from "react";
import { AddNewAdmins, getAllAdmins } from "../../Users/adminSlice";

const AdminDetails = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(false);

  const[isModelOpen,setIsModelOpen]=useState(false);

  const [formData,setFormData]=useState({
    adminName:"",
    adminEmail:"",
    address:"",
    employe:
    [
      {
        name:"",
        email:"",
        address:""
      }
    ]
  }
  );
 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    setLoading(true);
    try {
      const data = await getAllAdmins();
      setAdmins(data);
    } catch (error) {
      console.error("Error fetching admins:", error);
    } finally {
      setLoading(false);
    }
  };
const handleSubmit = async (e) => {
  e.preventDefault(); // ✅ typo fixed
  try {
    const newAdmin = await AddNewAdmins(formData); // send form data
    setAdmins((prev) => [...prev, newAdmin]); // update list
    setFormData({ adminName: "", adminEmail: "", address: "" }); // reset form
    setIsModelOpen(false); // close modal
  } catch (error) {
    console.log("Error adding admin:", error);
  }
};

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex flex-wrap items-center justify-center mb-6">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        Admin Details
      </h1>
     <button 
     onClick={()=>setIsModelOpen(true)}
     className="mb-3 ml-2 bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition">
        Add New Admin
      </button>

      </div>
      {loading ? (
        <p className="text-center text-lg text-gray-500">Loading admins...</p>
      ) : admins.length === 0 ? (
        <p className="text-center text-gray-500">No admins found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {admins.map((admin) => (
            <div
              key={admin.id}
              className="bg-white shadow-lg rounded-xl p-5 border border-gray-200 hover:shadow-2xl transition"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {admin.adminName}
              </h2>
              <p className="text-gray-600">
                <span className="font-medium">Email:</span> {admin.adminEmail}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Address:</span> {admin.address}
              </p>
              <div className="mt-3">
  <span className="font-medium text-gray-700">Sub Employee Details:</span>
  {admin.employe.length === 0 ? (
    <p className="text-gray-500 ml-2">No employees assigned</p>
  ) : (
    <ul className="list-disc ml-5">
      {admin.employe.map((emp, index) => (
        <li key={index} className="text-gray-600">
          <strong>{emp.name}</strong> — {emp.email}, {emp.address}
        </li>
      ))}
    </ul>
  )}
</div>

              <button className="mt-4 w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition">
                View Details
              </button>
            </div>
          ))}
          {
            isModelOpen&&(
               <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
                  <div className="bg-white rounded-lg p-6 shadow-lg w-96">
                    <h2 className="text-xl font-bold mb-4">Add New Admin</h2>
                    <form onSubmit={handleSubmit}>
                      <input
                      type="text"
                      name="adminName"
                      placeholder="adminName"
                      value={formData.adminName}
                      onChange={handleChange}
                      className="w-full p-2 border rounded m-3"
                      required />
                      <input 
                       type="text"
                       name="adminEmail"
                      placeholder="enter the admin email"
                      value={formData.adminEmail}
                      onChange={handleChange}
                      className="w-full p-2 border rounded m-3"/>
                    <input
                     type="text"
                     name="address"
                      placeholder="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full p-2 border rounded m-3"
                    />
                    <div className="flex justify-end space-x-3">
                      <button
                      type="button"
                      onClick={()=>
                        setIsModelOpen(false)
                      }className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                        Cancel
                      </button>
                      <button
                      type="submit"
                     
                      className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
                        Save
                      </button>
                    </div>

                    </form>
                    </div>
                </div>
            )
          }
        </div>
      )}
    </div>
  );
};

export default AdminDetails;
