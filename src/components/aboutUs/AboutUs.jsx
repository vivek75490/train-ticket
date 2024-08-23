import React from "react";

const Aboutus = () => {
  return (
    <div className="container">
      <h1 className="text-center mb-4 mt-4" >About Us</h1>
      <div className="card bg-light p-4 mb-4">
        <p>
          The Railway Reservation System is a web-based application built using
          Spring Boot for the backend and React for the frontend. It simplifies
          train ticket booking and management of train schedules and
          reservations through RESTful APIs for user authentication, ticket
          booking, train management, and user management. The system serves two
          main roles: users and administrators. Users can search for train
          schedules, book tickets, select seats, make payments, and manage
          their reservations, while administrators have access to advanced
          features such as managing train schedules, handling reservations, and
          overseeing user accounts. End users include passengers who want to
          book train tickets and railway staff responsible for managing
          reservations and train operations. The primary objective is to offer
          an efficient booking process for passengers, secure passenger data,
          and improve the overall user experience. Ideas for improvement include
          implementing an intuitive user interface, integrating with payment
          gateways, offering real-time updates, dynamic pricing, multiple
          languages, and accessibility features. This project aims to create a
          user-friendly platform for passengers to book train tickets while
          ensuring efficient management and security, with users and
          administrators playing pivotal roles in achieving these goals.
        </p>
      </div>
      <h2 className="text-center mb-4">Team</h2>
      <div className="row text-center">
        <div className="col-md-2">
          <div className="card bg-white rounded shadow-sm py-5 px-4 mb-3">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQEVBgl9jFwuzA/profile-displayphoto-shrink_200_200/0/1701708273885?e=1713398400&v=beta&t=KmlKEQvvkBvptEZLTYC2DmnjSfZn5xkoyDue2A5--VY"
              alt="Yash Pathak"
              width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 className="mb-3">Yash Pathak</h5>
            {/* <span className="small text-uppercase text-muted">Role</span> */}
            <a
              href="https://www.linkedin.com/in/yash-pathak-879024286/"
              className="btn btn-primary custom-icon"
            >
              <i className="bi bi-linkedin" style={{ padding: 1 }}></i>
            </a>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card bg-white rounded shadow-sm py-5 px-4 mb-3">
            <img
              src="https://media.licdn.com/dms/image/D4D35AQEcgFhSDx8Z5Q/profile-framedphoto-shrink_200_200/0/1691907018019?e=1708794000&v=beta&t=tFdAhgup7i0IYf8xEa7TB7vixvq-Les5zVAwrh0SUrE"
              alt="Meet Vasani"
              width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 className="mb-3">Meet Vasani</h5>
            {/* <span className="small text-uppercase text-muted">Role</span> */}
            <a
              href="https://www.linkedin.com/in/meet-vasani-1626651b9/"
              className="btn btn-primary custom-icon"
            >
              <i className="bi bi-linkedin" style={{ padding: 1 }}></i>
            </a>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card bg-white rounded shadow-sm py-5 px-4 mb-3">
            <img
              src="https://media.licdn.com/dms/image/D4D35AQFF-JXnWJVr4w/profile-framedphoto-shrink_200_200/0/1696350631007?e=1708794000&v=beta&t=MiJ2nmLEfid2NxXIMw3fZrawIokQJhlE27EDqnApMLk"
              alt="Jayesh Suthar"
              width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 className="mb-3">Jayesh Suthar</h5>
            {/* <span className="small text-uppercase text-muted">Role</span> */}
            <a
              href="https://www.linkedin.com/in/jayesh-suthar-2a297b1a1/"
              className="btn btn-primary custom-icon"
            >
              <i className="bi bi-linkedin" style={{ padding: 1 }}></i>
            </a>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card bg-white rounded shadow-sm py-5 px-4 mb-3">
            <img
              src="https://media.licdn.com/dms/image/D4D35AQGNT-Hd4G3ZtQ/profile-framedphoto-shrink_200_200/0/1701604544480?e=1708797600&v=beta&t=tzvyX6SgiYGrThuz64N2Y-2jEq9nypkWI2Xucv2UJ3I"
              alt="Rohit Gaikar"
              width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 className="mb-3">Rohit Gaikar</h5>
            {/* <span className="small text-uppercase text-muted">Role</span> */}
            <a
              href="https://www.linkedin.com/in/rohit-gaikar-ab55b8130/"
              className="btn btn-primary  custom-icon"
            >
              <i className="bi bi-linkedin" style={{ padding: 1 }}></i>
            </a>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card bg-white rounded shadow-sm py-5 px-4 mb-3">
            <img
              src="https://media.licdn.com/dms/image/D4D35AQEvGUgy3xpRZA/profile-framedphoto-shrink_200_200/0/1701463846440?e=1708794000&v=beta&t=bl7_MVd5I-tbLv-HoPsk5MZmoc_m3Pa4lbtUWsCMT_0"
              alt="Rohan Chavan"
              width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 className="mb-3">Rohan Chavan</h5>
            {/* <span className="small text-uppercase text-muted">Role</span> */}
            <a
              href="https://www.linkedin.com/in/justrohan/"
              className="btn btn-primary  custom-icon"
            >
              <i className="bi bi-linkedin" style={{ padding: 1 }}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
