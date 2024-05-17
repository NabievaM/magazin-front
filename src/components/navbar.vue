<template>
  <nav class="navbar w-[100%] h-[60px] border-b mb-10 flex justify-between">
    <div
      class="search border-2 border-green rounded-md w-[35%] h-[50px] flex justify-between items-center mt-[5px] ml-5"
    >
      <div class="pl-1 w-[85%]">
        <input
          v-model="searchedProductName"
          type="text"
          class="focus:outline-none"
          placeholder="Mahsulotni qidirish..."
          @keyup.enter="handleEnterKey"
        />
      </div>
      <button @click="handleSearch" class="text-center w-[15%] text-sm">
        <i class="bx bx-search-alt-2 text-slate-600"></i>
      </button>
    </div>
    <div
      class="icon flex justify-end gap-2 mr-3 w-[30%] text-[18px] items-center text-slate-900"
    >
      <router-link
        to="/wishes"
        class="flex items-center text-[18px] text-slate-900 hover:bg-slate-200 rounded-md p-2"
      >
        <div class="relative" :class="getLike?.length ? 'mr-2' : 'mr-1'">
          <i class="bx bx-heart text-xl"></i>
          <div
            v-if="getLike?.length"
            class="absolute top-3 -right-[5px] w-4 h-4 rounded-full bg-primary text-[9px] text-white flex items-center justify-center font-semibold"
          >
            {{ getLike?.length }}
          </div>
        </div>
        <span v-if="isWindowWidthGreaterThan600">Saralangan</span>
      </router-link>

      <div
        v-if="authLogin"
        class="flex gap-1 items-center cursor-pointer hover:bg-slate-200 rounded-md p-2"
      >
        <router-link to="/view/categories" target="_blank"
          ><i class="bx bx-user"></i>
          <span v-if="isWindowWidthGreaterThan600">Kirish</span></router-link
        >
      </div>

      <div
        v-else
        class="flex gap-1 items-center cursor-pointer hover:bg-slate-200 rounded-md p-2"
      >
        <router-link to="/login" target="_blank"
          ><i class="bx bx-user"></i> Kirish</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAdminStore } from "@/features/admin/store/admin";
const authLogin = useAdminStore();

import { useLikeStore } from "@/features/products/store/like";
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import { useProductStore } from "@/features/products/store/index";
const productStore = useProductStore();

const searchedProductName = ref("");
const isWindowWidthGreaterThan600 = ref(false);

const searchProducts = () => {
  const matchedProduct = productStore.products.find(
    (product) =>
      product.name.toLowerCase() === searchedProductName.value.toLowerCase()
  );
  if (matchedProduct) {
    const existingProductIndex = productStore.products.findIndex(
      (existingProduct) => existingProduct.name === matchedProduct.name
    );

    if (existingProductIndex === -1) {
      // Mahsulot mavjud emas, buni ro'yxat boshiga qo'shamiz
      productStore.products.unshift(matchedProduct);
    } else {
      // Mahsulot mavjud, uni ro'yxatning boshiga qo'shishni bajaramiz
      productStore.products.splice(existingProductIndex, 1);
      productStore.products.unshift(matchedProduct);
    }
  }
};

const handleSearch = () => {
  if (searchedProductName.value.trim() !== "") {
    searchProducts();
  }
};

const handleEnterKey = (event: KeyboardEvent) => {
  if (event.key === "Enter" && searchedProductName.value.trim() !== "") {
    searchProducts();
  }
};

onMounted(() => {
  isWindowWidthGreaterThan600.value = window.innerWidth > 600;
});

const likeStore = useLikeStore();
const { getLike } = storeToRefs(likeStore);
</script>

<style scoped></style>
