import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../constants";
import Input from "../ui/input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserStart } from "../slice/auth";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  // console.log(auth);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUserStart());
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

          <h2 className="fw-bold">Please Login</h2>
          <p className="text-muted">
            Добро пожаловать! Войдите в свой аккаунт.
          </p>
        </div>

        <form>
          <Input label={"Email"} type="email" state={email} />
          <Input label={"Password"} type="password" state={password} />

          <button
            disabled={isLoading}
            className="btn btn-warning w-100 py-2 fw-bold"
            type="submit"
            onClick={handleLogin}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <hr />

        <div className="text-center">
          <span className="text-muted">Нет аккаунта?</span>

          <Link to="/register" className="text-decoration-none fw-bold ms-2">
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
