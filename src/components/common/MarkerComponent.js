import React from "react";
import marker from "../../resources/images/markers.png";
import ReactTooltip from "react-tooltip";
import PropTypes from "prop-types";

const MarkerComponent = ({ lat, lng }) => {
  return (
    <div align="center">
      <img data-tip data-for="global" className="img-sized" src={marker} />

      <ReactTooltip id="global" aria-haspopup="true">
        <p>You location detail: </p>
        <ul>
          <li>Longitude:{lat} </li>
          <li>Latitude : {lng}</li>
        </ul>
      </ReactTooltip>
    </div>
  );
};
MarkerComponent.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};
export default MarkerComponent;
