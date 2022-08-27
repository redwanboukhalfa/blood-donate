import React from 'react'
import './Footer.css'
import { FaRegEnvelope ,FaClock, FaLocationArrow, FaPhoneAlt} from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='containerFooter'>
   <div class="box-container  ">

<div className="box">
    <FaRegEnvelope style={{fontSize:'3rem'}}/>  
    
  
   <h3>Our email</h3>
   <p>Redwanboukhalfa@gmail.com</p>
   <p>TariqKassri@gmail.com</p>
</div>

<div className="box">
 <FaClock style={{fontSize:'3rem'}}/>
   <h3>Opening hours</h3>
   <p>07:00am to 09:00pm</p>
</div>

<div className="box">
   <FaLocationArrow style={{fontSize:'3rem'}}/>
   <h3>  location</h3>
   <p>Algeria, M'sila - 28000</p>
</div>

<div className="box">
   <FaPhoneAlt style={{fontSize:'3rem'}}/>
   <h3>Our number</h3>
   <p>+213-665-32-45-21</p>
   <p>+213-664-31-00-11</p>
</div>

</div>

<div className="credit"> &copy; copyright @ 2022 by <span>mr. BOUKHALFA Radwane</span> | all rights reserved! </div>

    </div>
  )
}

export default Footer
