import React from 'react'
import './Contact.css'
import contact from '../../assets/images/contact.png'
import { RiMailFill } from 'react-icons/ri'
const Contact = () => {
  return (
    <div className=' container  ' id ='Contact'>
         <div className='Contact-content'>
                <div className='section-title'>
                    <h3 className='text-brown'>Contact <span className='text-dark'>US</span></h3>
                    
                </div>
                <div className="row gridContact">

<div className="image">
<img src={contact}></img>
</div>

<form  >
<h3>We are proud to contact us </h3>

<div className="row">
        <div className="input-field  ">
        <i class="material-icons prefix"><RiMailFill/></i>
          <input style={inputstyle}id="email" type="email"  
           
          
          />
           
        </div>
 
   
       
        <textarea className='textarea' />  
         
          
     
           
     
        <button className='btn red secondary-content'> Send</button>
      </div> 
      
      
</form>

</div>





                </div> 



                </div>  
  )
}
const inputstyle={
  
    fontSize:'2rem',  
    height:'4rem'
  }
  

export default Contact
