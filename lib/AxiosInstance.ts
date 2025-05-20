import { API_BASE } from "@/constants/Common";
import axios from "axios";

const BackendWebClient = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
});

export default BackendWebClient;
