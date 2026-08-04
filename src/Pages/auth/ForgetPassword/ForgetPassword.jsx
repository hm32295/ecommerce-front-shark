
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../../../component/Auth/AuthForm";
import { forgetPasswordSchema } from "../../../validation/auth.schema";
import { useAuth } from "../../../context/AuthContext";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const { forgetPassword } = useAuth();
  // ===================================== // Forget Password // ===================================== 
  const handleForgetPassword = async (data) => {
    try {
      const forgetPasswordData = { email: data.email };
      const response = await forgetPassword(forgetPasswordData);
      console.log("Forget password response:", response);
      navigate("/auth/reset");
    } catch (error) {
      console.log("Forget password error:", error); 
      
    }
  };
  return (
    <AuthForm
      title="Forgot your password?"
      subtitle="Enter your email and we'll send you a verification code."
      buttonText="Send Code"
      schema={forgetPasswordSchema}
      onSubmit={handleForgetPassword}
      fields={[
        {
          name: "email",
          label: "Email address",
          type: "email",
          placeholder: "name@example.com",
          autoComplete: "email",
        },
      ]}
      footer={
        <div>
          Remember your password?{" "}
          <Link to="/auth/login">
            Back to login
          </Link>
        </div>
      }
    />
  );
};

export default ForgetPassword;
