import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
});

export const ENDPOINTS = {
  traffic: {
    getCountryTraffic: "/api/traffic/countries",
    getVehicleTypeTraffic: "/api/traffic/vehicle-types",
  },
};
