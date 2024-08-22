
import './App.css';
import Login  from './login';
import Register from './register'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  var LoggedIn = false;
  var registered = false;

  if(!registered){
    return <Register/>
  }

  if(!LoggedIn){
    return <Login/>
  }
  return (
    <>
    <div className="head">
     BLOODY <span id='h12'>SWEET</span>
    </div>
   
         <div>
         <Login />
         Not a registered user ?? 
         <Register/>
       </div>
    
   
    </>


  );
}

export default App;
