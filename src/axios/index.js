import { API_LINK } from "@/constants";
import axios from "axios";

const instance = axios.create({
    baseURL: API_LINK
});

if (typeof window !== 'undefined') {
    instance.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem('snayi-portfolio-token')}`;
}


export default instance;