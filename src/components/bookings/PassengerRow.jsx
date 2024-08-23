// PassengerRow.jsx
import React, { useState } from 'react';

const PassengerRow = ({ onPassengerDetailsChange }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleGenderChange = (e) => setGender(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);

  const handlePassengerDetailsChange = () => {
    onPassengerDetailsChange({ name, gender, age });
  };

  return (
    <div className="row mb-3">
      <div className="col-md">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="name-id"
            value={name}
            onChange={handleNameChange}
            onBlur={handlePassengerDetailsChange}
          />
          <label htmlFor="name-id">Name</label>
        </div>
      </div>
      <div className="col-md-auto">
        <div className="form-floating">
          <select
            className="form-select"
            id="gender-id"
            value={gender}
            onChange={handleGenderChange}
            onBlur={handlePassengerDetailsChange}
          >
            <option value="">Select</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHER">Other</option>
          </select>
          <label htmlFor="gender-id">Gender</label>
        </div>
      </div>
      <div className="col-md-auto">
        <div className="form-floating">
          <input
            type="number"
            max={120}
            className="form-control"
            id="age-id"
            value={age}
            onChange={handleAgeChange}
            onBlur={handlePassengerDetailsChange}
          />
          <label htmlFor="age-id">Age</label>
        </div>
      </div>
    </div>
  );
};

export default PassengerRow;
