import api from "@/plugins/axios";
import { orderObj } from "@/modules/interfaces";

const url = import.meta.env.VITE_BASE_URL;

export function addOrder(order: orderObj) {
  return api.post(url + "/user/create", order);
}

export function findAllOrders() {
  return api.get(url + "/user/all");
}
export function findOneOrder(id: string) {
  return api.get(url + `/user/${id}`);
}

export function DeleteOrder(id: string) {
  return api.delete(url + `/user/${id}`);
}
