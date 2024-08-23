// TrainList.js
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SearchCard from './SearchCard';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '../../config';
import { useLocation } from 'react-router-dom';

const TrainList = () => {
  const [hideSidebar, setHideSidebar] = useState(false);
  // const [searchData, setSearchData] = useState({
  //   from: source,
  //   to: destination,
  //   date: date,
  //   // classType: 'all',
  // });
 
  const [trainData, setTrainData] = useState([]);
  const [routes, setRoutes] = useState([]);

  const location = useLocation();
  const { from, to, date } = location.state || {}; // Fallback to an empty object if location.state is undefined

  const [searchData, setSearchData] = useState({
    from: from || "",
    to: to || "",
    date: date ? new Date(date) : new Date(),
  });

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await axios.get(`${config.server}/train/routes`);
        setRoutes(response.data);
      } catch (error) {
        console.error('Error fetching routes data:', error);
        toast.error('No trains available.');
      }
    };
    fetchRoutes();
  }, []);

  useEffect(() => {
    if (searchData) {
      setSearchData(searchData);
    }
  }, [searchData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.server}/trains/search`, {
          params: {
            source: searchData.from,
            destination: searchData.to,
            date: searchData.date.toISOString().split('T')[0],
          }
        });
        setTrainData(response.data);
      } catch (error) {
        console.error('Error fetching train data:', error);
        toast.error('No trains available !');
      }
    };

    

    if (searchData.from && searchData.to && searchData.date) {
      fetchData(); // Fetch data when searchData changes
    }
  }, [searchData]); // Include searchData in the dependency array

  const updateSearchData = (fieldName, newValue) => {
    setSearchData(prevSearchData => ({
      ...prevSearchData,
      [fieldName]: newValue,
    }));
  };

  const calculateDuration = (departureTime, arrivalTime) => {
    const departure = new Date(`01/01/2022 ${departureTime}`);
    const arrival = new Date(`01/01/2022 ${arrivalTime}`);
    const duration = Math.abs(arrival - departure) / 1000;
    const hours = Math.floor(duration / 3600) % 24;
    const minutes = Math.floor(duration / 60) % 60;
    return `${hours}h ${minutes}m`;
  };

  const handleSearch = () => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.server}/trains/search`, {
          params: {
            source: searchData.from,
            destination: searchData.to,
            date: searchData.date.toISOString().split('T')[0],
          }
        });
        setTrainData(response.data);
      } catch (error) {
        console.error('Error fetching train data:', error);
        toast.error('No trains available.');
      }
    };


    if (searchData.from && searchData.to && searchData.date) {
      fetchData(); // Fetch data when search button is clicked
    } else {
      toast.error('Please select source, destination, and date.');
    }
  };

  const filteredDestinations = routes.filter(route => route.source === searchData.from);

  return (
    <>
      <div className='container-fluid d-flex justify-content-center align-items-start trainList'>
        {/* Sidebar */}
        <div className={`container mt-4 d-flex flex-column justify-content-space-between align-items-center trainListLeft`} style={{ width: hideSidebar ? '5%' : '25%', transition: 'ease-in-out 0.5s' }}>
          <div
            className='border border-2 border-primary d-flex justify-content-center align-items-center '
            style={{
              height: hideSidebar ? '30px' : '70px',
              width: hideSidebar ? '30px' : '70px',
              borderRadius: '50%',
            }}
            onClick={() => setHideSidebar(hideSidebar => !hideSidebar)}
          >
            <i
              className='bi bi-funnel text-primary'
              style={{ fontSize: hideSidebar ? '15px' : '50px' }}
            ></i>
          </div>
          {!hideSidebar && (
            <>
              <select
                className='form-select my-2'
                value={searchData.from}
                onChange={e => updateSearchData('from', e.target.value)}
              >
                <option value=''>Select Source</option>
                {routes.map((route, index) => (
                  <option key={index} value={route.source}>
                    {route.source}
                  </option>
                ))}
              </select>
              <select
                className='form-select my-2'
                value={searchData.to}
                onChange={e => updateSearchData('to', e.target.value)}
              >
                <option value=''>Select Destination</option>
                {filteredDestinations.map((route, index) => (
                  <option key={index} value={route.destination}>
                    {route.destination}
                  </option>
                ))}
              </select>
              <div className='row my-3'>
                <div className='col-md-3'>
                  <label className='lh-1'>Date:</label>
                </div>
                <div className='col-md-9'>
                  <DatePicker
                    selected={searchData.date}
                    className='form-control'
                    dateFormat='dd/MM/yyyy'
                    onSelect={date => updateSearchData('date', date)}
                    onChange={date => updateSearchData('date', date)}
                  />
                </div>
              </div>

              <button
                className='btn btn-outline-primary'
                onClick={handleSearch}
              >
                <i className='bi bi-search mx-2'></i>Search
              </button>
            </>
          )}
          {hideSidebar && (
            <div className='text-center'>
              <span className='my-2'>From: <br />{searchData.from}</span>
              <hr />
              <i className=' my-2 bi bi-arrow-down'></i>
              <hr />
              <span className='my-2'>To: <br />{searchData.to}</span>
              <hr />
              <span className='my-2'>Date: <br />{`${searchData.date.getDate()}/${
                searchData.date.getMonth() + 1
              }/${searchData.date.getFullYear()}`}</span>
              <hr />
              <span className='my-2'>class: <br />{searchData.classType}</span>
            </div>
          )}
        </div>

        {/* Search Results */}
        <div className='container mt-4 trainList border-start border-dark' style={{ overflowY: 'auto', height: '100%', width: hideSidebar ? '95%' : '75%' }}>
          {trainData.map((result, index) => (
            //  console.log(result),
            <SearchCard key={index} data={result} duration={calculateDuration(result.departureTime, result.arrivalTime)} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TrainList;
