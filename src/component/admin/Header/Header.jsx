import './Header.css'
import { ArrowLeft, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = ({
  title,
  subtitle,
  back = true,
  backText = "Back",
  addButton = false,
  addText = "Add",
  addPath,
  onAdd,
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleAdd = () => {
    if (onAdd) {
      onAdd();
      return;
    }

    if (addPath) {
      navigate(addPath);
    }
  };

  return (
    <div className="admin-page-header">

      {/* ============================= */}
      {/* Left */}
      {/* ============================= */}

      <div className="admin-page-header-left">

        {/* Back Button */}

        {back && (
          <button
            type="button"
            onClick={handleBack}
            className="admin-back-btn"
            aria-label="Go back"
          >
            <ArrowLeft size={18} />

            <span className="d-none d-sm-inline">
              {backText}
            </span>
          </button>
        )}


        {/* Title */}

        <div className="admin-page-title">

          <h1>
            {title}
          </h1>

          {subtitle && (
            <p>
              {subtitle}
            </p>
          )}

        </div>

      </div>


      {/* ============================= */}
      {/* Add Button */}
      {/* ============================= */}

      {addButton && (
        <button
          type="button"
          onClick={handleAdd}
          className="admin-add-btn"
        >
          <Plus size={19} strokeWidth={2.5} />

          <span>
            {addText}
          </span>
        </button>
      )}

    </div>
  );
};

export default Header;
