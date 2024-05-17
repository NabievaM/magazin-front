<template>
  <div class="m-2 flex items-center justify-end">
    <v-button
      class="p-2 bg-orange transition duration-700 ease-in-out hover:bg-primary font-semibold rounded-lg text-white float-right"
      @click="addCategorypage"
    >
      Kategoriya qo'shish
    </v-button>
  </div>

  <div>
    <GetCategory />
  </div>
</template>

<script setup lang="ts">
import GetCategory from "@/features/admin/pages/Category/GetCategories.vue";
import router from "@/router";
import { adminRoute } from "@/constants/routes/admin";
import VButton from "@/components/base/button.vue";

const addCategorypage = () => {
  router.push({ name: adminRoute.RT_ADD_CATEGORY });
};
</script>

<style scoped></style>
