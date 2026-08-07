import "./AdminPagination.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AdminPagination = ({
  totalItems = 0,
  page = 1,
  limit = 10,
  onPageChange,
  onLimitChange,
  limitOptions = [5, 10, 20, 50],
}) => {

  const totalPages = Math.ceil(totalItems / limit);

  if (totalItems === 0) {
    return null;
  }

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;

    onPageChange?.(newPage);
  };

  return (
    <div className="admin-pagination">

      {/* Number of items */}

      <div className="admin-pagination-info">

        <span>
          Showing
        </span>

        <select
          value={limit}
          onChange={(e) =>
            onLimitChange?.(Number(e.target.value))
          }
          className="admin-pagination-select"
        >

          {limitOptions.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}

        </select>

        <span>
          items per page
        </span>

      </div>


      {/* Pagination */}

      <div className="admin-pagination-controls">

        {/* Previous */}

        <button
          type="button"
          disabled={page === 1}
          onClick={() =>
            handlePageChange(page - 1)
          }
          className="admin-pagination-btn"
        >
          <ChevronLeft size={17} />
        </button>


        {/* Pages */}

        {Array.from(
          { length: totalPages },
          (_, index) => index + 1
        ).map((pageNumber) => (

          <button
            key={pageNumber}
            type="button"
            onClick={() =>
              handlePageChange(pageNumber)
            }
            className={`admin-pagination-btn ${
              page === pageNumber
                ? "active"
                : ""
            }`}
          >
            {pageNumber}
          </button>

        ))}


        {/* Next */}

        <button
          type="button"
          disabled={page === totalPages}
          onClick={() =>
            handlePageChange(page + 1)
          }
          className="admin-pagination-btn"
        >
          <ChevronRight size={17} />
        </button>

      </div>

    </div>
  );
};

export default AdminPagination;