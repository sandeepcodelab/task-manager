import Container from "../components/Container/Container";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router";
import { useState } from "react";
import axios from "axios";

function Register() {

  const[name, setName] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[confirmPassword, setConfirmPassword] = useState("")
  const[errors, setErrors] = useState({})
  const[apiRes, setApiRes] = useState({})
  const[apiErr, setApiErr] = useState({})
  const[loader, setLoader] = useState(false)


  const validate = () => {

    let formErrors = {};
    const regEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;

    if(!name){
      formErrors.name = "Name is required";
    }
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
    if(!confirmPassword){
      formErrors.conPass = "Confirm Password is required";
    }
    if(password !== confirmPassword){
      formErrors.conPass = "Confirm Password does not match";
    }

    return formErrors;
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    setApiErr({})
    setApiRes({})
    
    const formValidation = validate();
    setErrors(formValidation)
    
    if(Object.keys(formValidation).length > 0) return;

    axios.post("/api/v1/user/register",{
      name,
      email,
      password
    })
    .then((response) => {
      setApiRes(response)
    })
    .catch((err) => {
      setApiErr(err.response)
    })
  }

  return (

    <Container>
      <div className="flex items-center justify-center min-h-screen">
        <div className="backdrop-blur-xl bg-gray-800/50 shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-700/50">
          <h2 className="text-2xl font-extrabold text-center text-white mb-4 tracking-wide">
            Create Account
          </h2>
          <p className="text-gray-400 text-center mb-4 text-sm">
            Join us and start your journey today
          </p>

          {
            // console.log(apiErr.data)
            (apiErr?.data?.message) ? <p className="text-red-500 text-center font-bold pb-2">{apiErr?.data?.message}</p> : null
          }
          {/* {
            console.log(apiRes.data)
            (apiRes?.data?.message) ? <p className="text-green-500 text-center font-bold pb-2">{apiRes?.data?.message}</p> : null
          } */}

          <form className="space-y-5" onSubmit={handleSubmit}>

            <div>
              <InputField 
                type="text" 
                placeholder="Enter your name" 
                label="Name"
                onChange={(e) => setName(e.target.value)}
              />
            
              {
                errors.name ? <span className="text-red-500 text-sm">{errors.name}</span> : null
              }
            </div>
            <div>
              <InputField 
                type="email" 
                placeholder="Enter your email" 
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                />
                
                {
                  errors.email ? <span className="text-red-500 text-sm">{errors.email}</span> : null
                }
            </div>
            <div>
              <InputField 
                type="password" 
                placeholder="Enter password" 
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {
                errors.password ? <span className="text-red-500 text-sm">{errors.password}</span> : null
              }
            </div>
            <div>
              <InputField 
                type="password" 
                placeholder="Enter confirm password" 
                label="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {
                errors.conPass ? <span className="text-red-500 text-sm">{errors.conPass}</span> : null
              }
            </div>

            <Button
              type="submit"
              text="Sign up"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-xl font-semibold hover:shadow-[0_0_15px_rgba(59,130,246,0.7)] transition cursor-pointer"
            />

          </form>

          <p className="text-sm text-gray-400 text-center mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:underline font-medium">
              Login
            </Link>
          </p>

        </div>
      </div>
    </Container>
    
  );
}

export default Register;
