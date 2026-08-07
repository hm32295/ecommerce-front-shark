
import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="error-page">

      <div className="error-card">

        <div className="error-code">
          404
        </div>

        <div className="error-icon">
          !
        </div>

        <h1>Page Not Found</h1>

        <p>
          Sorry, the page you are looking for doesn't exist
          or may have been moved.
        </p>

        <div className="error-actions">

          <button
            type="button"
            className="error-back-btn"
            onClick={handleGoBack}
          >
            ← Go Back
          </button>

          <button
            type="button"
            className="error-home-btn"
            onClick={handleGoHome}
          >
            Go Home
          </button>

        </div>

      </div>

    </div>
  );
};

export default ErrorPage;
