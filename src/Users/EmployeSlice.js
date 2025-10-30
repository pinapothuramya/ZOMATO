import axios from "axios"


const api=axios.create({
    baseURL:`http://localhost:8080/emplyess/`,
    headers:{
         "Content-Type": "application/json",
    }
})

export const getAllEmployes=async()=>{
    try{
        const response=await api.get(`/save`);
        return response.data;
    }catch(error){
        console.error("Error fetching all employes :",error);
        throw error;
    }
}