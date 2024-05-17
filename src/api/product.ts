import api from "@/plugins/axios";
import {
  searchProductObj,
  updateProductObj,
} from "@/features/products/modules/product";

const url = import.meta.env.VITE_BASE_URL;

// export function findAllProduct(pagination: any) {
//   return api.get(
//     url + `/product/all?limit=${pagination.pageSize}&skip=${pagination.skip}`
//   );
// }

export function findAllProduct() {
  return api.get(url + "/product/all ");
}

export function addProduct(createFormData: any) {
  return api({
    url: url + "/product/create",
    method: "post",
    data: createFormData,
    headers: {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    },
  });
}

export function SearchProduct(data: searchProductObj) {
  return api.get(url + `/product/search?name=${data?.name}`);
}

export function findOneProduct(id: any) {
  return api.get(url + `/product/${id}`);
}

export function UpdateProduct(data: updateProductObj) {
  return api.put(url + `/product/${data.id}`, data);
}

export function UpdateProductImage(data: any) {
  return api({
    url: `${url}/product/file/${data.id}`,
    method: "put",
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    },
  });
}

export function DeleteProduct(id: any) {
  return api.delete(url + `/product/${id}`);
}
