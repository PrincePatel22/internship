import React from "react";

const Addlocation = () => {
  return (
    <>
      <div className="col-sm-6 mb-3">
        <label>Building ID </label>
        <input
          type="text"
          name="id"
          id="id"
          className="input-field"
        //   onChange={(e) => {
        //     setFirstname(e.target.value);
        //   }}
        />
      </div>
      <div className="col-sm-6 mb-3">
        <label>Address</label>
        <input
          type="text"
          name="address"
          id="address"
          className="input-field"
        //   onChange={(e) => {
        //     setLastname(e.target.value);
        //   }}
        />
      </div>
    </>
  );
};

export default Addlocation;
