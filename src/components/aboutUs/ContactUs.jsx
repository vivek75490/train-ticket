import React from 'react';
import styles from './ContactUs.module.css';
import contactUs from '../../assets/undraw_contact_us_re_4qqt.svg';

const ContactUs = () => {
  return (
    <>
      <div className={styles.contact}>
        <div className={styles.upper}>
          <div className={styles.upperLeft}>
                <div className='card-shadow'>
                  <img src={contactUs} className='img-fluid' alt='loading' />
                </div>
              </div>
              <div className={styles.upperRight}>
                <div className={`${styles.inner}`}><h1 className='font-weight-light mt-2'>Quick Contact</h1>
                  <form>
                    <div className='row'>
                      <div className=''>
                        <div className='form-group mt-2'>
                          <input
                            className='form-control'
                            type='text'
                            placeholder='name'
                          />
                        </div>
                      </div>
                      <div className=''>
                        <div className='form-group mt-2'>
                          <input
                            className='form-control'
                            type='email'
                            placeholder='email address'
                          />
                        </div>
                      </div>
                      <div className=''>
                        <div className='form-group mt-2'>
                          <input
                            className='form-control'
                            type='text'
                            placeholder='phone'
                          />
                        </div>
                      </div>
                      <div className=''>
                        <div className='form-group mt-2'>
                          <textarea
                            className='form-control'
                            rows='3'
                            placeholder='message'
                          ></textarea>
                        </div>
                      </div>
                      <div className=''>
                        <button
                          type='submit'
                          className='btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2'
                        >
                          <span> SUBMIT</span>
                        </button>
                      </div>
                    </div>
                  </form></div>
            
                </div>
              </div>
              <div className={styles.lower}>
                    <div className={styles.card}>
                        <img
                            src='https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png'
                            alt='loading'
                          />
                        <h6 className='font-weight-medium'>Address</h6>
                          <p className=''>601 Sherwood Ave,San Bernandino</p>
                                            </div>
                    <div className={styles.card}>
                          <img
                            src='https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png'
                            alt='loading'
                          />
                        
                          <h6 className='font-weight-medium'>Phone</h6>
                          <p>251 546 9442 | 630 446 8851</p>
                                            </div>
                    <div className={styles.card}>
                        <img
                            src='https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png'
                            alt='loading'
                          />
                        <h6 className='font-weight-medium'>Email</h6>
                          <p>info@wrappixel.com | 123@wrappixel.com</p>
                                  </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
