import React from "react";

const Action = ({ className, handleClick, type }) => {
  return (
    <div className={className} onClick={handleClick}>
      {type}
    </div>
  );
};
export default Action;
