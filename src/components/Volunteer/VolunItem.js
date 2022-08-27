import React, { Fragment, useState } from 'react'
import './Volunteer.css'
import './Modal.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { setCurrent } from '../../Actions/volunActions';
import EditVolunteer from './EditVolunteer';
 

const VolunItem = ({volu,setCurrent}) => {

 
 const [editModal,setEditModal]= useState(false);
  return (

    <Fragment> 
<div className={editModal ?"Edit-box show-Edit-box"  : "Edit-box" }  >
                  <div className='Edit-box-content' style={{height:'fit-content'}}>
                  <EditVolunteer  setEditModal={setEditModal} />
                 
                    
                  </div>

            </div>




    <div>
        
        
    
        <li className="collection-item aa ">
          <div className='grid   ' style={{gridTemplateColumns: 'repeat(auto-fit, minmax(25rem, 1fr))'}}>

            <p className='fs-18' > Name : {volu.firstName} {' '} {volu.lastName}  {'   '} </p>
  
                    <p className='text-dark'  >
                      {'Blood Type is'}
                      <  span className='red-text fs-24' > {volu.bloodType}</span> 
                    </p> 
                    <p className='text-dark'  >
                     Phone :
                      <  span className='red-text fs-24' > {volu.tel}</span> 
                    </p> 
                    <p className='text-dark'  >
                    City :
                      <  span className='red-text fs-24' > {volu.city}</span> 
                    </p> 
                    <p className='text-dark'  >
                    Email :

                 
                    <a
          href='#editVolunteer'
          
          onClick={() => {setEditModal(true); setCurrent(volu) ; }  } className="text-blue fs-20" > {volu.Email}</a> 
    
                 </p> 
                
                

                

 <div>      <button className= "btn red secondary-content"  onClick={() => {setEditModal(true) ; setCurrent(volu) ; }    }> <a
          href='#editVolunteer'
          
         
          
        >
         Edit
        </a>  </button>
    
                 </div>
                 
            </div> 

          <div style={{position:'relative',
         borderBottom:'1px solid black',
         padding:'1rem',
         width:'80%',
         margin:'auto'
          }}></div>
    

        </li>
 
          
        
    
    </div>
    </Fragment>
  
  )
}

VolunItem.propTypes={
  volu:PropTypes.object.isRequired,
  setCurrent:PropTypes.func.isRequired
}
export default connect(null,{setCurrent}) ( VolunItem)
