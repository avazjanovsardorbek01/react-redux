import React from "react";
import { useSelector } from "react-redux";

const Validation = () => {
  const { error } = useSelector((state) => state.auth);

  if (!error) {
    return null;
  }

  const messages =
    typeof error === "string"
      ? [error]
      : Object.values(error).flatMap((value) =>
          Array.isArray(value) ? value : [String(value)],
        );

  return (
    <div className="mb-3">
      {messages.map((msg, index) => (
        <div
          key={index}
          className="alert alert-danger m-1 p-2 text-start"
          role="alert"
        >
          {msg}
        </div>
      ))}
    </div>
  );
};

export default Validation;
