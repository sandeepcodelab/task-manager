import { useLocation, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";


export default function ProtectedRoute({children, authentication = true}){

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if(authentication && authentication !== isAuthenticated){
            navigate("/login", { state: { from: location }, replace: true })
        }
        else if(!authentication && authentication !== isAuthenticated){
            navigate(location.state?.from?.pathname || "/dashboard", {replace: true})
        }

    }, [authentication, isAuthenticated, navigate])

    return children;

}