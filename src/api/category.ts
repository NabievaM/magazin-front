import api from "@/plugins/axios";
// import { updatecategory } from "@/features/admin/modules/category";

const url = import.meta.env.VITE_BASE_URL;

export function addCategory(data: any) {
  return api.post(url + "/category/create", data);
}

export function findAllCategory() {
  return api.get(url + "/category/all ");
}

export function findOneCategory(id: string) {
  return api.get(url + `/category/${id}`);
}

export function UpdateCategory(data: any) {
  return api.put(url + `/category/${data.id}`, data);
}

export function DeleteCategory(id: string) {
  return api.delete(url + `/category/${id}`);
}
