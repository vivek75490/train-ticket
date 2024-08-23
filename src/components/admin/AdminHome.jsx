import React from "react";
import { Outlet } from "react-router-dom";

const AdminHome = () => {
  return (
    <>
      <div className="container d-flex flex-column mt-2">
        {/* <div className="d-flex m-1">
           <Link to="mngtrain">
            <button
              type="button"
              className="btn btn-outline-primary btn-lg  mx-5"
            >
              Train management
            </button>
          </Link> 
   
          <Link to="usermanagement">
            <button
              type="button"
              className="btn btn-outline-primary btn-lg  mx-5"
            >
              User management
            </button>
          </Link> 

           <Link to="/adminhome/paymentmanagement">
            <button
              type="button"
              className="btn btn-outline-primary btn-lg mx-5"
            >
              Payment management
            </button>
          </Link> 
       
           <Link to="/feedback">
            <button
              type="button"
              className="btn btn-outline-primary btn-lg mx-5"
            >
              Feedback
            </button>
          </Link> 
        </div> */}

        <Outlet />
      </div>
    </>
    
  );
};

export default AdminHome;
