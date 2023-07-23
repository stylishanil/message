import {useState} from 'react'

import './App.css'

const App = () => {
  // State variables
  const [pointA, setPointA] = useState('')
  const [pointB, setPointB] = useState('')
  const [date, setDate] = useState('')
  const [vehicles, setVehicles] = useState([])

  // Dummy JSON data for available vehicles
  const dummyData = [
    {id: 1, name: 'Car', type: 'Sedan'},
    {id: 2, name: 'Car', type: 'SUV'},
    {id: 3, name: 'Van', type: 'Minivan'},
    {id: 4, name: 'Bus', type: 'Coach'},
  ]

  // Function to handle the search button click
  const handleSearch = () => {
    // Here you can make an API call using axios to get the actual data from the server.
    // For now, we'll use the dummyData as the response.

    // Simulate API call delay (remove this in a real API call)
    setTimeout(() => {
      setVehicles(dummyData)
    }, 1000)
  }

  return (
    <div>
      <h1 className="main-heading col-12">Airport Transfer Booking App</h1>
      <div className="direction1">
        <div>
          <label htmlFor="pointA">Point A:</label>
          <input
            type="text"
            id="pointA"
            value={pointA}
            onChange={e => setPointA(e.target.value)}
          />
        </div>
        <div className="space">
          <label htmlFor="pointB">Point B:</label>
          <input
            type="text"
            id="pointB"
            value={pointB}
            onChange={e => setPointB(e.target.value)}
          />
        </div>
      </div>
      <div className="direction1">
        <div className="space2">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <h2 className="main-heading col-12">Available Vehicles:</h2>
      <ul className="lists col-12">
        {vehicles.map(vehicle => (
          <li key={vehicle.id}>
            {vehicle.name} - {vehicle.type}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
