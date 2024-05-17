import {
  addProduct,
  findAllProduct,
  findOneProduct,
  DeleteProduct,
  UpdateProduct,
  SearchProduct,
  UpdateProductImage,
} from "@/api/product";
import { errorToast, successToast } from "@/utils/toast";
// import { pagination } from "@/modules/types";
import {
  productObj,
  searchProductObj,
  updateProductObj,
} from "@/features/products/modules/product";
import { defineStore } from "pinia";
import router from "@/router";
import { adminRoute } from "@/constants/routes/admin";
import axios from "axios";

export const useProductStore = defineStore("product", {
  state: (): {
    products: productObj[];
    searchProductName: searchProductObj[];
    singleProduct: any;
    loading: boolean;
    meta: {
      total: number;
    };
  } => {
    return {
      products: [],
      searchProductName: [],
      singleProduct: {},
      loading: false,
      meta: {
        total: 0,
      },
    };
  },
  actions: {
    async addProduct(newProduct: any) {
      this.loading = true;
      try {
        const res = await addProduct(newProduct);
        if (res.status !== 201) {
          errorToast("Mahsulot yaratishda xatolik! Qayta urinib ko'ring");
          return;
        }
        this.loading = false;
        successToast("Mahsulot qo'shildi!");
        router.push({ name: adminRoute.RT_PRODUCTS });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 400) {
            errorToast("To'liq kiriting!");
            return;
          }
          errorToast("Xatolik yuz berdi!");
        }
      }
    },

    // async fetchAllProduct(pagination: pagination) {
    //   this.loading = true;
    //   try {
    //     const res = await findAllProduct(pagination);
    //     if (res.status !== 200) {
    //       return;
    //     }
    //     this.loading = false;

    //     this.products = res?.data?.product_limit;
    //     this.meta.total = res.data.total;
    //   } catch (error) {
    //     if (error instanceof Error) {
    //       errorToast("Xatolik yuz berdi!");
    //     }
    //     this.loading = false;
    //   } finally {
    //     this.loading = false;
    //   }
    // },

    async fetchAllProduct() {
      this.loading = true;
      try {
        const res = await findAllProduct();

        if (res.status !== 200) {
          return;
        }
        this.loading = false;
        this.products = res?.data;
      } catch (error) {
        if (error instanceof Error) {
          errorToast("Xatolik yuz berdi!");
        }
      }
    },

    async fetchOneProduct(id: string) {
      this.loading = true;
      try {
        const res = await findOneProduct(id);
        if (res.status !== 200) {
          return;
        }
        this.loading = false;
        this.singleProduct = res?.data;
      } catch (error) {
        if (error instanceof Error) {
          errorToast("Xatolik yuz berdi!");
          return;
        }
      }
    },

    async updateProduct(data: updateProductObj) {
      this.loading = true;
      try {
        const res = await UpdateProduct(data);

        if (res.status !== 200) {
          errorToast("Mahsulot tahrirlanmadi!");
          return;
        }
        this.loading = false;
        successToast("Mahsulot tahrirlandi!");
        router.go(0);
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      }
    },

    async updateProductImage(data: any) {
      this.loading = true;
      try {
        const res = await UpdateProductImage(data);

        if (res.status !== 200) {
          errorToast("Rasm tahrirlanmadi!");
          return;
        }
        this.loading = false;
        successToast("Rasm tahrirlandi!");
        router.go(0);
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      }
    },

    async SearchProductByName(data: any): Promise<void> {
      this.loading = true;
      try {
        const res = await SearchProduct(data);
        if (res.status !== 200) {
          return;
        }
        this.loading = false;
        this.searchProductName = res?.data;
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      }
    },

    async deleteProduct(id: string) {
      this.loading = true;
      try {
        const res = await DeleteProduct(id);
        if (res.status !== 200) {
          errorToast("Mahsulot o'chirilmadi!");
          return;
        }
        this.loading = false;
        successToast("Mahsulot o'chirildi!");
        router.push({ name: adminRoute.RT_PRODUCTS });
      } catch (error) {
        if (error instanceof Error) {
          errorToast("Xatolik yuz berdi!");
          return;
        }
      }
    },
  },
});
