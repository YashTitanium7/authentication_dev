import React from "react";

const FormInp = ({ ftype, fname, fid, fcname }) => {
  return (
    <>
      <input
        type={ftype || "text"}
        name={fname}
        id={fid}
        className={`yash-form-inp ${fcname}` || "yash-form-inp"}
      />
    </>
  );
};

export default FormInp;
