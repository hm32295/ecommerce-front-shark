
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="min-vh-100 d-flex align-items-center bg-light">

      <div className="container py-5">

        <div className="row justify-content-center">

          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">

            <div
              className="bg-white p-4 p-sm-5"
              style={{
                borderRadius: "28px",
                boxShadow:
                  "0 25px 70px rgba(0, 0, 0, 0.08)",
              }}
            >
              <Outlet />
            </div>

          </div>

        </div>

      </div>

    </main>
  );
};

export default AuthLayout;
