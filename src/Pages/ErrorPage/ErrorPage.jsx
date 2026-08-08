
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home, AlertTriangle } from "lucide-react";

import "./ErrorPage.css";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error-page">

      <div className="error-container">

        {/* Error Icon */}
        <div className="error-icon">
          <AlertTriangle size={42} />
        </div>

        {/* Error Number */}
        <h1 className="error-code">
          404
        </h1>

        {/* Title */}
        <h2 className="error-title">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="error-description">
          Sorry, the page you are looking for doesn't exist
          or may have been moved to another location.
        </p>

        {/* Actions */}
        <div className="error-actions">

          <button
            className="error-back-btn"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <button
            className="error-home-btn"
            onClick={() => navigate("/")}
          >
            <Home size={18} />
            Go Home
          </button>

        </div>

        {/* Small message */}
        <span className="error-help">
          If you think this is a mistake, please try again.
        </span>

      </div>

    </div>
  );
};

export default ErrorPage;

