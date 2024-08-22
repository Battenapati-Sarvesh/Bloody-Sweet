import React, { useState } from 'react';
import axios from './axios';

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    state: "",
    city: "",
    zip: "",
    phoneNumber: "",
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/DonorDetails', formData)
      .then(response => {
        console.log('Data submitted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error submitting data:', error);
      });
  };

  return (
    <>
      <div className="head">
        BLOODY <span id='h12'>SWEET</span>
      </div>
      <h2 id='registerH'>Registration form</h2>
      <form id='RegisterForm' onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="inputName">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />

          <div className="form-groupBG">
            <label htmlFor="inputBG">Blood Group</label>
            <select
              id="inputBG"
              className="form-control"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
            >
              <option value="" disabled>Choose your blood group</option>
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
              <option value="...">...</option>
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

          <div className="form-groupPH">
            <label htmlFor="inputPH">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="inputPH"
              name="phoneNumber"
              placeholder="Enter your mobile number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-groupemail">
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-grouppassword">
            <label htmlFor="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              name="password"
              placeholder="Set your Password here"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    </>
  );
}

export default Register;
