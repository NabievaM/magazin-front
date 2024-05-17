import { defineStore } from "pinia";
import router from "@/router";
import {
  create,
  deleteAdmin,
  fetchAdmins,
  updateByAdmin,
  findOneAdmin,
  updateByYourself,
} from "@/api/admin";
import { login } from "@/api/auth";
import { errorToast, successToast } from "@/utils/toast";
import { adminObj } from "@/modules/interfaces";
import { adminLogin } from "@/modules/interfaces";
import { adminRoute } from "@/constants/routes/admin";
import { authRoute } from "@/constants/routes/auth";
import { admin } from "@/features/admin/modules/admin";
import axios from "axios";

export const useAdminStore = defineStore("admin", {
  state: (): {
    loading: boolean;
    self_admin: adminObj;
    admins: admin[];
    singleAdmin: any;
  } => {
    return {
      loading: false,
      self_admin: {
        full_name: "",
        address: "",
        password: "",
        email: "",
        phone: "",
      },
      admins: [],
      singleAdmin: {},
    };
  },
  actions: {
    async authLogin(payload: adminLogin) {
      try {
        this.loading = true;
        const res = await login(payload);
        if (res?.data.tokens?.access_token) {
          this.self_admin = res.data.user;
          this.saveUser(res?.data);
          window.open(
            router.resolve({ name: adminRoute.RT_ADMINS }).href,
            "_blank"
          );
        }
      } catch (err) {
        errorToast("Elektron pochta yoki Parol noto'g'ri kiritilgan");
        this.loading = false;
      }
    },

    saveUser(data: any) {
      localStorage.setItem("access_token", data?.tokens.access_token);
      this.self_admin = data?.user;
    },

    clearUser() {
      localStorage.removeItem("access_token");
      this.self_admin = {
        full_name: "",
        address: "",
        password: "",
        email: "",
        phone: "",
      };
      router.replace({ name: authRoute.RT_LOGIN });
    },

    async signup(payload: any) {
      this.loading = true;
      try {
        const res = await create(payload);
        if (res.status !== 201) {
          errorToast("Admin qo'shishda xatolik! Qayta urinib ko'ring");
          return;
        }
        this.loading = false;
        successToast("Muvaffaqiyatli qo`shildi");
        router.push({ name: adminRoute.RT_ADMINS });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 400) {
            errorToast("Hisob ma`lumotlari yaroqsiz!");
            return;
          }
          errorToast("Xatolik yuz berdi!");
        }
      }
    },

    async updateAdmin(data: adminObj) {
      try {
        const res = await updateByAdmin(data);
        if (res.status !== 200) {
          errorToast("Tahrirlanmadi!");
          return;
        }
        successToast("Admin tahrirlandi!");
        router.go(0);
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async updateByYourself(data: adminObj) {
      try {
        const res = await updateByYourself(data);
        if (res.status !== 200) {
          errorToast("Tahrirlanmadi!");
          return;
        }
        successToast("Tahrirlandi!");
        router.go(0);
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async getAdmins() {
      this.loading = true;
      try {
        const res = await fetchAdmins();
        if (res.status !== 200) {
          return;
        }
        this.loading = false;
        this.admins = res?.data;
      } catch (error) {
        this.loading = false;
        // errorToast("Topilmadi!");
      }
    },

    async fetchOneAdmin(id: string) {
      this.loading = true;
      try {
        const res = await findOneAdmin(id);
        if (res.status !== 200) {
          return;
        }
        this.loading = false;
        this.singleAdmin = res?.data;
      } catch (error) {
        if (error instanceof Error) {
          errorToast("Xatolik yuz berdi!");
          return;
        }
      }
    },

    async deleteAdmin(id: string) {
      this.loading = true;
      try {
        const res = await deleteAdmin(id);

        if (res.status !== 200) {
          errorToast("Admin o'chirilmadi");
          return;
        }
        this.loading = false;
        successToast("Admin o'chirildi!");
        router.push({ name: adminRoute.RT_ADMINS });
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      }
    },

    // saveUser(data: personData) {
    //   localStorage.setItem('access_token', data?.token);
    //   this.user = data?.person;
    // },
    // clearUser() {
    //   localStorage.removeItem('access_token');
    //   this.user = null;
    //   router.replace({ name: RT_LOGIN });
    // }
  },
});
