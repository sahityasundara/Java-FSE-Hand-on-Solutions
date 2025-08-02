import React from 'react';
import './App.css';
import img1 from './images/img1.jpg';
import img2 from './images/img2.webp';
import img3 from './images/img3.jpg';

function App() {
  const pageHeading = "Office Space";

  const officeList = [
    {
      id: 1,
      name: "DBS",
      rent: 50000,
      address: "Chennai",
      image: img1
    },
    {
      id: 2,
      name: "Tech Park",
      rent: 75000,
      address: "Bangalore",
      image: img2
    },
    {
      id: 3,
      name: "Cyber City",
      rent: 45000,
      address: "Hyderabad",
      image: img3
    }
  ];

  return (
    <div className="App">
      <h1>{pageHeading}, at Affordable Range</h1>

      <div className="office-row">
        {officeList.map(office => (
          <div key={office.id} className="card">
            <img
              src={office.image}
              alt={office.name}
              className="office-img"
            />
            <h2>Name: {office.name}</h2>
            <h3 style={{ color: office.rent <= 60000 ? 'red' : 'green' }}>
              Rent: Rs. {office.rent}
            </h3>
            <h3>Address: {office.address}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
