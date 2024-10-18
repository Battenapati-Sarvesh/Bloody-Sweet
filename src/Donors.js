
import axios from 'axios';
import { useState, useEffect } from 'react';


function DonorsList() {
    const [donors, setDonors] = useState([]);
    const [error, setError] = useState('');

    function sendNotification(){
        
    }
    useEffect(() => {
        axios.get('http://localhost:8080/Find/AllDonors') 
            .then(response => {
                setDonors(response.data);
            })
            .catch(error => {
                setError('Error fetching donors');
                console.error('There was an error fetching the donors!', error);
            });
    }, []);

    return (
<>
        <div className="head">
        BLOODY <span id='h12'>SWEET</span>
      </div>
        <div>
            <h2 className="head">Donors List</h2>
            {error && <p>{error}</p>}

            <ul class="card-container">
  {donors.map(donor => (
    <li key={donor.id} class="card">
      <h2>{donor.name}</h2>
      <p>Blood Group: {donor.bloodGroup}</p>
      <p>Location: {donor.state}</p>
      <p>City: {donor.city}</p>
      <p>Zip:  {donor.zip}</p>
      <button onClick={sendNotification}>Request Blood</button>
    </li>
  ))}
</ul>
        </div></>
    );
}

export default DonorsList;
