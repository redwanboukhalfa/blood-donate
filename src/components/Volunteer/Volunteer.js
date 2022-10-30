import React, { useEffect } from "react";
import "./Volunteer.css";
import { connect } from "react-redux";
import VolunItem from "./VolunItem";
import PropTypes from "prop-types";
import Preloader from "../layout/Preloader";
import SearchBar from "../layout/SearchBar";
import { getVolun } from "../../Actions/volunActions";

const Volunteer = ({ volun: { voluns, loading }, getVolun }) => {
  useEffect(() => {
    getVolun();
  }, []);

  if (!loading && voluns === null) {
    return <Preloader />;
  }

  // const TextHelper = (
  //   <>
  //     {!loading && voluns.length === 0 ? (
  //       <p className="center"> Search for your blood </p>
  //     ) : (
  //       voluns.map((volu) => <VolunItem volu={volu} key={volu.id} />)
  //     )}
  //   </>
  // );

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
            <h2 className="center"> List of donaters</h2>
            {!loading && voluns.length === 0 ? (
              <h4 className="">No Valunteers to show</h4>
            ) : (
              voluns.map((volu) => <VolunItem volu={volu} key={volu.id} />)
            )}
          </li>
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
