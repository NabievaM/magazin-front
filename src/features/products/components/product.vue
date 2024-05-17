<template>
  <div v-if="loading">
    <Loading />
  </div>
  <div v-else>
    <div v-if="!products.length" class="h-[443px] flex items-center mx-auto">
      <h2 class="text-2xl mx-auto text-primary font-bold">
        Mahsulotlar mavjud emas!
        <i class="bx bx-confused"></i>
      </h2>
    </div>

    <div v-else class="flex flex-wrap justify-left w-[100%] px-5 gap-8">
      <productCart
        v-for="product in products"
        :key="product?.id"
        :data="product"
      />
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProduct } from "@/features/products/composables/product";
import productCart from "@/features/products/components/product-cart.vue";
import Loading from "@/components/loading.vue";
// import { NPagination } from "naive-ui";
const {
  products,
  loading,
  //  pagination, onPageChange, onPageSizeChange, meta
} = useProduct();

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
