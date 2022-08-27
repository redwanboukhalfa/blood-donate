import React, { useState, useEffect, Fragment } from 'react';
 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { updateVolun } from '../../Actions/volunActions';
 
 
 import './Modal.css'
import { RiAccountPinCircleFill, RiMailFill } from 'react-icons/ri';
import { BiDonateBlood, BiPhone } from 'react-icons/bi';
import { ImCancelCircle } from 'react-icons/im';
 
 


const EditVolunteer = ({ current, updateVolun ,setEditModal}) => {

 

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [tel, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [isValid,setIsValid]= useState(false);
    const [isChek,setIsChek]= useState(true);
    const [checkPassWord,setCheckPassWord] =useState('');

  useEffect(() => {
    if (current) {
        setFirstName(current.firstName);
        setLastName(current.lastName);
        setEmail(current.Email);
        setPassword(current.password);
        setBloodType(current.bloodType); 
        setPhone(current.tel);
        setCity(current.city);
    }
  }, [current]);

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter a lastName and/or firstName' });
    } else {
      const upVolun = {
        id: current.id,
        firstName,
        lastName,
        Email,
        password,
        bloodType,
        tel,
        city
      };

      updateVolun(upVolun);
      M.toast({ html: `donor updated by ${upVolun.firstName}` });

      // Clear Fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setBloodType(''); 
      setPhone('');
      setCity('');

//close edit Modal
      setEditModal(false)

      setIsValid(false);
      setIsChek(true)
    }
  };

  return (
<Fragment  >
 <div className={ isChek  ? " input-field ":"hide-Edit-box "}  >  
 
<span className='Edit-box-close-btn' onClick={()=>{setEditModal(false)}}>
                    <ImCancelCircle size = {30} />
                </span>
                <br></br> 
   <h3> Please enter your password for continue...</h3>
<div className='input-field' >
                <i class="material-icons prefix"><RiAccountPinCircleFill/></i>
                <input style={inputstyle}id="password" type="password" className=""
                
                value={checkPassWord}
                onChange={e => setCheckPassWord(e.target.value)}
                />
                 
                </div>
                <a
          href='#!'
          onClick={()=>{

            if(checkPassWord===password){
              setIsValid(true);
              setIsChek(false)
              setCheckPassWord('');
            }else{
              M.toast({ html: 'Password incorrect please enter again' });
              setCheckPassWord('');
            }
          }}
          className=' btn red secondary-content'
        >
          Check
        </a>
        </div>
     
    
 
 

<div className={isValid ?"  "  : "hide-Edit-box" }   >

<span className='Edit-box-close-btn' onClick={()=>{setEditModal(false)}}>
                    <ImCancelCircle size = {30} />
                </span>
                <br></br>
  <div className="row " >
                <div className=" input-field col s6 " >
                <i class="material-icons prefix"><RiAccountPinCircleFill/></i>
                <input  style={inputstyle}  id="first_name" type="text" 
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                />
                
                </div>
                
                <div className="input-field col s6">
                <i class="material-icons prefix"><RiAccountPinCircleFill/></i>
                <input style={inputstyle}id="last_name" type="text" className=""
                
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                />
                 
                </div>
            </div>
            <div className="row">
        <div className="input-field col s12">
        <i class="material-icons prefix"><RiMailFill/></i>
          <input style={inputstyle}id="email" type="email" className=""
           value={Email}
           onChange={e => setEmail(e.target.value)}
          />
           
        </div>
      </div>

    <div class="input-field col s12" >
 <i class="material-icons  fs-28"><BiDonateBlood/></i> 
    <select style={selectStyle} 
   value={bloodType}
   onChange={e => setBloodType(e.target.value)}
    
    >
      <option value=""    >Choose your Blood</option>
      <option value="A+"  >A+</option>
      <option value="A-">A-</option>
      <option value="B+">B+</option>
      <option value="B-">B-</option>
      <option value="AB+">AB+</option>
      <option value="AB-">AB-</option>
      <option value="O+">O+</option>
      <option value="O-">O-</option>
    </select>
   
  </div>

                <div className="row " >
                      <div className="input-field col s6">
                        <i class="material-icons prefix"><BiPhone/></i>
                        <input style={inputstyle}id="phone" type="text" className=""
                        value={tel}
                        onChange={e => setPhone(e.target.value)}
                        />
                        

                </div>

                <div className="input-field col s6">
                        <i class="material-icons prefix"><BiPhone/></i>
                        <input style={inputstyle}id="city" type="text" className=""
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />
                        


                </div>

                <a
          href='#!'
          onClick={onSubmit}
          className=' btn red secondary-content'
        >
          Enter
        </a>
                </div>




 
     
  </div>
         
    
 
  </Fragment>


  )
};
 
const styleLabel={
  fontSize:'2rem' ,
  color:'grey'
}
const inputstyle={
  fontSize:'2rem', padding:'5px',
  height:'4rem'
}

const selectStyle={display: 'block' ,height:'4rem',background:'transparent',
border:'1px solid grey ',
fontSize:'2rem',
 
}



EditVolunteer.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func
};

const mapStateToProps = state => ({
  current: state.volun.current
});

export default connect(
  mapStateToProps,
  { updateVolun }
)(EditVolunteer);