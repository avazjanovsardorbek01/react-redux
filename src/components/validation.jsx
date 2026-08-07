import React from "react";
import { useSelector } from "react-redux";
import { useCallback } from "react";
const Validation = () => {
  const { error } = useSelector((state) => state.auth);
  console.log("Validation error:", error);

  const errorMessage = useCallback(() => {
    return Object.keys(error).map((name) => {
      const msg = error[name].join(", ");
      return msg;
    });
  }, [error]);

  console.log(error !== null && errorMessage());

  return (
    error !== null &&
    errorMessage().map((msg, index) => (
      <div key={index} className="alert alert-danger m-1 p-1 text-start " role="alert">
        {msg}
      </div>
    ))
  );
};

export default Validation;
