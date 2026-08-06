
import "./AdminData.css";
import { useState } from "react";
import {
  Search,
  RotateCcw,
  SlidersHorizontal,
  Eye,
  Pencil,
  Trash2,
  Lock,
  Unlock,
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminDataPage = ({
  filters = [],
  data = [],
  loading = false,
  columns = [],
  actions = [],
  emptyMessage = "No data found",
  onFilter,
}) => {

  const createInitialFilters = () => {
    const initial = {};

    filters.forEach((filter) => {
      initial[filter.name] = "";
    });

    return initial;
  };

  const [filterValues, setFilterValues] = useState(
    createInitialFilters
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilterValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFilter = () => {
    onFilter?.(filterValues);
  };

  const handleReset = () => {
    const emptyFilters = createInitialFilters();

    setFilterValues(emptyFilters);

    onFilter?.(emptyFilters);
  };

  // =========================================
  // Normal Action Icons
  // =========================================

  const actionIcons = {
    show: <Eye size={17} />,
    edit: <Pencil size={17} />,
    delete: <Trash2 size={17} />,
  };

  return (
    <div className="admin-data-page">

      {/* ================================= */}
      {/* Filters */}
      {/* ================================= */}

      {filters.length > 0 && (
        <div className="admin-filter-card">

          <div className="admin-filter-title">

            <div className="admin-filter-title-icon">
              <SlidersHorizontal size={17} />
            </div>

            <div>
              <h3>Filters</h3>

              <span>
                Filter results using the fields below
              </span>
            </div>

          </div>

          <div className="row g-3">

            {filters.map((filter) => (

              <div
                key={filter.name}
                className={
                  filter.col ||
                  "col-12 col-md-6 col-lg-3"
                }
              >

                <label className="admin-filter-label">
                  {filter.label}
                </label>

                {filter.type === "select" ? (

                  <select
                    name={filter.name}
                    value={
                      filterValues[filter.name] || ""
                    }
                    onChange={handleChange}
                    className="admin-filter-input"
                  >

                    <option value="">
                      {filter.placeholder ||
                        `All ${filter.label}`}
                    </option>

                    {filter.options?.map((option) => (

                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>

                    ))}

                  </select>

                ) : (

                  <input
                    type={filter.type || "text"}
                    name={filter.name}
                    value={
                      filterValues[filter.name] || ""
                    }
                    onChange={handleChange}
                    placeholder={
                      filter.placeholder || ""
                    }
                    className="admin-filter-input"
                  />

                )}

              </div>

            ))}

            {/* Buttons */}

            <div className="col-12">

              <div className="admin-filter-actions">

                <button
                  type="button"
                  className="admin-filter-reset"
                  onClick={handleReset}
                >
                  <RotateCcw size={16} />
                  Reset
                </button>

                <button
                  type="button"
                  className="admin-filter-submit"
                  onClick={handleFilter}
                >
                  <Search size={17} />
                  Search
                </button>

              </div>

            </div>

          </div>
        </div>
      )}

      {/* ================================= */}
      {/* Data Table */}
      {/* ================================= */}

      <div className="admin-table-card">

        <div className="admin-table-wrapper">

          <table className="admin-table">

            <thead>

              <tr>

                <th>#</th>

                {columns.map((column) => (

                  <th key={column.key}>
                    {column.label}
                  </th>

                ))}

                {actions.length > 0 && (
                  <th className="text-center">
                    Actions
                  </th>
                )}

              </tr>

            </thead>

            <tbody>

              {loading ? (

                <tr>

                  <td
                    colSpan={
                      columns.length +
                      1 +
                      (actions.length > 0 ? 1 : 0)
                    }
                    className="admin-table-loading"
                  >

                    <div
                      className="spinner-border spinner-border-sm"
                    />

                    Loading...

                  </td>

                </tr>

              ) : data.length === 0 ? (

                <tr>

                  <td
                    colSpan={
                      columns.length +
                      1 +
                      (actions.length > 0 ? 1 : 0)
                    }
                    className="admin-table-empty"
                  >
                    {emptyMessage}
                  </td>

                </tr>

              ) : (

                data.map((item, index) => (

                  <tr
                    key={
                      item._id ||
                      item.id ||
                      index
                    }
                  >

                    <td>
                      {index + 1}
                    </td>

                    {/* Columns */}

                    {columns.map((column) => (

                      <td key={column.key}>

                        {column.render
                          ? column.render(
                              item,
                              index
                            )
                          : item[column.key]}

                      </td>

                    ))}

                    {/* Actions */}

                    {actions.length > 0 && (

                      <td>

                        <div className="admin-table-actions">

                          {actions.map(
                            (action, actionIndex) => {

              
                              return (
                                <button
                                  key={
                                    action.key ||
                                    action.type ||
                                    actionIndex
                                  }
                                  type="button"
                                  className={`admin-action-btn admin-action-${action.type}`}
                                  title={action.label || action.type}
                                  
                                  onClick={() => action.onClick?.(  item, index )  }
                                >

                                  {action.link ? (
                                    <Link to={action.link(item)}>
                                      {action.icon ||actionIcons[action.type ]}
                                    </Link>

                                  ) : (
                                    action.icon ||
                                    actionIcons[
                                      action.type
                                    ]

                                  )}

                                </button>
                              );
                            }
                          )}

                        </div>

                      </td>

                    )}

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default AdminDataPage;

