
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../../../validation/auth.schema";
import AuthForm from "../../../component/Auth/AuthForm";
import { useAuth } from "../../../context/AuthContext";

const Login = () => {
  const navigate= useNavigate()

  const { login } = useAuth();
  const handleLogin = async (data) => {
    try {
      await login({ email: data.email, password: data.password, });
      navigate("/");
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  return (
    <AuthForm
      title="Welcome back"
      subtitle="Enter your details to access your account."
      buttonText="Sign in"
      schema={loginSchema}
      onSubmit={handleLogin}
      fields={[
        {
          name: "email",
          label: "Email address",
          type: "email",
          placeholder: "name@example.com",
          autoComplete: "email",
        },

        {
          name: "password",
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
          autoComplete: "current-password",
        },
      ]}
      footer={
        <>
          <div className="mb-3">
            <Link to="/auth/forget_password">
              Forgot your password?
            </Link>
          </div>

          <div>
            Don't have an account?{" "}
            <Link to="/auth/register">
              Create account
            </Link>
          </div>
        </>
      }
    />
  );
};

export default Login;
