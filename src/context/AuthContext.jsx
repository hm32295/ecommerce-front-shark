
import {
  createContext,
  useContext,
  useState,
} from "react";

import {
  forgetPasswordUser,
//   getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
  resendVerificationCode,
  resetPasswordUser,
  verifyUser,
} from "../api/auth.api";


// ======================================
// Create Context
// ======================================

const AuthContext = createContext(null);


// ======================================
// Provider
// ======================================

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);


 
  const login = async (data) => {

    try {

      setLoading(true);
      setError(null);

      const response = await loginUser(data);

      setUser(response.data.user);

      return response.data;

    } catch (error) {

      const message =
        error.response?.data?.message ||
        "Login failed";

      setError(message);

      throw error;

    } finally {

      setLoading(false);

    }
  };


  const register = async (data) => {

    try {

      setLoading(true);
      setError(null);

      const response = await registerUser(data);

      return response.data;

    } catch (error) {

      const message =
        error.response?.data?.message ||
        "Registration failed";

      setError(message);

      throw error;

    } finally {

      setLoading(false);

    }
  };

  const logout = async () => {

    try {

      setLoading(true);

      await logoutUser();
      localStorage.removeItem('token')
      setUser(null);

    } catch (error) {

      console.log(
        "Logout error:",
        error
      );

    } finally {

      setLoading(false);

    }
  };
  const forgetPassword = async (data) => {

    try {

      setLoading(true);

      await forgetPasswordUser(data);

      setUser(null);

    } catch (error) {

      console.log(
        "forget Password error:",
        error
      );

    } finally {

      setLoading(false);

    }
  };

  const verify = async (data) => {

    try {

      setLoading(true);

      await verifyUser(data);

      setUser(null);

    } catch (error) {

      console.log(
        "verify error:",
        error
      );

    } finally {

      setLoading(false);

    }
  };
  const resend = async (data) => {

    try {

      setLoading(true);

      await resendVerificationCode(data);

      setUser(null);

    } catch (error) {

      console.log(
        "resend Verification Code error:",
        error
      );

    } finally {

      setLoading(false);

    }
  };
  const resetPassword = async (data) => {

    try {

      setLoading(true);

      await resetPasswordUser(data);

      setUser(null);

    } catch (error) {

      console.log(
        "resend Verification Code error:",
        error
      );

    } finally {

      setLoading(false);

    }
  };


  // ======================================
  // Check Authentication
  // ======================================

//   useEffect(() => {

//     getUser();

//   }, []);


  return (
    <AuthContext.Provider
      value={{
        user,
        forgetPassword,
        loading,
        error,
        resetPassword,
        verify,
        resend,
        login,
        register,
        logout,

        isAuthenticated: Boolean(user),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};



export const useAuth = () => {

  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
};