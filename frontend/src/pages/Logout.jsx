import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { logout as logoutUser} from "../store/AuthSlice";


export default function Logout() {

    const navigate = useNavigate();
    const [logoutErr, setLogoutErr] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        axios.post('/api/v1/user/logout')
        .then((res) => {
            dispatch(logoutUser())
            navigate('/login')
        })
        .catch((err) => {
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