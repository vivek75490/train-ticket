// import React, { useState } from "react";
import styles from "./UserLogin.module.css";
import { useNavigate } from "react-router-dom";
import { MDBContainer, MDBCol, MDBRow, MDBInput } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import config from "../../config";
import { useState } from "react";
import { toast } from "react-toastify";

function UserLogin() {
  const navigate = useNavigate();
  const { setRole } = useAuth();
  const { setUserId } = useAuth();

  const handleSignIn = () => {



    axios.post(`${config.server}/users/signin`, { email, password: pwd })
      .then((response) => {
        sessionStorage.setItem("jwt", response.data.jwt)
        toast.success(response.data.mesg);
        setUserId(response.data.userId)
        setRole("user");
        navigate("/trainlist");
      }).catch((err) => {
        setRole("");
        console.log(err)
        toast.error("Invalid Credentials");
        navigate("/userlogin");
      })

  };

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  return (
    <MDBContainer className="p-1 mt-5">
      <MDBRow>
        <MDBCol col="6" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
            alt="Phone"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <p className="h1 fw-bold">Welcome, Back</p>
          <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: "1px" }}>
            Sign into your account
          </h5>
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="formControld"
            type="email"
            size="lg"
            onChange={(e) => setEmail(e.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="formControl"
            type="password"
            size="lg"
            onChange={(e) => setPwd(e.target.value)}
          />

          <div className="d-flex justify-content-between  mb-4">
            <Link to="/signup" className={styles.signupLink}>
              Don't have an account? Sign Up
            </Link>
            <a href="!#">Forgot password?</a>
          </div>

          <button
            onClick={handleSignIn}
            className="btn btn-lg btn-primary w-100"
          >
            Sign in
          </button>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default UserLogin;
