import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function ListUser(){

    interface UserType {
        id: number;
        name: string;
        email: string;
        password: string;
      }

    const [users, setusers]= useState<UserType[]>([]);

    useEffect(()=>{
        getusers()
    },[])


    const getusers = async ()=>{
        await axios.get("http://127.0.0.1:8000/api/index")
        .then(({data})=>{setusers(data.data)})
    }


    const deleteUser = async (id : number) =>{
        await axios.post(`http://127.0.0.1:8000/api/dalete/${id}`)
        .then(({data})=>{
            console.log(data.message)
            getusers()
        })
    }

    return (
        <>
            {users.map(user => (
            <div key={user.id} className=" bg-white shadow-md rounded px-8 pt-6 pb-8 m-10">
                <h3 className="text-lg font-bold mb-2">name : {user.name}</h3>
                <p className="text-gray-700 mb-2">email : {user.email}</p>
                <p className="text-gray-700 mb-5">password : {user.password}</p>
                <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full " to={`/update/${user.id}`}>Edit</Link>
                <button onClick={()=>{deleteUser(user.id)}} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ml-5">Delete</button>
            </div>
            ))}
        </>
    )
}

export default ListUser