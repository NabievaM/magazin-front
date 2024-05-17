<template>
  <div class="m-2 flex items-center justify-end">
    <v-button
      class="p-2 bg-orange transition duration-700 ease-in-out hover:bg-primary font-semibold rounded-lg text-white float-right"
      @click="addProductpage"
    >
      Mahsulot qo'shish
    </v-button>
  </div>

  <div>
    <GetProduct />
  </div>
  <!-- <div class="mt-6 flex mx-auto justify-center">
    <n-pagination
      v-model:page="pagination.page"
      v-model:page-size="pagination.pageSize"
      :page-count="Math.ceil(meta.total / pagination.pageSize)"
      size="large"
      show-size-picker
      :page-sizes="perPageSetting"
      :disabled="loading"
      @update:page-size="onPageSizeChange"
      @update-page="onPageChange"
    />
  </div> -->
</template>

<script setup lang="ts">
import GetProduct from "@/features/admin/pages/Product/GetProducts.vue";
import router from "@/router";
// import { NPagination } from "naive-ui";
import { adminRoute } from "@/constants/routes/admin";
import VButton from "@/components/base/button.vue";
// import { useProduct } from "@/features/products/composables/product";
// const { loading, pagination, onPageChange, onPageSizeChange, meta } =
//   useProduct();

const addProductpage = () => {
  router.push({ name: adminRoute.RT_ADD_PRODUCT });
};

// const perPageSetting = [
//   {
//     label: "10 / page",
//     value: 10,
//   },
//   {
//     label: "20 / page",
//     value: 20,
//   },
//   {
//     label: "50 / page",
//     value: 50,
//   },
//   {
//     label: "100 / page",
//     value: 100,
//   },
// ];
</script>

<style scoped></style>
