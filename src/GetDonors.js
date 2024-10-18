import React, { useState } from 'react';
import axios from 'axios';

function GetDonors() {
  const [donors, setDonors] = useState([]);
  const [formData, setFormData] = useState({
    bloodGroup: "",
    state: "",
    city: "",
    zip: "",
    
  });
  
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.bloodGroup || !formData.state || !formData.city || !formData.zip) {
      setError('Please fill in all fields.');
      return;
    }

    axios.get('http://localhost:8080/Find/Donors', {
      params:{
        bloodGroup:formData.bloodGroup,
        state:formData.state,
        city:formData.city,
        zip:formData.zip
      }
    })
      .then(response => {
 
        setDonors(response.data);
        setError('');
        console.log('Data submitted successfully:', response.data);
      })
      .catch(error => {
        
        setError('Error submitting data. Please try again.');
        console.error('Error submitting data:', error);
      });
  };

  return (
    <>
      <div className="head">
        BLOODY <span id='h12'>SWEET</span>
      </div>
      <h2 id='registerH'>Get Donors</h2>
      <form id='RegisterForm' onSubmit={handleSubmit}>
        <div className="form-row">

          <div className="form-groupBG">
            <label htmlFor="inputBG">Blood Group</label>
            <select
              id="inputBG"
              className="form-control"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
            >
              <option value="" disabled>Choose the blood group</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          <div className="form-groupstate">
            <label htmlFor="inputState">State/Union Territory</label>
            <select
              id="inputState"
              className="form-control"
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="" disabled>Choose the state / Union Territory</option>
              <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chattisgarh">Chattisgarh</option>
              <option value="Dadra and Nagar Haveli and Daman & Diu">Dadra and Nagar Haveli and Daman & Diu</option>
              <option value="The Government of NCT of Delhi">The Government of NCT of Delhi</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu & Kashmir">Jammu & Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Ladakh">Ladakh</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>

          <div className="form-groupcity">
            <label htmlFor="inputCity">City</label>
            <select
              id="inputCity"
              className="form-control"
              name="city"
              value={formData.city}
              onChange={handleChange}
            >
              <option value="" disabled>Choose the city</option>
              <option value="Vijayawada">Vijayawada</option>
              <option value="Hyderabad">Hyderabad</option>
            </select>
          </div>

          <div className="form-groupzip">
            <label htmlFor="inputZip">Zip</label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              name="zip"
              placeholder="Area pin code"
              value={formData.zip}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary" >Get blood</button>
      </form>

      
      {error && <p style={{ color: 'red' }}>{error}</p>}

    
      <ul class="card-container">
  {donors.map(donor => (
    <li key={donor.id} className="card">
      <h2>{donor.name}</h2>
      <p>Blood Group: {donor.bloodGroup}</p>
      <p>Location: {donor.state}</p>
      <p>City: {donor.city}</p>
      <p>Zip:  {donor.zip}</p>
      <button>Request Blood</button>
    </li>
  ))}
</ul>
    </>
  );

}

export default GetDonors;
