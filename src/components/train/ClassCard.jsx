import React from 'react';

const ClassCard = ({ classType, availability }) => {
  if (!classType || availability === null || isNaN(availability)) {
    return null; 
  }

  const isAvailable = availability >= 0; 
  const availabilityDisplay = isAvailable ? availability : Math.abs(availability) + ''; 
  const status = isAvailable ? 'AVL' : 'WL'; 

  return (
    <div className=""> 
      <div
        className={`container rounded my-3 ${
          isAvailable ? 'alert alert-success' : 'alert alert-danger'
        }`}
        style={{ width: '100%' }} 
      >
        <div className="class-type">{classType}</div>
        <div className="availability">{status} {availabilityDisplay}</div>
      </div>
    </div>
  );
};

export default ClassCard;
