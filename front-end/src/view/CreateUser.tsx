import axios from "axios";
import { error } from "console";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function CreateUser (){
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

    const navigate = useNavigate();


    const sendData =async (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const formData = new FormData();

        formData.append('name',name)
        formData.append('email',email)
        formData.append('password',password)
        
        await axios.post("http://127.0.0.1:8000/api/create",formData)
        .then(({data})=>{
            console.log (data);
            navigate('/')
        })
        .catch(({error})=>{
            console.log(error)
        })   
    }


    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <form onSubmit={sendData} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-center text-lg font-bold mb-4">Registration Form</h2>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(e)=>{setname(e.target.value)}} type="text" placeholder="Enter your name" />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(e)=>{setemail(e.target.value)}} type="email" placeholder="Enter your email" />
                    </div>
                    <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder="Enter your password" />
                    </div>
                    <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Register
                    </button>
                    </div>
                </form>
            </div>  
        </>
    )
}

export default CreateUser