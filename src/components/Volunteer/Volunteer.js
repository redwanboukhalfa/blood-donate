import React, { useEffect, useState } from "react";
import "./Volunteer.css";
import { connect } from "react-redux";
import VolunItem from "./VolunItem";
import PropTypes from "prop-types";
import Preloader from "../layout/Preloader";
import SearchBar from "../layout/SearchBar";
import { getVolun } from "../../Actions/volunActions";

const Volunteer = ({ volun: { voluns, loading }, getVolun }) => {
  //const   [volunteers,setvolunteers]=useState([]);
  //const [loading,setLoading]=useState(false);

  useEffect(() => {
    getVolun();
  }, []);

  //const getVolun = async ()=>{
  // setLoading(true);
  //const  res = await fetch('/volunteers');
  //const data = await res.json();
  //setvolunteers(data);
  //console.log(data);

  //setLoading(false);

  //}

  if (!loading && voluns === null) {
    return <Preloader />;
  }

  const TextHelper = (
    <>
      {!loading && voluns.length === 0 ? (
        <p className="center"> Search for your blood </p>
      ) : (
        voluns.map((volu) => <VolunItem volu={volu} key={volu.id} />)
      )}
    </>
  );

  return (
    <div className="  section-p" id="Volunteer">
      <div className="container">
        <div className="section-title">
          <h3 className="text-brown">
            Volunteers <span className="text-dark"> </span>
          </h3>
          <p className="text">Find blood types.</p>
        </div>

        <SearchBar />

        <ul
          className="collection with-header"
          style={{
            height: "50vh",
            overflowY: "scroll",
          }}
        >
          <li className="collection-header">
            <h4 className="center"> list of donaters</h4>
          </li>
          {!loading && voluns.length === 0
            ? { TextHelper }
            : voluns.map((volu) => <VolunItem volu={volu} key={volu.id} />)}
        </ul>
      </div>
    </div>
  );
};

Volunteer.propTypes = {
  volun: PropTypes.object.isRequired,
  getVolun: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  volun: state.volun,
});

export default connect(mapStateToProps, { getVolun })(Volunteer);
