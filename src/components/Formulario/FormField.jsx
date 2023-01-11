import React from "react";

const FormField = ({label,name,value,onChange}) => {
  return (
    <div className="mb-3">
      <label className="form-label">
       {label}
      </label>
      <input
        name={name}
        onChange={onChange}
        type={name==='dni' ? 'number' : name === 'email' ? 'email' : 'text'}
        value={value}
        className="form-control"
        aria-describedby="emailHelp"
      />
    </div>
  );
};

export default FormField;
