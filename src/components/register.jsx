import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../constants";
import Input from "../ui/input";
import { useState } from "react";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      className="container-fluid bg-light d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card shadow-lg border-0 rounded-4 p-4"
        style={{ width: "420px" }}
      >
        <div className="text-center mb-4">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "150px" }}
            className="mb-3"
          />

          <h2 className="fw-bold">Please Register</h2>
          <p className="text-muted">
            Добро пожаловать! Создайте новый аккаунт.
          </p>
        </div>

        <form>
          <Input label={"Username"} state={name} setState={setName} />
          <Input
            label={"Email"}
            type="email"
            state={email}
            setState={setEmail}
          />
          <Input
            label={"Password"}
            type="password"
            state={password}
            setState={setPassword}
          />

          <button className="btn btn-warning w-100 py-2 fw-bold" type="submit">
            Sign In
          </button>
        </form>

        <hr />
      </div>
    </div>
  );
};

export default Register;
