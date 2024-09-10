import { API_LINK } from "@/constants";
import axios from "axios";

const instanse = axios.create({
    baseURL: API_LINK,
});

instanse.interceptors.request.use((config) => {
    config.headers.Authorization = typeof window !== undefined ? `Bearer ${typeof window !== "undefined" ? `Bearer ${window.localStorage.getItem("snayi-portfolio-token")}` : ""}` : "";
    return config;
  });

export default instanse;
