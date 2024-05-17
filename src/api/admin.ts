import api from "@/plugins/axios";
import { adminObj } from "@/modules/interfaces";

const url = import.meta.env.VITE_BASE_URL;

export function create(data: any) {
  return api.post(url + "/admin/signup", data);
}

export function updateByAdmin(data: adminObj) {
  return api.put(url + `/admin/update/${data.id}`, data);
}

export function updateByYourself(data: adminObj) {
  return api.put(url + `/admin/yourself/${data.id}`, data);
}

export function fetchAdmins() {
  return api.get(url + "/admin/all");
}

export function findOneAdmin(id: string) {
  return api.get(url + `/admin/findOne/${id}`);
}

export function deleteAdmin(id: string) {
  return api.delete(url + `/admin/remove/${id}`);
}
