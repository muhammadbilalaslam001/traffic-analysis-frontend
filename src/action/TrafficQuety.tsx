"use server";
import { axiosInstance, ENDPOINTS } from "@/config/api-config";
import { TrafficSummaryResponse } from "@/types/traffic";
import axios from "axios";


export async function getCountryTraffic() {
  try {
    const response = await axiosInstance.get<TrafficSummaryResponse>(
      ENDPOINTS.traffic.getCountryTraffic
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    } else {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      console.error("Error in getting country traffic data: ", errorMessage);
      return { errorMessage };
    }
  }
}

export async function getVehicleTypeTraffic() {
  try {
    const response = await axiosInstance.get<TrafficSummaryResponse>(
      ENDPOINTS.traffic.getVehicleTypeTraffic
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    } else {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      console.error(
        "Error in getting vehicle type traffic data: ",
        errorMessage
      );
      return { errorMessage };
    }
  }
}