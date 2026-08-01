import axios from "./api";

const AuthService = {
  async UserRegister(user) {
    const response = await axios.post("/users", { user });
    return response;
  },

  async UserLogin(user) {
    const response = await axios.post("/users/login", { user });
    return response;
  },

  async getUser() {
    const response = await axios.get("/user");
    return response;
  },
};

export default AuthService;
