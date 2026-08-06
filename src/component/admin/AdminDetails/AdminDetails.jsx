
import {
  ArrowLeft,
  Info,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./AdminDetails.css";

const AdminDetails = ({
  title = "Details",
  subtitle = "",
  data = [],
  loading = false,
  actions = [],
  backPath = -1,
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(backPath);
  };

  const handleAction = (action, item) => {
    if (action.onClick) {
      action.onClick(item);
    }

    if (action.path) {
      navigate(
        typeof action.path === "function"
          ? action.path(item)
          : action.path
      );
    }
  };

  if (loading) {
    return (
      <div className="admin-details-page">
        <div className="admin-details-loading">
          <div className="spinner-border" />
          <p>Loading details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-details-page">

      {/* Header */}
      <div className="admin-details-header">

        <div className="admin-details-heading">

          <button
            type="button"
            className="admin-details-back"
            onClick={handleBack}
          >
            <ArrowLeft size={18} />
          </button>

          <div>
            <h2>{title}</h2>

            {subtitle && (
              <p>{subtitle}</p>
            )}
          </div>

        </div>

        {/* Actions */}
        {actions.length > 0 && (
          <div className="admin-details-actions">

            {actions.map((action) => {
              const Icon = action.icon;

              return (
                <button
                  key={action.name}
                  type="button"
                  className={`admin-details-action ${
                    action.variant || ""
                  }`}
                  onClick={() => handleAction(action)}
                >
                  {Icon && <Icon size={17} />}
                  {action.label}
                </button>
              );
            })}

          </div>
        )}

      </div>

      {/* Details Card */}
      <div className="admin-details-card">

        <div className="admin-details-card-title">

          <div className="admin-details-icon">
            <Info size={18} />
          </div>

          <div>
            <h3>Information</h3>
            <span>
              Complete information
            </span>
          </div>

        </div>

        <div className="admin-details-grid">

          {data.map((item, index) => (

            <div
              className={
                item.className ||
                "admin-detail-item"
              }
              key={
                item.key ||
                `${item.label}-${index}`
              }
            >

              <span className="admin-detail-label">
                {item.label}
              </span>

              <div className="admin-detail-value">

                {/* Image */}

                {item.type === "image" ? (

                  item.value ? (

                    <img
                      src={item.value}
                      alt={item.alt || item.label}
                      className="admin-detail-image"
                    />

                  ) : (

                    <span className="text-muted">
                      No image
                    </span>

                  )

                ) : (

                  item.render
                    ? item.render(item.value)
                    : item.value ?? "—"

                )}

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default AdminDetails;

