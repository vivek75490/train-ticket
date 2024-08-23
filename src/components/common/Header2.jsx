import React from "react";
import trainLogo from "../../assets/trainLogo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Header2 = () => {
  const navigate = useNavigate();

  const { role, setRole } = useAuth();

  const handleLogout = () => {
    setRole("");
    navigate("/");
    sessionStorage.removeItem("jwt");
  };

  return (
    <header className="p-3 text-bg-light bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/">
            <img
              src={trainLogo}
              alt="logo"
              className="me-5 img-fluid logo-img"
            />
          </Link>

          <Link to="/" className="text-light text-decoration-none">
            <h1 className="text-light text-decoration-none">RailConnect</h1>
          </Link>
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>

          {role === "admin" ? (
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <LiTag link="/adminhome/mngtrain" tag="Manage Trains" />
              <LiTag link="/adminhome/usermanagement" tag="Manage Users" />
              <LiTag link="/adminhome/paymentmanagement" tag="Manage Payments" />
              <LiTag link="/adminhome/feedback" tag="Feedback" />
            </ul>
          ) : (
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <LiTag link="/" tag="Home" />
              <LiTag link="/contact" tag="Contact Us" />
              <LiTag link="/about" tag="About Us" />
              <LiTag link="/faqs" tag="FAQs" />
            </ul>
          )}

          <div className="text-end bg-dark p-2 rounded">
            {role !== "" ? (
              <>
                {role === "user" && (
                  <>
                    <Btns link="/userprof" tag="Profile" color="primary" />
                    <Btns
                      link="/mybookings"
                      tag="My Bookings"
                      color="warning"
                    />
                  </>
                )}
                <button
                  className="btn btn-danger mx-1 px-2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Btns link="/userlogin" tag="Login" color="primary" />
                <Btns link="/signup" tag="Register" color="success" />
                <Btns link="/adminlogin" tag="Admin" color="danger" />
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

const Btns = ({ link, tag, color }) => {
  return (
    <Link to={link} className={`btn btn-${color} mx-1 px-2`}>
      {tag}
    </Link>
  );
};

const LiTag = ({ link, tag }) => {
  return (
    <li>
      <Link
        to={link}
        className="nav-link px-2 text-light"
        style={{ fontSize: "20px" }}
      >
        {tag}
      </Link>
    </li>
  );
};

export default Header2;
