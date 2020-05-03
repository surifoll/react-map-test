import React from "react";
import PropTypes from "prop-types";

const FancyButton = ({ text, ClickHandler }) => {
  return (
    <div className="button_cont">
      <a
        className="example_d"
        href="#"
        rel="nofollow noopener"
        onClick={ClickHandler}
      >
        {text}
      </a>
    </div>
  );
};

FancyButton.propTypes = {
  text: PropTypes.string.isRequired,
  ClickHandler: PropTypes.func.isRequired,
};
export default FancyButton;
