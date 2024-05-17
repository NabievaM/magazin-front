<script setup lang="ts">
import baseButton from "@/components/base/button.vue";
import { useAdminStore } from "@/features/admin/store/admin";
import { ref } from "vue";

const store = useAdminStore();
const showLogout = ref(false);

async function showLogoutModal() {
  showLogout.value = true;
}

async function cancel() {
  showLogout.value = false;
}

const handleLogout = () => {
  store.clearUser();
};
type routeProp = {
  text: string;
  name: string;
};
defineProps<{
  permanent: boolean;
  routes: routeProp[];
}>();
</script>

<template>
  <nav v-show="permanent" class="text-left !h-screen bg-slate-200">
    <div class="px-5">
      <div class="flex justify-center mb-[150px] pt-[18px]">
        <span class="me-2 w-[6px] bg-[#F8D442]" />
        <h2 class="uppercase text-[20px] font-[700]">crud operations</h2>
      </div>
    </div>
    <div>
      <router-link
        v-for="(link, index) in routes"
        :key="index"
        :to="{ name: link.name }"
        class="block w-5/6 transition-all text-center text-[18px] rounded-md mx-auto mb-3 p-2"
      >
        <span>{{ link.text }}</span>
      </router-link>
    </div>
    <baseButton
      class="w-3/6 flex justify-center mx-auto p-2 my-10 items-center text-lg"
      icon="mdi-logout"
      color="grey-lighten-2"
      @click="showLogoutModal"
    >
      <i class="bx bx-log-out text-[#fcb900] text-3xl"></i>
      Chiqish
    </baseButton>
  </nav>

  <div
    v-show="showLogout"
    class="modal w-full h-screen fixed z-50 flex flex-col items-center justify-center top-0 left-0 text-white"
  >
    <div class="flex justify-around gap-2">
      <button @click="cancel" class="bg-slate-400 p-2 rounded-xl text-lg">
        Bekor qilish
      </button>

      <button @click="handleLogout" class="bg-red-500 p-2 rounded-xl text-lg">
        Chiqish
      </button>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  background-color: #feaf00;
}
.modal {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>