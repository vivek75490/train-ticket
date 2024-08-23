import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./EditProfile.css";
import config from '../../config';
import { useAuth } from "../../contexts/AuthContext";


const EditProfile = () => {
  // State for form fields and profile image

  const { userId } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    mobileNumber: "",
    email: "",
    image: "",
  });
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${config.server}/users/userProfile/${userId}`
        );
        const userData = response.data;
        setFormData(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle profile image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file.size > 1048576) {
      // Check if image size is greater than 1MB
      toast.error(
        "Image size exceeds the limit (1MB). Please select a smaller image.",
        { autoClose: 5000 }
      );
      return;
    }
    setProfileImage(file);
  };

  // // Function to handle form submission
  // const updateProfileImage = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const formDataToSend = new FormData();
  //     formDataToSend.append("firstName", formData.firstName);
  //     formDataToSend.append("lastName", formData.lastName);
  //     formDataToSend.append("birthDate", formData.birthDate);
  //     formDataToSend.append("gender", formData.gender);
  //     formDataToSend.append("mobileNumber", formData.mobileNumber);
  //     formDataToSend.append("email", formData.email);
  //     // formDataToSend.append("image", formData.image);
  //     if (profileImage) {
  //       formDataToSend.append("imageFile", profileImage); // Use "imageFile" as the key for the image
  //     }

  //     // Send the request with the correct content type
  //     await axios.post("${config.server}/users/images/2", formDataToSend, {
  //       headers: {
  //         "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
  //       },
  //     });

  //     toast.success("Profile updated successfully.", { autoClose: 5000 });
  //   } catch (error) {
  //     console.error("Error updating profile:", error);
  //     toast.error("Failed to update profile. Please try again later.", {
  //       autoClose: 5000,
  //     });
  //   }
  // };

  // Function to handle updating the user details
  const updateUserDetails = async () => {
    try {
      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        birthDate: formData.birthDate,
        gender: formData.gender,
        mobileNumber: formData.mobileNumber,
        email: formData.email,
        // imageFile : profileImage
      };

      await axios.put(`${config.server}/users/${userId}`, userData);
      toast.success("User details updated successfully.", { autoClose: 5000 });
    } catch (error) {
      console.error("Error updating user details:", error);
      toast.error("Failed to update user details. Please try again later.", {
        autoClose: 5000,
      });
    }
  };

  // Function to handle updating the profile image
  const updateProfileImage = async () => {
    try {
      const formDataToSend = new FormData();
      if (profileImage) {
        formDataToSend.append("imageFile", profileImage);
        await axios.post(
          `${config.server}/users/images/${userId}`,
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success("Profile image updated successfully.", {
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error("Error updating profile image:", error);
      toast.error("Failed to update profile image. Please try again later.", {
        autoClose: 5000,
      });
    }
  };

  // Combined function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    await Promise.all([updateUserDetails(), updateProfileImage()]);
  };

  return (
    <>
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              {/* Profile Image Section */}
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={
                        profileImage
                          ? URL.createObjectURL(profileImage)
                          : "https://bootdey.com/img/Content/avatar/avatar7.png"
                      }
                      alt="Profile"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <input type="file" onChange={handleImageChange} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              {/* Edit Profile Form */}
              <h4 className="mb-3 mt-3">Edit Profile</h4>
              <form onSubmit={handleSubmit}>
                {/* Form Fields */}
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="birthdate" className="form-label">
                      Birthdate
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="birthdate"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="gender" className="form-label">
                      Gender
                    </label>
                    <select
                      className="form-select"
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Choose...</option>
                      <option value="MALE">Male</option>
                      <option value="FEMALE">Female</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>
                  <div className="col-md-5">
                    <label htmlFor="mobileNumber" className="form-label">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="mobileNumber"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-7">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <button
                  className="w-40 btn btn-primary btn-lg mt-3"
                  type="submit"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
