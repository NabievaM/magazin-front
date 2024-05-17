<template>
  <div
    v-if="likeStore.likeData.length"
    class="flex flex-wrap justify-left w-[100%] px-5 gap-3"
  >
    <LikeProduct
      v-for="like in likeStore.likeData"
      :key="like?.id"
      :data="like"
    />
  </div>
  <div v-else class="h-[443px] text-center pt-[55px]">
    <img
      class="w-[128px] h-[128px] mx-auto mb-5"
      src="../../../assets/images/hearts.png"
      alt=""
    />
    <p class="font-semibold text-2xl mb-3">Sizga yoqqanini qoʻshing</p>
    <p>Bosh sahifaga oʻting va mahsulotdagi ♡ belgisini bosing</p>
    <div class="w-[150px] p-2 bg-primary text-white rounded-md mx-auto mt-4">
      <router-link to="/">Bosh sahifaga</router-link>
    </div>
  </div>
</template>

<script setup>
import { useLikeStore } from "@/features/products/store/like";
import { onMounted } from "vue";
import VButton from "@/components/base/button.vue";
import LikeProduct from "@/features/products/components/product-cart.vue";
const likeStore = useLikeStore();

onMounted(() => {
  likeStore.getAll();
});
</script>

<style scoped></style>
