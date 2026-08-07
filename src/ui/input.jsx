import React from "react";

const Input = ({ label, state, setState, type = "text" }) => {
  return (
    <div className="mb-3">
      <label className="form-label fw-semibold">{label}</label>
      <input
        type={type}
        className="form-control form-control-lg"
        placeholder={label}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
};

export default Input;
