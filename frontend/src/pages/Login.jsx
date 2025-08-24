import Container from "../components/Container/Container";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router";
import { useState } from "react";
import axios from "axios";

function Login() {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[errors, setErrors] = useState({});
    const[loading, setLoading] = useState(false);
    const[apiResponse, setApiResponse] = useState({});
    const[apiError, setApiError] = useState({});

    const validate = () => {

        let formErrors = {};
        const regEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
        
        if(!email){
            formErrors.email = "Email is required";
        }
        if(email){
            if(!regEmail.test(email)){
                formErrors.email = "Invalid email id";
            }
        }
        if(!password){
            formErrors.password = "Password is required";
        }

        return formErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        setApiResponse({});
        setApiError({});

        const formValidation = validate()
        setErrors(formValidation)

        if(Object.keys(formValidation).length > 0) return;

        setLoading(true)

        axios.post('/api/v1/user/login', {
            email,
            password
        })
        .then((response) => {
            setApiResponse(response);
        })
        .catch((err) => {
            setApiError(err.response)
        })
        .finally(() => {
            setLoading(false)
        })
    }

  return (
    
    <Container>
        <div className="flex items-center justify-center min-h-screen">
            <div className="backdrop-blur-xl bg-gray-800/50 shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-700/50">
                <h2 className="text-2xl font-extrabold text-center text-white mb-4 tracking-wide">
                    Login
                </h2>
                <p className="text-gray-400 text-center mb-4 text-sm">
                    Enter your credentials to access your account
                </p>
                
                {
                    (apiError?.data?.message) ? <p className="text-red-500 text-center font-bold pb-2">{apiError?.data?.message}</p> : null
                }
                {
                    (apiResponse?.data?.message) ? <p className="text-green-500 text-center font-bold pb-2">{apiResponse?.data?.message}</p> : null
                }

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <InputField 
                            type="email" 
                            placeholder="Enter your email" 
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        {
                            errors.email ? <span className="text-red-500 text-sm">{errors.email}</span> : null
                        }
                    </div>  
                    <div>  
                        <InputField 
                            type="password" 
                            placeholder="Enter your password" 
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        {
                            errors.password ? <span className="text-red-500 text-sm">{errors.password}</span> : null
                        }
                    </div>
                    <div className="flex justify-end">
                        <a href="/forgot-password" className="text-sm text-blue-400 hover:underline">
                        Forgot Password?
                        </a>
                    </div>

                    <Button
                    type="submit"
                    className={`w-full text-white py-3 rounded-xl font-semibold hover:shadow-[0_0_15px_rgba(59,130,246,0.7)] transition ${loading ? 'bg-gradient-to-r from-blue-500 to-blue-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-blue-500 cursor-pointer'}`}
                    disabled={loading}
                    text={
                        loading ? (
                            <div className="flex items-center justify-center gap-2">
                                <svg
                                    className="animate-spin h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                    ></path>
                                </svg>
                                Login
                            </div>
                        ) : (
                            "Login"
                        )
                    }
                    />

                </form>

                <p className="text-sm text-gray-400 text-center mt-6">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-blue-400 hover:underline font-medium">
                        Sign up
                    </Link>
                </p>

            </div>
        </div>
    </Container>
    
  );
}

export default Login;
