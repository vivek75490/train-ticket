import trainLogo from "../../assets/trainLogo.jpg";
import { Link } from "react-router-dom";
import "../../style.css";

const Header = () => {
  return (
    <>
      <div className="container">
        <img src={trainLogo} alt="logo" className="me-5 img-fluid logo-img" />
        <Link to="/login" className="ms-5 me-5">
          {" "}
          Login
        </Link>
        {" | "}
        <Link to="/register" className="ms-5 me-5">
          {" "}
          Register
        </Link>
        {" | "}
        <Link to="/about" className="ms-5 me-5">
          {" "}
          About Us
        </Link>
        {" | "}
        <Link to="/contact" className="ms-5 me-5">
          {" "}
          Contact Us
        </Link>
        {" | "}
        <Link to="/login" className="ms-5 me-5">
          {" "}
          Dashboard
        </Link>

        {/* <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/" component={Landing} exact />
          <Route path="/about" component={AboutUs} exact />
        </Switch> */}
      </div>
    </>
  );
};

export default Header;
