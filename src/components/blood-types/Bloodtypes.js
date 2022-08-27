import React, {useState} from 'react';
import {bloodTypes} from "../../constants/data";
 import './Bloodtypes.css'

import {ImCancelCircle} from "react-icons/im";
import {AiOutlineEye} from "react-icons/ai";
import {Link} from 'react-router-dom'
 
 
const Bloodtypes = () => {

  const [imageModal, setImageModal] = useState(false);
    const [imageSource, setImageSource] =  useState("");
   
    const [nameSource, setNameSource] =  useState("");
    const [receiveSource, setreceiveSource] =  useState("");
 
        
 
      
  
    const setImageOnModal = (src) => {
      setImageModal(true);
      setImageSource(src.image);

      setNameSource(src.name);
      setreceiveSource(src.receive)
      
   
 
    
  }
  return (


    <div className='  section-p' id = "Bloodtypes"  >
<div className={imageModal ? "image-box show-image-box"  : "image-box"} >
            
            <div className='image-box-content' 
               style={{   borderRadius:"20px"}}>
            <div className="row "  
            style={{position:"relative", top:"-5px",borderRadius:"60px"}}>
             <div className="    m12"   >
           <div className="card" style={{ borderRadius:"20px"}}>
          <div className="card-image" >
        <img src = {imageSource} alt = "" />
          
        </div>
        <div className="card-content " style={{height:"33vh"}}>
        <h4  >Who can receive {nameSource} positive blood?</h4>
        <div className="collection with-header">
 
        <a to="#" className="collection-item "> {receiveSource}</a>
        
      </div>
         
         <div className='  text-center  '  >
         <h4  > Give Blood  for your brothers    </h4>
         <button type = "button" className='btn-item bg-brown fw-4 ls-2' onClick={() => setImageModal(false)}>
         <Link to = "/AddDonator" >Be a Donor </Link></button >
                 
     
     
         </div>
        </div>
      </div>
    </div>
  </div>
                
                
               

                <span className='image-box-close-btn' onClick={() => setImageModal(false)}>
                    <ImCancelCircle size = {30} />
                </span>

            </div>
        </div>

    <div className='container'>
            <div className='BloodTypes-content'>
                <div className='section-title'>
                    <h3 className='text-brown'>Bloode <span className='text-dark'>Types</span></h3>
                    <p className='text'>About different blood types.</p>
                </div>
                </div> 

                
                <div className=' blood-list grid'>
                    {
                        bloodTypes.map((bloodType, index) => {
                            return (
                                <div className='Blood-item text-center' key = {index} onClick = {() => setImageOnModal(bloodType)}>
                                    <img src = {bloodType.image} alt = "" />
                                  
                                    <span className='Blood-item-icon  '>
                                       
                                        <AiOutlineEye size = {45} className = "text-red  "  />
                                        <p className='fs-20 fw-5'>  learn more... </p> 
                                       
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>

                </div>




                 </div>
  )
}

export default Bloodtypes
