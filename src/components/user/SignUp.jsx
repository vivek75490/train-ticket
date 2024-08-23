import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import config from "../../config"
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    mobileNumber: "",
    email: "",
    username: "",
    password: "",
    country: "",
    state: "",
    zip: ""
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${config.server}/users/signup`, userData);
      toast.success("Sign up successful!");
      navigate("/userlogin");
    } catch (error) {
      toast.error("Sign up failed. Please try again.");
    }
  };

  return (
    <>
      <div className="container">
        <div>
          <h4 className="mb-3 mt-3">Register Here</h4>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">First name</label>
                <input type="text" className="form-control" id="firstName" name="firstName" value={userData.firstName} onChange={handleChange} required />
              </div>
              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input type="text" className="form-control" id="lastName" name="lastName" value={userData.lastName} onChange={handleChange} required />
              </div>
              <div className="col-md-4">
                <label htmlFor="birthdate" className="form-label">Birthdate</label>
                <input type="date" className="form-control" id="birthdate" name="birthDate" value={userData.birthDate} onChange={handleChange} required />
              </div>
              <div className="col-md-3">
                <label htmlFor="gender" className="form-label">Gender</label>
                <select className="form-select" id="gender" name="gender" value={userData.gender} onChange={handleChange} required>
                  <option value="">Choose...</option>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>
              <div className="col-md-5">
                <label htmlFor="mobileNumber" className="form-label">Mobile No.</label>
                <input type="tel" className="form-control" id="mobileNumber" name="mobileNumber" value={userData.mobileNumber} onChange={handleChange} required />
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={userData.email} onChange={handleChange} required />
              </div>
              <div className="col-12">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" name="username" value={userData.username} onChange={handleChange} required />
              </div>
              <div className="col-sm-6">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={userData.password} onChange={handleChange} required />
              </div>
              <div className="col-sm-6">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" required />
              </div>
              <div className="col-md-5">
                <label htmlFor="country" className="form-label">Country</label>
                <input type="text" className="form-control" id="country" name="country" value={userData.country} onChange={handleChange} required />
              </div>
              <div className="col-md-4">
                <label htmlFor="state" className="form-label">State</label>
                <input type="text" className="form-control" id="state" name="state" value={userData.state} onChange={handleChange} required />
              </div>
              <div className="col-md-3">
                <label htmlFor="zip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="zip" name="zip" value={userData.zip} onChange={handleChange} required />
              </div>
            </div>
            <hr className="my-4"></hr>
            <button className="w-40 btn btn-primary btn-lg" type="submit">Submit</button>
            <button className="w-40 btn btn-danger btn-lg m-3" type="reset">Clear</button>
          </form>
        </div >
      </div >
    </>
  );
}

export default SignUp;
