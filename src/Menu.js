


import './App.css';
import React from 'react'
import BloodImg2 from './BloodImg2.png'
import { useNavigate } from 'react-router-dom';
function Menu(){
  const navigate = useNavigate();
  function openD(){
    
    navigate('/GetDonors')
  }
  function openP(){
    navigate('/Profile')
  }
  function openN(){
    navigate('/Notification')
  }

    return(
    <>
<div className="head">
        BLOODY <span id='h12'>SWEET</span>
      </div>
      
      <nav>
       
        <div className="right">
            <ul>
            <li onClick={openD}>Donors</li>
           
            <li >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16" onClick={openP}>
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>  </li>
<li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16" onClick={openN}>
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
</svg></li>
            
            </ul>
        </div>
    </nav>
      <img src={BloodImg2} id='backgroundImg' alt='Pic here'></img>
      



      
<section>
  <h1>Our office location</h1>
  <iframe title='Map' id="map"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.0725193726585!2d80.63069807600675!3d16.52243612714423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e557db115951%3A0x48da35944f468788!2s23-22-120%2C%20Sivalayam%20Rd%2C%20Satyaranayana%20Puram%2C%20Vijayawada%2C%20Andhra%20Pradesh%20520011!5e0!3m2!1sen!2sin!4v1689000982327!5m2!1sen!2sin"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</section>

      <footer>
  <p >Bloody-Sweet</p>
  <div ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16">
      <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z"/>
    </svg >  All rights reserved</div></footer>
  

      </>);
      
    }
export default Menu;