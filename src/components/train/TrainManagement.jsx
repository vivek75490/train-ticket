import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const TrainManagement = () => {
  return (
    <>
      <div className='ml-auto d-flex'>
        <Link to='addtrain'>
          <button
            type='button'
            className='btn btn-outline-primary btn-lg ms-5'
          >
            Add train
          </button>
        </Link>
        <br />
        <Link to='trainstatus'>
          <button
            type='button'
            className='btn btn-outline-warning btn-lg ms-5'
          >
            Train status
          </button>
        </Link>
        <br />
        <Link to='canceltrain'>
          <button type='button' className='btn btn-outline-danger btn-lg ms-5'>
            Cancel train
          </button>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default TrainManagement;
