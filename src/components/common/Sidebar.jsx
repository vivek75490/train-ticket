import React from 'react';
import Footer from './Footer';
import styles from './Sidebar.module.css';
import trainLogo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const listItems = [
    {
      name: 'Home',
      icon: 'house',
      link: '/',
    },
    {
      name: 'About Us',
      icon: 'info-circle',
      link: '/about',
    },
    {
      name: 'Contact Us',
      icon: 'telephone',
      link: '/contact',
    },
    {
      name: 'FAQs',
      icon: 'person-raised-hand',
      link: '/faqs',
    },
  ];
  const navigate = useNavigate();

  const { role, setRole } = useAuth();

  const handleLogout = () => {
    setRole('');
    navigate('/');
  };
  return (
    <div
      className={`${isOpen ? styles.sideOpen : styles.sideClose} ${
        styles.sidebar
      } shadow`}
    >
      <div className={styles.sideUpper}>
        <div>
          <li
            className={styles.li}
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            {isOpen && (
              <i
                className='bi bi-x-circle'
                style={{ margin: isOpen ? '0px 5px' : '0px 10px' }}
              ></i>
            )}
            {!isOpen && (
              <i
                className='bi bi-list'
                style={{ margin: isOpen ? '0px 5px' : '0px 10px' }}
              ></i>
            )}
          </li>
          <img src={trainLogo} alt='logo' className='img-fluid logo-img px-3' />
          <hr />
          <ul className={styles.list} onClick={() => setIsOpen(false)}>
            {listItems.map((item, index) => {
              return <LiTag item={item} isOpen={isOpen} />;
            })}
          </ul>
        </div>
        <div className={styles.list} onClick={() => setIsOpen(false)}>
          {role !== '' ? (
            <>
              {role === 'user' && (
                <>
                  <div class='btn-group dropup p-0'>
                    <button
                      type='button'
                      class='btn btn-lg btn-transparent dropdown-toggle p-0'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <i class='bi bi-person-circle'></i>
                    </button>
                    <ul class='dropdown-menu dropdown-menu-end'>
                      <li>
                        <Btns link='/userprof' tag='Profile' color='primary' />
                      </li>
                      <li>
                        <Btns
                          link='/mybookings'
                          tag='My Bookings'
                          color='warning'
                        />
                      </li>
                      <li>
                        <button
                          className='btn mx-1 px-2'
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </>
              )}
              {role === 'admin' && (
                <>
                  <button className='btn btn-danger m-1 p-1' onClick={handleLogout}>
                    Logout
                  </button>
                </>
              )}
            </>
          ) : (
            <>
              <AuthBtns
                link='/userlogin'
                tag='Login'
                color='primary'
                isOpen={isOpen}
              />
              <AuthBtns
                link='/signup'
                tag='Register'
                color='success'
                isOpen={isOpen}
              />
              <AuthBtns
                link='/adminlogin'
                tag='Admin'
                color='danger'
                isOpen={isOpen}
              />
            </>
          )}
        </div>
      </div>
      <Footer isOpen={isOpen} />
    </div>
  );
};

const AuthBtns = ({ link, tag, color, isOpen }) => {
  return (
    <Link
      to={link}
      className={` btn ${!isOpen ? 'btn-sm' : ''} btn-${color} my-1 w-75 p-1`}
      style={{ fontSize: '12px' }}
    >
      {tag}
    </Link>
  );
};

const Btns = ({ link, tag, color, isOpen }) => {
  return (
    <Link
      to={link}
      className={`dropdown-item btn btn-${color} my-1 w-75 p-1`}
      style={{ fontSize: '20px' }}
    >
      {tag}
    </Link>
  );
};

const LiTag = ({ item: { name, icon, link }, isOpen }) => {
  return (
    <Link to={link} style={{ textDecoration: 'none' }} title={name}>
      <li className={styles.li}>
        <i
          className={`bi bi-${icon}`}
          style={{ margin: isOpen ? '0px 5px' : '0px 10px' }}
        ></i>
        {isOpen && name}
      </li>
    </Link>
  );
};

export default Sidebar;
