import React from "react";

const SingleWatch = ({id,image,category}) => {
  return (
    <div>
      <h2>Watch name</h2>
      <div>
        <img src={image} alt="Cover Pic" />
      </div>
      <div>
        <div>{category}</div>
      </div>
    </div>
  );
};

export default SingleWatch;
