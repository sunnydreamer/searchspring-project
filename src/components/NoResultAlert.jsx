import React from "react";
import noResultImg from "../images/noResult.gif";

const NoResultAlert = () => {
  return (
    <div className="noResult py-16">
      <img src={noResultImg} alt="" />
    </div>
  );
};

export default NoResultAlert;
