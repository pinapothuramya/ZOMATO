import React, { useEffect, useState } from 'react'
import { getAllEmployes } from '../../Users/EmployeSlice';

export const EmployeDetails = () => {
    const [emplye,setEmploye]=useState([]);
    
    const[formData,setFormData]=useState({
        name:"",
        email:"",
        address:"",
    })

    const handleChnage=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});

    }
    useEffect(()=>{
        fetchEmployes();
    },[])

    const fetchEmployes=async()=>{
        try{
            const data=await getAllEmployes();
            setEmploye(data);
        }catch (error) {
      console.error("Error fetching admins:", error);
    }
    }
  return (
    <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {
        emplye.map((emplye)=>(
             <div
             
              className="bg-white shadow-lg rounded-xl p-5 border border-gray-200 hover:shadow-2xl transition"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{emplye.name}
                
              </h2>
              <p className="text-gray-600">
                <span className="font-medium">Email:</span> {emplye.email}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Address:</span>{emplye.addressS}
              </p>
              <button className="mt-4 w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition">
                View Details
              </button>
            </div>
        ))
       }
     
    </div>
  )
}
