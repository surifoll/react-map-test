import React from "react";
import PropTypes from "prop-types";

const FancyButton = ({ text, ClickHandler }) => {
  return (
    <div className="fancy-button-sized" align="center">
      <div className="col-md-3 col-sm-3 col-xs-6">
        <div className="checkBox">
          {text}
          <svg
            width="140"
            height="65"
            viewBox="0 0 140 65"
            xmlns=""
            type="button"
            onClick={ClickHandler}
          >
            <rect x="10" className="button" width="128.8" height="63.9" />
            <rect x="0" y="22.5" className="box" width="20" height="20" />
            <polyline
              className="checkMark"
              points="4.5,32.6 8.7,36.8 16.5,29.1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

FancyButton.propTypes = {
  text: PropTypes.string.isRequired,
  ClickHandler: PropTypes.func.isRequired,
};
export default FancyButton;
