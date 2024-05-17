<template>
  <button
    @click="backList"
    class="absolute py-2 px-4 rounded-lg bg-slate-400 mx-7 my-7 text-white hover:bg-slate-500"
  >
    Orqaga
  </button>
  <div class="bg-slate-100 h-screen flex items-center">
    <div
      class="login w-[40%] h-[300px] bg-slate-200 shadow-xl mx-auto rounded-md p-5"
    >
      <h1 class="text-center text-2xl text-slate-800 mb-10">Tizimga kirish</h1>
      <form @submit.prevent="onSubmit">
        <div>
          <input
            v-model="email"
            class="w-[100%] p-2 rounded-md mb-5 focus:outline-none"
            type="email"
            placeholder="Elektron pochta"
          />
        </div>
        <div>
          <input
            v-model="password"
            class="w-[100%] p-2 rounded-md mb-10 focus:outline-none"
            type="text"
            placeholder="Parol"
          />
        </div>
        <div
          class="w-[100px] mx-auto bg-slate-400 text-xl hover:bg-slate-500 rounded-md p-1 text-slate-900"
        >
          <v-button type="submit" class="mx-auto">Kirish</v-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAdminStore } from "@/features/admin/store/admin";
import VButton from "@/components/base/button.vue";
import router from "@/router";
import { userRoute } from "@/constants/routes/user";

const { authLogin } = useAdminStore();

const email = ref("");
const password = ref("");

const backList = async () => {
  router.push({ name: userRoute.RT_HOME });
};

const onSubmit = async () => {
  let payload = { email: email.value, password: password.value };
  await authLogin(payload);
};
</script>

<style scoped></style>
