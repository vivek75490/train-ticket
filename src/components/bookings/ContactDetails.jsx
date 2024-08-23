import React from 'react'

const ContactDetails = () => {
  return (
    <>
      <div className='col-md-9 border rounded p-3' >
        <div className='fw-bold fs-4'>Contact Details</div>
        <br />
        <div>(Ticket details will be sent to email- <span className='fw-bold'>su*******@gmail.com</span> and registered mobile number <span className='fw-bold'>82******18</span>)</div>

        <div className="input-group flex-nowrap pt-2">
          <span className="input-group-text" id="addon-wrapping">91</span>
          <input type="number" className="form-control" />
        </div>
      </div>
    </>
  )
}

export default ContactDetails