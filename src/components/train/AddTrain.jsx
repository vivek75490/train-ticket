import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '../../config';

const AddTrain = () => {
  const [formData, setFormData] = useState({
    trainNumber: '',
    trainName: '',
    arrivalTime: '',
    departureTime: '',
    baseFare: '',
    routeId: '1', // Default route ID
    runsOn: '',
    acSeats: '',
    sleeperSeats: '',
    generalSeats: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.server}/trains/add`, {
        ...formData,
        activeStatus: true,
        cancelStatus: false
      });
      if (response.status === 200) {
        toast.success('Train added successfully');
        // Reset form data after successful submission
        setFormData({
          trainNumber: '',
          trainName: '',
          arrivalTime: '',
          departureTime: '',
          baseFare: '',
          routeId: '1', // Reset route ID to default
          runsOn: '',
          acSeats: '',
          sleeperSeats: '',
          generalSeats: '',
        });
      } else {
        toast.error('Failed to add train. Please try again.');
      }
    } catch (error) {
      console.error('Error adding train:', error);
      toast.error('Failed to add train. Please try again.');
    }
  };

  return (
    <div className='container mt-5 rounded shadow bg-secondary-subtle'>
      <h1 className='text-center display-3 mb-4 border-bottom border-secondary'>Add Train</h1>
      <div className='row justify-content-center align-items-start'>
        <div className='col-md-6 order-md-1 me-2'>
          <form onSubmit={handleSubmit}>
            <div className='mb-3 d-flex'>
              <label htmlFor='trainNumber' className='form-label w-25'>Train Number</label>
              <input type='text' className='form-control w-75' id='trainNumber' name='trainNumber' value={formData.trainNumber} onChange={handleChange} disabled />
            </div>
            <div className='mb-3 d-flex'>
              <label htmlFor='trainName' className='form-label w-25'>Train Name</label>
              <input type='text' className='form-control w-75' id='trainName' name='trainName' value={formData.trainName} onChange={handleChange} />
            </div>
            <div className='mb-3 d-flex'>
              <label htmlFor='arrivalTime' className='form-label w-25'>Arrival Time</label>
              <input type='time' className='form-control w-75' id='arrivalTime' name='arrivalTime' value={formData.arrivalTime} onChange={handleChange} />
            </div>
            <div className='mb-3 d-flex'>
              <label htmlFor='departureTime' className='form-label w-25'>Departure Time</label>
              <input type='time' className='form-control w-75' id='departureTime' name='departureTime' value={formData.departureTime} onChange={handleChange} />
            </div>
            <div className='mb-3 d-flex'>
              <label htmlFor='baseFare' className='form-label w-25'>Base Fare</label>
              <input type='number' className='form-control w-75' id='baseFare' name='baseFare' value={formData.baseFare} onChange={handleChange} />
            </div>
            <div className='mb-3 d-flex'>
              <label htmlFor='routeId' className='form-label w-25'>Route ID</label>
              <select className='form-control w-75' id='routeId' name='routeId' value={formData.routeId} onChange={handleChange}>
                <option value='1'>Mumbai-Chennai</option>
                <option value='2'>Delhi-Mumbai</option>
                <option value='3'>Kolkata-Delhi</option>
                <option value='4'>Bangalore-Pune</option>
              </select>
            </div>
            <div className='mb-3 d-flex'>
              <label htmlFor='runsOn' className='form-label w-25'>Runs On</label>
              <input type='text' className='form-control w-75' id='runsOn' name='runsOn' value={formData.runsOn} onChange={handleChange} />
            </div>
            <div className='mb-3 d-flex'>
              <label htmlFor='acSeats' className='form-label w-25'>AC Seats</label>
              <input type='number' className='form-control w-75' id='acSeats' name='acSeats' value={formData.acSeats} onChange={handleChange} />
            </div>
            <div className='mb-3 d-flex'>
              <label htmlFor='sleeperSeats' className='form-label w-25'>Sleeper Seats</label>
              <input type='number' className='form-control w-75' id='sleeperSeats' name='sleeperSeats' value={formData.sleeperSeats} onChange={handleChange} />
            </div>
            <div className='mb-3 d-flex mb-4'>
              <label htmlFor='generalSeats' className='form-label w-25 '>General Seats</label>
              <input type='number' className='form-control w-75' id='generalSeats' name='generalSeats' value={formData.generalSeats} onChange={handleChange} />
            </div>
            
            <button type='submit' className='btn btn-primary w-100 text-center mb-5'>Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTrain;
