import React from "react";
import trainLogo from "../../assets/trainLogo.jpg";
import { Link } from "react-router-dom";

const UserHeader = () => {
  return (
    <header className="p-3 text-bg-light bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <img src={trainLogo} alt="logo" className="me-5 img-fluid logo-img" />

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

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <LiTag link="/" tag="Home" />
            <LiTag link="/contact" tag="Contact Us" />
            <LiTag link="/about" tag="About Us" />
            <LiTag link="/faqs" tag="FAQs" />
          </ul>

          <div className="text-end bg-dark p-2 rounded">
            <Btns link="/adminlogin" tag="Logout" color="danger" />
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

export default UserHeader;
