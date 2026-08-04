
import * as yup from "yup";

export const emailSchema = yup
  .string()
  .required("Email is required")
  .email("Please enter a valid email address")
  .trim();

export const passwordSchema = yup
  .string()
  .required("Password is required")
  .min(6, "Password must be at least 8 characters")
  // .matches(
  //   /[A-Z]/,
  //   "Password must contain at least one uppercase letter"
  // )
  // .matches(
  //   /[a-z]/,
  //   "Password must contain at least one lowercase letter"
  // )
  // .matches(
  //   /[0-9]/,
  //   "Password must contain at least one number"
  // );

export const loginSchema = yup.object({
  email: emailSchema,

  password: passwordSchema,
});

export const registerSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters")
    .trim(),

  email: emailSchema,

  password: passwordSchema,

  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf(
      [yup.ref("password")],
      "Passwords do not match"
    ),

  phone: yup
    .string()
    .required("Phone number is required")
    .matches(
      /^[0-9+\-\s()]{8,20}$/,
      "Please enter a valid phone number"
    ),

  secondaryPhone: yup
    .string()
    .nullable()
    .matches(
      /^[0-9+\-\s()]{8,20}$/,
      "Please enter a valid phone number"
    ),

  city: yup
    .string()
    .required("City is required")
    .min(2, "City name is too short"),

  area: yup
    .string()
    .required("Area is required"),

  street: yup
    .string()
    .required("Street is required")
    .min(3, "Street address is too short"),
});

export const forgetPasswordSchema = yup.object({
  email: emailSchema,
});

export const verifySchema = yup.object({
  email: emailSchema,

  verificationCode: yup
    .string()
    .required("Verification code is required")
    .matches(
      /^[0-9]{6}$/,
      "Verification code must be 6 digits"
    ),
});

export const resetPasswordSchema = yup.object({
  email: emailSchema,

  verificationCode: yup
    .string()
    .required("Verification code is required")
    .matches(
      /^[0-9]{6}$/,
      "Verification code must be 6 digits"
    ),

  password: passwordSchema,

  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf(
      [yup.ref("password")],
      "Passwords do not match"
    ),
});