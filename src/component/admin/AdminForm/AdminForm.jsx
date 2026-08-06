import './AdminForm.css'
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeOff, Upload, X } from "lucide-react";

const AdminForm = ({
  title,
  subtitle,
  schema,
  fields = [],
  defaultValues = {},
  onSubmit,
  submitText = "Save",
  loading = false,
}) => {
  
  const [showPassword, setShowPassword] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: schema ? yupResolver(schema) : undefined,
    defaultValues,
  });
  useEffect(() => {
    reset(defaultValues)
  },[])

  // ================================
  // Password Toggle
  // ================================

  const togglePassword = (name) => {
    setShowPassword((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };


  // ================================
  // Submit
  // ================================

  const submitHandler = async (data) => {
    if (onSubmit) {
      await onSubmit(data);
    }
  };

  return (
    <div className="admin-form-card">

      {/* ============================ */}
      {/* Header */}
      {/* ============================ */}

      <div className="admin-form-header">

        <div>
          <h2>{title}</h2>

          {subtitle && (
            <p>{subtitle}</p>
          )}
        </div>

      </div>


      {/* ============================ */}
      {/* Form */}
      {/* ============================ */}

      <form
        onSubmit={handleSubmit(submitHandler)}
        noValidate
      >

        <div className="row g-4">
          {fields.map((field) => {
            const error = errors[field.name];
            const isPassword =field.type === "password";
            const isTextarea = field.type === "textarea";
            const isSelect = field.type === "select";
            const isFile = field.type === "file";

            return (
              <div
                key={field.name}
                className={ field.col || "col-12"  }
              >
                {/* ======================== */}
                {/* Label */}
                {/* ======================== */}

                {field.label && (
                  <label
                    htmlFor={field.name}
                    className="admin-form-label"
                  >
                    {field.label}
                    {field.required && (
                      <span className="text-danger ms-1">
                        *
                      </span>
                    )}
                  </label>
                )}


                {/* ======================== */}
                {/* Textarea */}
                {/* ======================== */}

                {isTextarea && (
                  <textarea
                    id={field.name}
                    rows={field.rows || 5}
                    placeholder={
                      field.placeholder || ""
                    }
                    className={`admin-form-control ${
                      error ? "error" : ""
                    }`}
                    {...register(field.name)}
                  />
                )}

                {/* ======================== */}
                {/* Select */}
                {/* ======================== */}


                  {isSelect && (
                    <select
                      id={field.name}
                      className={`admin-form-control ${
                        error ? "error" : ""
                      }`}
                      {...register(field.name)}
                    >
                      <option value="">
                        {field.placeholder || `Select ${field.label}`}
                      </option>

                      {field.options?.map((option) => (
                        <option
                          key={option.value}
                          value={String(option.value)}
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )}



                {/* ======================== */}
                {/* File */}
                {/* ======================== */}

                {isFile && (
                  <div className="admin-file-wrapper">

                    <label
                      htmlFor={field.name}
                      className={`admin-file-box ${
                        error ? "error" : ""
                      }`}
                    >

                      <Upload size={22} />

                      <span>
                        {field.placeholder ||
                          "Choose file"}
                      </span>

                      <small>
                        {field.accept ||
                          "Upload a file"}
                      </small>

                    </label>

                    <input
                      id={field.name}
                      type="file"
                      className="d-none"
                      accept={field.accept}
                      {...register(field.name)}
                    />

                  </div>
                )}


                {/* ======================== */}
                {/* Password */}
                {/* ======================== */}

                {isPassword && (
                  <div className="position-relative">

                    <input
                      id={field.name}
                      type={
                        showPassword[field.name]
                          ? "text"
                          : "password"
                      }
                      placeholder={
                        field.placeholder || ""
                      }
                      autoComplete={
                        field.autoComplete
                      }
                      className={`admin-form-control ${
                        error ? "error" : ""
                      }`}
                      {...register(field.name)}
                    />

                    <button
                      type="button"
                      className="admin-password-toggle"
                      onClick={() =>
                        togglePassword(field.name)
                      }
                    >

                      {showPassword[
                        field.name
                      ] ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}

                    </button>

                  </div>
                )}


                {/* ======================== */}
                {/* Normal Input */}
                {/* ======================== */}

                {!isTextarea &&
                  !isSelect &&
                  !isFile &&
                  !isPassword && (
                    <input
                      id={field.name}
                      type={
                        field.type || "text"
                      }
                      placeholder={
                        field.placeholder || ""
                      }
                      autoComplete={
                        field.autoComplete
                      }
                      className={`admin-form-control ${
                        error ? "error" : ""
                      }`}
                      {...register(field.name)}
                    />
                  )}


                {/* ======================== */}
                {/* Error */}
                {/* ======================== */}

                {error && (
                  <div className="admin-form-error">
                    {error.message}
                  </div>
                )}

              </div>
            );
          })}

        </div>


        {/* ============================ */}
        {/* Actions */}
        {/* ============================ */}

        <div className="admin-form-actions">

          <button
            type="button"
            className="admin-form-cancel"
            onClick={() => reset(defaultValues)}
            disabled={loading}
          >
            Cancel
          </button>


          <button
            type="submit"
            className="admin-form-submit"
            disabled={loading}
          >

            {loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm"
                />

                Saving...
              </>
            ) : (
              submitText
            )}

          </button>

        </div>

      </form>

    </div>
  );
};

export default AdminForm;
