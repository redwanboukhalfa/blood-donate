import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { searchVolun } from "../../Actions/volunActions";
import PropTypes from "prop-types";
import { BiDonateBlood } from "react-icons/bi";

const SearchBar = ({ searchVolun }) => {
  const text = useRef("");
  const [clicked, setClicked] = useState(text);

  useEffect(() => {
    if (text.current.value.length === 0) {
      searchVolun(text);
    } else {
      searchVolun(text.current.value);
    }
  }, [clicked]);

  const onChange = (e) => {
    if (text.current.value.length === 0) {
      setClicked(text.current.value);
    } else {
      setClicked(text.current.value);
    }
  };

  return (
    <div>
      <nav
        style={{ marginBottom: "30px", borderRadius: "10px" }}
        className="bg-red"
      >
        <div className="nav-wrapper">
          <form>
            <div className="input-field  ">
              <input id="search" type="search" onChange={onChange} ref={text} />

              <label htmlFor="search">
                <i className="material-icons">
                  Search on the Blood Type that you need{" "}
                </i>
              </label>
              <i
                className="material-icons"
                onClick={() => {
                  text.current.value = "";
                  setClicked(text.current.value);
                }}
              >
                close
              </i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};
SearchBar.Prototype = {
  searchVolun: PropTypes.func.isRequired,
};
const selectStyle = {
  display: "block",
  height: "4rem",
  background: "transparent",
  border: "1px solid grey ",
  fontSize: "2rem",
};

export default connect(null, { searchVolun })(SearchBar);
