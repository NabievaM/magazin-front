import {
  addCategory,
  findAllCategory,
  findOneCategory,
  UpdateCategory,
  DeleteCategory,
} from "@/api/category";
import { errorToast, successToast } from "@/utils/toast";
import { category } from "@/features/admin/modules/category";
import { updatecategory } from "@/features/admin/modules/category";

import axios from "axios";
import { defineStore } from "pinia";
import router from "@/router";
import { adminRoute } from "@/constants/routes/admin";

export const useCategoryStore = defineStore("category", {
  state: (): {
    categorylist: category[];
    loading: boolean;
    singleCategory: any;
  } => {
    return {
      categorylist: [],
      singleCategory: {},
      loading: false,
    };
  },
  actions: {
    async addCategory(newCategory: any) {
      this.loading = true;
      try {
        const res = await addCategory(newCategory);
        if (res.status !== 201) {
          errorToast("Kategoriya yaratishda xatolik! Qayta urinib ko'ring");
          return;
        }
        this.loading = false;
        successToast("Kategoriya yaratildi");
        router.push({ name: adminRoute.RT_CATEGORY });
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
    async fetchAllCategory() {
      this.loading = true;
      try {
        const res = await findAllCategory();

        if (res.status !== 200) {
          return;
        }
        this.loading = false;
        this.categorylist = res?.data;
      } catch (error) {
        if (error instanceof Error) {
          errorToast("Xatolik yuz berdi!");
        }
      }
    },
    async fetchOneCategory(id: string) {
      this.loading = true;
      try {
        const res = await findOneCategory(id);
        if (res.status !== 200) {
          return;
        }
        this.loading = false;
        this.singleCategory = res?.data;
      } catch (error) {
        if (error instanceof Error) {
          errorToast("Xatolik yuz berdi!");
          return;
        }
      }
    },

    async updateCategory(data: updatecategory) {
      this.loading = true;
      try {
        const res = await UpdateCategory(data);

        if (res.status !== 200) {
          errorToast("Kategoriya tahrirlanmadi!");
          return;
        }
        this.loading = false;
        successToast("Kategoriya tahrirlandi!");
        router.go(0);
      } catch (error) {
        if (error instanceof Error) {
          errorToast("Xatolik yuz berdi!");
          return;
        }
      }
    },

    async deleteCategory(id: string) {
      this.loading = true;
      try {
        const res = await DeleteCategory(id);

        if (res.status !== 200) {
          errorToast("Kategoriya o'chirilmadi!");
          return;
        }
        this.loading = false;
        successToast("Kategoriya o'chirildi!");
        router.go(0);
      } catch (error) {
        if (error instanceof Error) {
          errorToast("Xatolik yuz berdi!");
          return;
        }
      }
    },
  },
});
