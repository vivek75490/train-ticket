// App.js
import React from 'react';
import { ToastContainer } from 'react-toastify'
import Landing from './components/landing/Landing';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import AboutUs from './components/aboutUs/AboutUs';
import ContactUs from './components/aboutUs/ContactUs';
import Faqs from './components/aboutUs/Faqs';
import UserLogin from './components/authentication/UserLogin';
import SignUp from './components/user/SignUp';
import MyBookings from './components/bookings/MyBookings';
import AdminLogin from './components/authentication/AdminLogin';
import MainDiv from './components/MainDiv';
import UserManagement from './components/user/UserManagement.jsx';

import {
  AddTrain,
  TrainList,
  TrainManagement,
  TrainStatus,
} from './components/train/trainIndex.js';
import AdminHome from './components/admin/AdminHome';
import {
  BookingSuccess,
  PassengerDetails,
} from './components/bookings/bookingsIndex.js';
import { AuthProvider } from './contexts/AuthContext';
import UserProfile from './components/user/UserProfile';
import EditProfile from './components/user/EditProfile';
import PaymentManagement from './components/admin/PaymentManagement.jsx';
import CancelTrain from './components/train/CancelTrain.jsx';
import AdminRoutes from './components/admin/AdminRoutes.jsx';
import UserRoutes from './components/user/UserRoutes.jsx';
import FeedbackPage from './components/aboutUs/FeedbackPage'
// import { TrainProvider } from './contexts/TrainContext.jsx';

const App = () => {
  // const appStyles = {
  //   // backgroundColor: "#C5FFF8",
  //   minHeight: '100vh',
  //   width: '100%',
  // };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainDiv />}>
        <Route index element={<Landing />} />

        <Route path="paymentmanagement" element={<PaymentManagement />} />
        <Route path="canceltrain" element={<CancelTrain />} />
        <Route path='about' element={<AboutUs />} />
        <Route path='contact' element={<ContactUs />} />
        <Route path='faqs' element={<Faqs />} />
        <Route path='userlogin' element={<UserLogin />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='adminlogin' element={<AdminLogin />} />
        <Route path='trainlist' element={<TrainList />} />
        <Route path='/adminhome/feedback' element={<FeedbackPage />} />
        
        <Route
          path='adminhome'
          element={
            <AdminRoutes>
              <AdminHome />
            </AdminRoutes>
          }
        >
        <Route
          path='/adminhome/mngtrain'
            element={
              <AdminRoutes>
                <TrainManagement />
              </AdminRoutes>
            }
          >
            <Route
              path='/adminhome/mngtrain/addtrain'
          element={
            <AdminRoutes>
              <AddTrain />
            </AdminRoutes>
          }
        />
        <Route
          path='/adminhome/mngtrain/trainstatus'
              element={
                <AdminRoutes>
                  <TrainStatus />
                </AdminRoutes>
              }
            />
            <Route
              path='/adminhome/mngtrain/canceltrain'
              element={
                <AdminRoutes>
                  <CancelTrain />
                </AdminRoutes>
              }
            />
          </Route>

          <Route
            path='/adminhome/usermanagement'
          element={
            <AdminRoutes>
              <UserManagement />
            </AdminRoutes>
          }
        />

          <Route
            path='/adminhome/paymentmanagement'
            element={
              <AdminRoutes>
                <PaymentManagement />
              </AdminRoutes>
            }
          />
        </Route>

        {/* <Route
          path='trainlist'
          element={
            <UserRoutes>
              <TrainList />
            </UserRoutes>
          }
        /> */},
        {/* <Route
          path='trainstatus'
          element={
            <AdminRoutes>
              <TrainStatus />
            </AdminRoutes>
          }
        /> */}
        <Route
          path='passengerdetails'
          element={
            <UserRoutes>
              <PassengerDetails />
            </UserRoutes>
          }
        />
        <Route
          path='booksuccess'
          element={
            <UserRoutes>
              <BookingSuccess />
            </UserRoutes>
          }
        />
        <Route
          path='mybookings'
          element={
            <UserRoutes>
              <MyBookings />
            </UserRoutes>
          }
        />
        <Route
          path='userprof'
          element={
            <UserRoutes>
              <UserProfile />
            </UserRoutes>
          }
        />
        <Route
          path='edituserprofile'
          element={
            <UserRoutes>
              <EditProfile />
            </UserRoutes>
          }
        />

        <Route path='*' element={<Landing />} />
      </Route>
    )
  );

  return (
    <AuthProvider>
      {/* <TrainProvider> */}
        <RouterProvider router={router} />
      {/* </TrainProvider> */}
      <ToastContainer />

    </AuthProvider>
    
  );
};

export default App;
