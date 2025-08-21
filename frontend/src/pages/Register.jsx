import Container from "../components/Container/Container";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router";

function Register() {
  
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

          <form className="space-y-5">

            <InputField type="text" placeholder="John Deo" label="Name"/>
            <InputField type="email" placeholder="you@example.com" label="Email"/>
            <InputField type="password" placeholder="••••••••" label="Password"/>

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
