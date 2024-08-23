import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import config from "../../config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../user/UserProfile.css";
import { useAuth } from "../../contexts/AuthContext";

const UserProfile = () => {

  const { userId } = useAuth();
  const [userData, setUserData] = useState({
    image: null,
    firstName: "",
    lastName: "",
    birthDate: "",
    email: "",
    mobileNumber: "",
    gender: "",
  });

  const navigate = useNavigate();

  const deleteUserProfile = async () => {
    try {
      await axios.put(`${config.server}/users/${userId}/status/inactive`);
      toast.success("Profile deleted successfully!");
      // Redirect to landing page
      //  window.location.href = '/landing'
      navigate("/landing");

    } catch (error) {
      console.error("Error deleting user profile:", error);
      toast.error("Failed to delete profile. Please try again later.");
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {

        const profileResponse = await axios.get(`${config.server}/users/userProfile/${userId}`);

        const fetchedUserData = profileResponse.data;

        // Set user data excluding the image field
        const { image, ...userDataWithoutImage } = fetchedUserData;
        setUserData(userDataWithoutImage);

        // Fetch user image separately

        const imageResponse = await axios.get(`${config.server}/users/images/${userId}`, {
          responseType: "arraybuffer" // Ensure response is treated as binary data
        });


        // Convert the binary image data to Base64 string
        const imageData = new Blob([imageResponse.data], { type: "image/jpg" });
        const avatarUrl = URL.createObjectURL(imageData);
        setUserData((prevUserData) => ({
          ...prevUserData,
          avatarUrl,
        }));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <>
      <section className="section about-section gray-bg" id="about">
        <div className="container">
          <button
            className="btn btn-danger float-end"
            onClick={deleteUserProfile}
          >
            Delete Profile
          </button>
          <Link to="/edituserprofile" state={{ userData }}>
            <button className="btn btn-warning float-end me-2">
              Edit Profile
            </button>
          </Link>
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-8">
              <div className="about-text go-to">
                <h3 className="dark-color">About Me</h3>
                <div className="row about-list">
                  <div className="col-md-6">
                    <div className="media">
                      <label>First Name</label>
                      <p>{userData.firstName}</p>
                    </div>

                    <div className="media">
                      <label>Last Name</label>
                      <p>{userData.lastName}</p>
                    </div>

                    <div className="media">
                      <label>Birth Date</label>
                      <p>{userData.birthDate}</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="media">
                      <label>E-mail</label>
                      <p>{userData.email}</p>
                    </div>

                    <div className="media">
                      <label>Gender</label>
                      <p>{userData.gender}</p>
                    </div>
                    <div className="media">
                      <label>Phone</label>
                      <p>{userData.mobileNumber}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="about-avatar"
                style={{ width: "200px", height: "200px", overflow: "hidden" }}
              >
                <div
                  style={{
                    backgroundImage: `url(${
                      userData.avatarUrl
                        ? userData.avatarUrl
                        : "https://bootdey.com/img/Content/avatar/avatar7.png"
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    width: "100%",
                    height: "100%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
