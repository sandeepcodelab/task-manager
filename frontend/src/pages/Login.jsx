import Container from "../components/Container/Container";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router";

function Login() {

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

                <form className="space-y-5">

                    <InputField type="email" placeholder="you@example.com" label="Email" />
                    <InputField type="password" placeholder="••••••••" label="Password" />

                    <div className="flex justify-end">
                        <a href="/forgot-password" className="text-sm text-blue-400 hover:underline">
                        Forgot Password?
                        </a>
                    </div>

                    <Button
                    type="submit"
                    text="Login"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-xl font-semibold hover:shadow-[0_0_15px_rgba(59,130,246,0.7)] transition cursor-pointer"
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
