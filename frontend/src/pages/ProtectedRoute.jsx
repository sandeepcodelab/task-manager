import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function ProtectedRoute({children}){

    const navigate = useNavigate();

    const storedUser = localStorage.getItem("user")
    const user = storedUser ? JSON.parse(storedUser) : null;
    const [loder, setLoader] = useState(true);

    useEffect(() => {
        if(!user){
            navigate("/login")
        }
        else if(user){
            navigate("/dashboard")
        }
        setLoader(false)

    }, [user])

    return loder ? (<h1 className="text-3xl text-white font-bold mt-4">Loading...</h1>) : (children);

}