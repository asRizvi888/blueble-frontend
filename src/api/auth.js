import axios from "axios";

const BASE_URL = "http://localhost:8080";

const signup = async (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/auth/signup`, payload);

      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
};

const login = async (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/auth/login`, payload);

      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
};

const logout = async (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/auth/logout`, payload);

      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
};

export { login, logout, signup };
