import React, { useState, useContext } from 'react';

const TrainContext = React.createContext();

export function useAuth() {
  return useContext(TrainContext);
}

export function TrainProvider(props) {
  const [selectedTrain, setSelectedTrain] = useState({
    trainName: '',
    trainNumber: '',
    departureTime: '',
    departureStation: '',
    arrivalTime: '',
    arrivalStation: '',
    duration: '',
    classTypes: '',
    date:''
  });

  const trainList = [
    {
          trainName: 'Ahmedabad Express',
          trainNumber: '22690',
          runsOn: '1000000',
          scheduleLink: 'http://ahmedabad-express-schedule.com',
        
        stations: [
          {
            stationName: 'Yesvantpur',
            departureTime: '16:45',
            arrivalTime: 'starts',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 30 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 15 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'AVL', seatNumber: 5 },
            },
          },
          {
            stationName: 'Guntakal Jn',
            departureTime: '21:30',
            arrivalTime: '21:25',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 25 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 12 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'AVL', seatNumber: 6 },
            },
          },
          {
            stationName: 'Adoni',
            departureTime: '22:30',
            arrivalTime: '22:29',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 25 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 12 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'AVL', seatNumber: 6 },
            },
          },
          {
            stationName: 'Manthralayam Rd',
            departureTime: '23:05',
            arrivalTime: '23:04',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 25 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 12 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'AVL', seatNumber: 6 },
            },
          },
          {
            stationName: 'Raichur',
            departureTime: '23:30',
            arrivalTime: '23:28',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 25 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 12 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'AVL', seatNumber: 6 },
            },
          },
          {
            stationName: 'Wadi',
            departureTime: '01:30',
            arrivalTime: '01:25',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 25 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 12 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'AVL', seatNumber: 6 },
            },
          },
          {
            stationName: 'Kalaburagi',
            departureTime: '02:05',
            arrivalTime: '02:02',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 25 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 12 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'AVL', seatNumber: 6 },
            },
          },
          {
            stationName: 'Solapur Jn',
            departureTime: '03:55',
            arrivalTime: '03:50',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 25 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 12 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'AVL', seatNumber: 6 },
            },
          },
          {
            stationName: 'Daund Jn',
            departureTime: '06:30',
            arrivalTime: '06:25',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 25 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 12 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'AVL', seatNumber: 6 },
            },
          },
          {
            stationName: 'Wadi',
            departureTime: '01:30',
            arrivalTime: '01:25',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 25 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 12 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'AVL', seatNumber: 6 },
            },
          },
          {
            stationName: 'Wadi',
            departureTime: '01:30',
            arrivalTime: '01:25',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 25 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 12 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'AVL', seatNumber: 6 },
            },
          },
        ],
      },
      {
        trainDetails: {
          trainName: 'Surat Express',
          trainNumber: '10002',
          runsOn: 'W F S',
          scheduleLink: 'http://surat-express-schedule.com',
        },
        stations: [
          {
            stationName: 'Vadodara',
            departureTime: '09:00',
            arrivalTime: '11:30',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 25 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 12 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'AVL', seatNumber: 6 },
            },
          },
          {
            stationName: 'Surat',
            departureTime: '12:00',
            arrivalTime: '14:45',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 18 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 8 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'WL', seatNumber: 5 },
            },
          },
          // Add more stations and details as needed
        ],
      },
      {
        trainDetails: {
          trainName: 'Rajkot Express',
          trainNumber: '10003',
          runsOn: 'T S',
          scheduleLink: 'http://rajkot-express-schedule.com',
        },
        stations: [
          {
            stationName: 'Ahmedabad',
            departureTime: '07:30',
            arrivalTime: '10:00',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 28 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 14 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'WL', seatNumber: 7 },
            },
          },
          {
            stationName: 'Rajkot',
            departureTime: '11:30',
            arrivalTime: '15:15',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 22 },
              'First Class': { classType: 'First Class', status: 'AVL', seatNumber: 9 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'WL', seatNumber: 4 },
            },
          },
          // Add more stations and details as needed
        ],
      },
      {
        trainDetails: {
          trainName: 'Bhavnagar Express',
          trainNumber: '10004',
          runsOn: 'M W F',
          scheduleLink: 'http://bhavnagar-express-schedule.com',
        },
        stations: [
          {
            stationName: 'Ahmedabad',
            departureTime: '06:45',
            arrivalTime: '09:30',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 26 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 13 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'AVL', seatNumber: 6 },
            },
          },
          {
            stationName: 'Bhavnagar',
            departureTime: '10:45',
            arrivalTime: '14:30',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 24 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 11 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'WL', seatNumber: 3 },
            },
          },
          // Add more stations and details as needed
        ],
      },
      {
        trainDetails: {
          trainName: 'Anand Express',
          trainNumber: '10005',
          runsOn: 'T Th S',
          scheduleLink: 'http://anand-express-schedule.com',
        },
        stations: [
          {
            stationName: 'Ahmedabad',
            departureTime: '08:30',
            arrivalTime: '11:00',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 22 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 10 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'WL', seatNumber: 8 },
            },
          },
          {
            stationName: 'Anand',
            departureTime: '12:15',
            arrivalTime: '14:45',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'AVL', seatNumber: 18 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 9 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'WL', seatNumber: 5 },
            },
          },
          // Add more stations and details as needed
        ],
      },
      {
        trainDetails: {
          trainName: 'Jamnagar Express',
          trainNumber: '10006',
          runsOn: 'M W F',
          scheduleLink: 'http://jamnagar-express-schedule.com',
        },
        stations: [
          {
            stationName: 'Ahmedabad',
            departureTime: '09:15',
            arrivalTime: '11:45',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 28 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 12 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'AVL', seatNumber: 7 },
            },
          },
          {
            stationName: 'Jamnagar',
            departureTime: '13:30',
            arrivalTime: '16:45',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 25 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 11 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'WL', seatNumber: 4 },
            },
          },
          // Add more stations and details as needed
        ],
      },
      {
        trainDetails: {
          trainName: 'Vapi Express',
          trainNumber: '10007',
          runsOn: 'T S',
          scheduleLink: 'http://vapi-express-schedule.com',
        },
        stations: [
          {
            stationName: 'Surat',
            departureTime: '09:45',
            arrivalTime: '11:30',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 24 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 11 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'AVL', seatNumber: 6 },
            },
          },
          {
            stationName: 'Vapi',
            departureTime: '12:45',
            arrivalTime: '14:15',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 20 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 9 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'WL', seatNumber: 5 },
            },
          },
          // Add more stations and details as needed
        ],
      },
      {
        trainDetails: {
          trainName: 'Porbandar Express',
          trainNumber: '10008',
          runsOn: 'M T W',
          scheduleLink: 'http://porbandar-express-schedule.com',
        },
        stations: [
          {
            stationName: 'Rajkot',
            departureTime: '08:15',
            arrivalTime: '10:45',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 22 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 10 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'AVL', seatNumber: 8 },
            },
          },
          {
            stationName: 'Porbandar',
            departureTime: '12:30',
            arrivalTime: '15:45',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 18 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 9 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'WL', seatNumber: 5 },
            },
          },
          // Add more stations and details as needed
        ],
      },
      {
        trainDetails: {
          trainName: 'Ankleshwar Express',
          trainNumber: '10009',
          runsOn: 'W F S',
          scheduleLink: 'http://ankleshwar-express-schedule.com',
        },
        stations: [
          {
            stationName: 'Surat',
            departureTime: '07:45',
            arrivalTime: '09:30',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 20 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 8 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'AVL', seatNumber: 6 },
            },
          },
          {
            stationName: 'Ankleshwar',
            departureTime: '10:30',
            arrivalTime: '12:15',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 16 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 7 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'WL', seatNumber: 3 },
            },
          },
          // Add more stations and details as needed
        ],
      },
      {
        trainDetails: {
          trainName: 'Gandhidham Express',
          trainNumber: '10010',
          runsOn: 'T Th S',
          scheduleLink: 'http://gandhidham-express-schedule.com',
        },
        stations: [
          {
            stationName: 'Ahmedabad',
            departureTime: '09:30',
            arrivalTime: '11:45',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 24 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 9 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'AVL', seatNumber: 5 },
            },
          },
          {
            stationName: 'Gandhidham',
            departureTime: '13:00',
            arrivalTime: '16:30',
            available: true,
            seatAvailable: {
              Sleeper: { classType: 'Sleeper', status: 'WL', seatNumber: 22 },
              'First Class': { classType: 'First Class', status: 'WL', seatNumber: 11 },
              'AC Chair Car': { classType: 'AC Chair Car', status: 'WL', seatNumber: 4 },
            },
          },
          // Add more stations and details as needed
        ],
      },
  ]

  const value = {
    selectedTrain,
    setSelectedTrain,
  };

  return (
    <TrainContext.Provider value={value}>
      {props.children}
    </TrainContext.Provider>
  );
}
