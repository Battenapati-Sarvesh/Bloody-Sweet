
import './App.css';
import GetDonors from './GetDonors';
import Login  from './login';
import Register from './register'
import { BrowserRouter as Router, Route, Routes , Navigate } from 'react-router-dom';
import Donors from './Donors'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu'
import Profile from './Profile';
import Notification from './Notification';

//<div className="head">
//BLOODY <span id='h12'>SWEET</span>
//</div>
function App() {
 
  return (
    
<>
    <Router>

      <Routes>

     
     <Route path="/register" element={<Register />} />
  <Route path="*" element={<Navigate to="/register" />} />

  <Route path="/login" element={<Login />} />
  <Route path="*" element={<Navigate to="/login" />} />

  <Route path="/Donors" element={<Donors />} />
  <Route path="*" element={<Navigate to="/Donors" />} />

  <Route path="/GetDonors" element={<GetDonors />} />
  <Route path="*" element={<Navigate to="/GetDonors" />} />

  <Route path="/Menu" element={<Menu />} />
  <Route path="*" element={<Navigate to="/Menu" />} />

  <Route path="/Profile" element={<Profile />} />
  <Route path="*" element={<Navigate to="/Profile" />} />

  <Route path="/Notification" element={<Notification />} />
  <Route path="*" element={<Navigate to="/Notification" />} />
      </Routes>
      </Router>
      </>
  );
}

export default App;
