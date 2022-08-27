import React, { useState } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addVolun } from "../../../Actions/volunActions";
import "./AddDonator.css";
import Navbar from "../../Navbar/Navbar";
import { RiAccountPinCircleFill, RiMailFill } from "react-icons/ri";
import { BiDonateBlood, BiPhone } from "react-icons/bi";
import BloodDonorMonth from "../../../assets/images/BloodDonorMonth.jpg";
import M from "materialize-css/dist/js/materialize.min.js";

const AddDonator = ({ addVolun }) => {
  const [form, setForm] = useState({
    Email: "",
    lastName: "",
    firstName: "",
    password: "",
    bloodType: "",
    tel: "",
    city: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      [name]: value,
    });
  };

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter the first and last name" });
    } else {
      const { Email, lastName, firstName, password, bloodType, city, tel } =
        form;
      const newvol = {
        firstName,
        lastName,
        Email,
        password,
        bloodType,
        tel,
        city,
      };
      addVolun(newvol);

      M.toast({ html: "Donor added     " });
      //clear Fields
      setForm({
        lastName: "",
        firstName: "",
        password: "",
        bloodType: "",
        tel: "",
        city: "",
      });
    }
  };

  const { Email, lastName, firstName, password, bloodType, city, tel } = form;

  return (
    <div className="  section-p" id="AddDonator" s>
      <Navbar />
      <div className="section-title">
        <h3 className="text-black">
          Give Blood <span className="text-dark"> </span>
        </h3>
        <p className="text-dark fs-20">We urgently need you to donate.</p>
      </div>
      <div className=" cont    grid ">
        <div className="row leftSide">
          <form className="col s12">
            <div className="row ">
              <div className=" input-field col s6 ">
                <i class="material-icons prefix">
                  <RiAccountPinCircleFill />
                </i>
                <input
                  style={inputstyle}
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={firstName}
                  onChange={handleChange}
                />
                <label for="firstName" style={styleLabel}>
                  First Name
                </label>
              </div>

              <div className="input-field col s6">
                <i class="material-icons prefix">
                  <RiAccountPinCircleFill />
                </i>
                <input
                  style={inputstyle}
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="validate"
                  value={lastName}
                  onChange={handleChange}
                />
                <label style={styleLabel} for="lastName">
                  Last Name
                </label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <i class="material-icons prefix">
                  <RiMailFill />
                </i>
                <input
                  style={inputstyle}
                  id="Email"
                  name="Email"
                  type="email"
                  className=""
                  value={Email}
                  onChange={handleChange}
                />
                <label style={styleLabel} for="Email">
                  Email
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i class="material-icons prefix">
                  <RiMailFill />
                </i>
                <input
                  style={inputstyle}
                  id="password"
                  name="password"
                  type="password"
                  className=""
                  value={password}
                  onChange={handleChange}
                />
                <label style={styleLabel} for="password">
                  Password
                </label>
              </div>
            </div>
            <div class="input-field col s12">
              <i class="material-icons  fs-28">
                <BiDonateBlood />
              </i>
              <select
                name="bloodType"
                style={selectStyle}
                value={bloodType}
                onChange={handleChange}
              >
                <option value="">Choose your Blood</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div className="row ">
              <div className="input-field col s6">
                <i class="material-icons prefix">
                  <BiPhone />
                </i>
                <input
                  style={inputstyle}
                  id="tel"
                  name="tel"
                  type="text"
                  className="validate"
                  value={tel}
                  onChange={handleChange}
                />
                <label style={styleLabel} for="tel">
                  Enter your Phone
                </label>
              </div>

              <div className="input-field col s6">
                <i class="material-icons prefix">
                  <BiPhone />
                </i>
                <input
                  style={inputstyle}
                  id="city"
                  name="city"
                  type="text"
                  className="validate"
                  value={city}
                  onChange={handleChange}
                />
                <label style={styleLabel} for="city">
                  Enter your City
                </label>
              </div>
            </div>

            <a
              href="#!"
              onClick={onSubmit}
              className="  waves-effect  red  btn"
            >
              Submit
            </a>
          </form>
        </div>

        <div className="rightSide">
          <div className="imageRightSide">
            <img src={BloodDonorMonth}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
const styleLabel = {
  fontSize: "2rem",
  color: "grey",
};
const inputstyle = {
  fontSize: "2rem",
  padding: "5px",
  height: "4rem",
};

const selectStyle = {
  display: "block",
  height: "4rem",
  background: "transparent",
  border: "1px solid grey ",
  fontSize: "2rem",
};

AddDonator.propTypes = {
  addVolun: PropTypes.func.isRequired,
};

export default connect(null, { addVolun })(AddDonator);
