import React, { useState } from 'react';
import axios from './axios'; // Assuming you have axios set up for requests
import { Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    image: null,
    name: "",
    bloodGroup: "",
    state: "",
    city: "",
    zip: "",
    phoneNumber: "",
    email: "",
    password: ""
  });
  
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    // If the input is of type file, set the image
    if (name === 'image') {
      setFormData({
        ...formData,
        image: files[0] // Get the first file
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.bloodGroup || !formData.state || !formData.city || !formData.zip || !formData.phoneNumber || !formData.email || !formData.password || !formData.image) {
      setError('Please fill in all fields.');
      return;
    }

    const data = new FormData();
    data.append('image', formData.image);
    data.append('name', formData.name);
    data.append('bloodGroup', formData.bloodGroup);
    data.append('state', formData.state);
    data.append('city', formData.city);
    data.append('zip', formData.zip);
    data.append('phoneNumber', formData.phoneNumber);
    data.append('email', formData.email);
    data.append('password', formData.password);

    try {
      const response = await axios.post('http://localhost:8080/register/DonorDetails', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(response.data);
      setError('');
      console.log('Data submitted successfully:', response.data);
    } catch (error) {
      setMessage('');
      setError('Error submitting data. Please try again.');
      console.error('Error submitting data:', error);
    }
  };

  return (
    <>
      <div className="head">
        BLOODY <span id='h12'>SWEET</span>
      </div>
      <h2 id='registerH'>Registration form</h2>
      <form id='RegisterForm' onSubmit={handleSubmit}>
        <div className="form-row">
          <div className='pic'>Upload your picture here!!
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </div>

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
              {/* Add options here */}
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
              {/* Add city options here */}
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

        <button type="submit" className="btn btn-primary">Register</button>
      </form>

      {message && <p>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </>
  );
}

export default Register;
