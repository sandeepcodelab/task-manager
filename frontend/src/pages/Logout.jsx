import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Logout() {

    const navigate = useNavigate();
    const [logoutErr, setLogoutErr] = useState({})

    useEffect(() => {
        axios.post('/api/v1/user/logout')
        .then((res) => {
            console.log(res)
            localStorage.setItem("token", "")
            localStorage.setItem("user", "")
            navigate('/login')
        })
        .catch((err) => {
            console.log(err)
            setLogoutErr(err?.response?.data)
        })
    }, [])


    return (
        <div className="flex flex-wrap justify-center items-center h-90">
            <h1 className="text-3xl text-red-600">
                { 
                    logoutErr?.message ? logoutErr?.message : null
                }
            </h1>
        </div>
    )
}