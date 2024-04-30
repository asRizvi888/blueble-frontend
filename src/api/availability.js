import axios from "axios";

const BASE_URL = "http://localhost:8080";
const BLUEBLE_TOKEN = localStorage.getItem("BLUEBLE_TOKEN");

const getAvailability = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/availability/get`, {
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${BLUEBLE_TOKEN}`,
        },
      });

      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
};

const addAvailability = async (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/availability/add`,
        payload,
        {
          headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${BLUEBLE_TOKEN}`,
          },
        },
      );

      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
};

const editAvailability = async (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/api/availability/edit/${payload?._id}`,
        payload,
        {
          headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${BLUEBLE_TOKEN}`,
          },
        },
      );

      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
};

const deleteAvailability = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/api/availability/delete/${id}`,
        {
          headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${BLUEBLE_TOKEN}`,
          },
        },
      );

      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
};

export {
  addAvailability,
  deleteAvailability,
  editAvailability,
  getAvailability,
};
