
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ShieldCheck,
  Phone,
  MapPin,
  Home,
  ArrowRight,
} from "lucide-react";

import "./AuthForm.css";

const AuthForm = ({
  title,
  subtitle,
  fields = [],
  buttonText = "Continue",
  onSubmit,
  footer,
  schema,
}) => {
  const [showPassword, setShowPassword] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: schema ? yupResolver(schema) : undefined,
    mode: "onTouched",
  });

  const togglePassword = (fieldName) => {
    setShowPassword((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  const submitHandler = async (data) => {
    if (onSubmit) {
      await onSubmit(data);
    }
  };

  // Icons لكل نوع input
  const getFieldIcon = (field) => {
    if (field.icon) {
      return field.icon;
    }

    switch (field.name) {
      case "email":
        return Mail;

      case "password":
      case "confirmPassword":
        return Lock;

      case "name":
        return User;

      case "phone":
      case "secondaryPhone":
        return Phone;

      case "city":
      case "area":
        return MapPin;

      case "street":
        return Home;

      case "verificationCode":
        return ShieldCheck;

      default:
        return User;
    }
  };

  return (
    <div className="auth-container">

      {/* ================= HEADER ================= */}

      <div className="auth-header">

        <div className="auth-logo">
          <span>SH</span>
        </div>

        <h1>{title}</h1>

        {subtitle && (
          <p>{subtitle}</p>
        )}

      </div>


      {/* ================= FORM ================= */}

      <form
        className="auth-form"
        onSubmit={handleSubmit(submitHandler)}
        noValidate
      >

        {fields.map((field) => {
          const isPassword =
            field.type === "password";

          const Icon = getFieldIcon(field);

          const hasError =
            Boolean(errors[field.name]);

          return (
            <div
              className={`auth-field ${
                hasError ? "has-error" : ""
              }`}
              key={field.name}
            >

              {/* Label */}

              <label htmlFor={field.name}>
                {field.label}
              </label>


              {/* Input */}

              <div className="auth-input-wrapper">

                <Icon
                  size={19}
                  strokeWidth={1.8}
                  className="auth-input-icon"
                />


                <input
                  id={field.name}
                  name={field.name}
                  type={
                    isPassword &&
                    showPassword[field.name]
                      ? "text"
                      : field.type || "text"
                  }
                  placeholder={
                    field.placeholder || ""
                  }
                  autoComplete={
                    field.autoComplete
                  }

                  {...register(field.name)}
                />


                {/* Password Toggle */}

                {isPassword && (
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      togglePassword(field.name)
                    }
                    tabIndex={-1}
                  >
                    {showPassword[field.name] ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                )}

              </div>


              {/* Error */}

              {hasError && (
                <span className="auth-error">
                  {errors[field.name]?.message}
                </span>
              )}

            </div>
          );
        })}


        {/* ================= SUBMIT ================= */}

        <button
          type="submit"
          className="auth-submit"
          disabled={isSubmitting}
        >

          {isSubmitting ? (
            <>
              <span className="auth-spinner" />

              Processing...
            </>
          ) : (
            <>
              <span>
                {buttonText}
              </span>

              <span className="submit-icon">
                <ArrowRight size={19} />
              </span>
            </>
          )}

        </button>

      </form>


      {/* ================= FOOTER ================= */}

      {footer && (
        <div className="auth-footer">
          {footer}
        </div>
      )}


      {/* ================= SECURITY ================= */}

      <div className="auth-security">

        <ShieldCheck size={15} />

        <span>
          Your information is secure
        </span>

      </div>

    </div>
  );
};

export default AuthForm;