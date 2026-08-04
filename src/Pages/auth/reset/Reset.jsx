
import { Link, useNavigate } from "react-router-dom";
import { resetPasswordSchema } from "../../../validation/auth.schema";
import AuthForm from "../../../component/Auth/AuthForm";
import { useAuth } from "../../../context/AuthContext";

const Reset = () => {
  const navigate = useNavigate();

  const { resetPassword, } = useAuth();
  // ===================================== // Reset Password // ===================================== 
  const handleResetPassword = async (data) => {
    try {
      const resetData = {
        email: data.email, verificationCode: data.verificationCode,
        newPassword: data.password,
      };
      const response = await resetPassword(resetData);
      console.log("Reset password response:", response);
      navigate("/auth/login");
    } catch (error) {
      console.log("Reset password error:", error); 
      
    }
  };

  return (
    <AuthForm
      title="Create new password"
      subtitle="Choose a strong password for your account."
      buttonText="Reset Password"
      schema={resetPasswordSchema}
      onSubmit={handleResetPassword}
      fields={[
        {
          name: "email",
          label: "Email address",
          type: "email",
          placeholder: "name@example.com",
          autoComplete: "email",
        },

        {
          name: "verificationCode",
          label: "Verification code",
          type: "text",
          placeholder: "Enter your verification code",
          autoComplete: "one-time-code",
        },

        {
          name: "password",
          label: "New password",
          type: "password",
          placeholder: "Create a new password",
          autoComplete: "new-password",
        },

        {
          name: "confirmPassword",
          label: "Confirm new password",
          type: "password",
          placeholder: "Confirm your new password",
          autoComplete: "new-password",
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

export default Reset;