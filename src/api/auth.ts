import axios from "@/plugins/axios";
import { adminLogin } from "@/modules/interfaces";

const url = import.meta.env.VITE_BASE_URL;

export function login(payload: adminLogin) {
  return axios.post(url + "/admin/signin", payload);
}
