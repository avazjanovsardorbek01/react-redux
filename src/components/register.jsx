import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../constants";
import Input from "../ui/input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUserStart,
  registerUserFailure,
  registerUserSuccess,
} from "../slice/auth";
import AuthService from "../service/auth";
import Validation from "./validation.jsx";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const handleRegister = async (e) => {
    e.preventDefault();

    dispatch(registerUserStart());

    const user = {
      username: name,
      email: email,
      password: password,
    };

    try {
      const response = await AuthService.UserRegister(user);

      console.log("Response:", response);
      console.log("Data:", response.data);

      dispatch(registerUserSuccess(response.data.user));
    } catch (error) {
      console.log("Ошибка:", error.response?.data);

      dispatch(registerUserFailure(error.response?.data.errors));
    }
  };
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
        <Validation />
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

          <button
            className="btn btn-warning w-100 py-2 fw-bold"
            type="submit"
            onClick={handleRegister}
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>

        <hr />
      </div>
    </div>
  );
};

export default Register;
