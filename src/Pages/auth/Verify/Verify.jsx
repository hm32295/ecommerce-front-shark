
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { verifySchema } from "../../../validation/auth.schema";
import AuthForm from "../../../component/Auth/AuthForm";


const Verify = () => {
  const navigate = useNavigate();

  const { verify,resend } = useAuth();

  const [resending, setResending] = useState(false);
  const [resendMessage, setResendMessage] = useState("");


  // =====================================
  // Verify Account
  // =====================================

  const handleVerify = async (data) => {

    try {
      const response = await verify({
        email: data.email,
        verificationCode: data.verificationCode,
      });

      console.log("Verification successful:", response);

      navigate("/auth/login");

    } catch (error) {
      console.log(
        "Verification error:",
        error
      );
    }
  };
  const handleResendCode = async () => {
    const email = JSON.parse(localStorage.getItem('email'))
    try {
      setResendMessage("");
       await resend({email});
      setResendMessage(
        "A new verification code has been sent."
      );
    } catch (error) {
      console.log(
        "Resend code error:",
        error
      );
      setResendMessage(
        error.response?.data?.message ||
          "Failed to resend verification code."
      );

    } finally {
      setResending(false);
    }
  };


  return (
    <AuthForm
      title="Verify your account"

      subtitle="Enter the verification code sent to your email."

      buttonText="Verify Code"

      schema={verifySchema}

      onSubmit={handleVerify}

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
          placeholder: "Enter your 6-digit code",
          autoComplete: "one-time-code",
        },
      ]}

      footer={
        <div>

          {/* ============================= */}
          {/* Resend */}
          {/* ============================= */}

          <div>
            Didn't receive the code?{" "}

            <button
              type="button"
              onClick={handleResendCode}
              disabled={resending}
              className="border-0 bg-transparent p-0 fw-bold"
            >
              {resending
                ? "Sending..."
                : "Resend code"}
            </button>
          </div>


          {/* ============================= */}
          {/* Resend Message */}
          {/* ============================= */}

          {resendMessage && (
            <div className="small mt-2">
              {resendMessage}
            </div>
          )}


          {/* ============================= */}
          {/* Back To Login */}
          {/* ============================= */}

          <div className="mt-3">
            <Link to="/auth/login">
              Back to login
            </Link>
          </div>

        </div>
      }
    />
  );
};

export default Verify;
