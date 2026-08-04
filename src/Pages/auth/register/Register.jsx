
import { Link, useNavigate } from "react-router-dom";
import { registerSchema } from "../../../validation/auth.schema";
import AuthForm from "../../../component/Auth/AuthForm";
import { useAuth } from "../../../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();

  const { register } = useAuth();
  const handleRegister = async (data) => {
    localStorage.setItem('email' , JSON.stringify(data.email))
    try {
      const registerData = {
        name: data.name, email: data.email, password: data.password,
        phone: data.phone, secondaryPhone: data.secondaryPhone || undefined,
        adress: { city: data.city, area: data.area, street: data.street, },
      };
      await register(registerData);
      navigate("/auth/verify");
    } catch (error) {
      console.log("Register error:", error);
    }
   
  };

  return (
    <AuthForm
      title="Create your account"
      subtitle="Join us and start shopping today."
      buttonText="Create account"
      schema={registerSchema}
      onSubmit={handleRegister}
      fields={[
        {
          name: "name",
          label: "Full name",
          type: "text",
          placeholder: "Enter your full name",
          autoComplete: "name",
        },

        {
          name: "email",
          label: "Email address",
          type: "email",
          placeholder: "name@example.com",
          autoComplete: "email",
        },

        {
          name: "phone",
          label: "Phone number",
          type: "tel",
          placeholder: "Enter your phone number",
          autoComplete: "tel",
        },

        {
          name: "secondaryPhone",
          label: "Secondary phone",
          type: "tel",
          placeholder: "Optional phone number",
          autoComplete: "tel",
        },

        {
          name: "password",
          label: "Password",
          type: "password",
          placeholder: "Create a strong password",
          autoComplete: "new-password",
        },

        {
          name: "confirmPassword",
          label: "Confirm password",
          type: "password",
          placeholder: "Confirm your password",
          autoComplete: "new-password",
        },

        {
          name: "city",
          label: "City",
          type: "text",
          placeholder: "Enter your city",
          autoComplete: "address-level2",
        },

        {
          name: "area",
          label: "Area",
          type: "text",
          placeholder: "Enter your area",
          autoComplete: "address-level3",
        },

        {
          name: "street",
          label: "Street address",
          type: "text",
          placeholder: "Enter your street",
          autoComplete: "street-address",
        },
      ]}
      footer={
        <>
          <div>
            Already have an account?{" "}
            <Link to="/auth/login">
              Sign in
            </Link>
          </div>
        </>
      }
    />
  );
};

export default Register;