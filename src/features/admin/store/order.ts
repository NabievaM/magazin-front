import {
  DeleteOrder,
  addOrder,
  findAllOrders,
  findOneOrder,
} from "@/api/order";
import { errorToast, successToast } from "@/utils/toast";
import { orderObj } from "@/modules/interfaces";

import axios from "axios";
import { defineStore } from "pinia";
import router from "@/router";
import { adminRoute } from "@/constants/routes/admin";

export const useOrderStore = defineStore("order", {
  state: (): {
    orders: orderObj[];
    loading: boolean;
    singleOrder: any;
  } => {
    return {
      orders: [],
      loading: false,
      singleOrder: {},
    };
  },
  actions: {
    async addOrder(newOrder: any) {
      this.loading = true;
      try {
        const res = await addOrder(newOrder);
        if (res.status !== 201) {
          errorToast("Buyurtma qilishda xatolik! Qayta urinib ko'ring");
          return;
        }
        this.loading = false;
        successToast("Buyurtma qilindi!");
        router.push({});
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 400) {
            errorToast("Xatolik yuz berdi!");
            return;
          }
          errorToast("Xatolik yuz berdi!");
        }
      }
    },
    async fetchAllOrders() {
      this.loading = true;
      try {
        const res = await findAllOrders();

        if (res.status !== 200) {
          return;
        }
        this.loading = false;
        this.orders = res?.data;
      } catch (error) {
        if (error instanceof Error) {
          errorToast("Xatolik yuz berdi!");
        }
      }
    },

    async fetchOneOrder(id: string) {
      this.loading = true;
      try {
        const res = await findOneOrder(id);
        if (res.status !== 200) {
          return;
        }
        this.loading = false;
        this.singleOrder = res?.data;
      } catch (error) {
        if (error instanceof Error) {
          errorToast("Xatolik yuz berdi!");
          return;
        }
      }
    },

    async deleteOrder(id: string) {
      this.loading = true;
      try {
        const res = await DeleteOrder(id);

        if (res.status !== 200) {
          errorToast("Buyurtma o'chirilmadi!");
          return;
        }
        this.loading = false;
        successToast("Buyurtma o'chirildi!");
        router.push({ name: adminRoute.RT_ORDER });
      } catch (error) {
        if (error instanceof Error) {
          errorToast("Xatolik yuz berdi!");
          return;
        }
      }
    },
  },
});
