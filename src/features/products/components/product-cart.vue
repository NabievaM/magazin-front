<template>
  <div
    class="product_cart w-[400px] h-[320px] border mb-1 rounded-md hover:shadow-lg duration-500 ease-in-out"
  >
    <div class="product_img w-[300px] h-[190px] mx-auto my-1 flex justify-end">
      <div
        @click="addDataToLike"
        class="absolute flex justify-end cursor-pointer"
      >
        <i v-if="addedLike" class="bx bxs-heart text-2xl text-red-600 pr-2"></i>
        <i v-else class="bx bx-heart text-2xl text-slate-700 pr-2"></i>
      </div>
      <img
        class="h-[170px] mx-auto"
        :src="image_url + props.data?.image"
      />
    </div>
    <div class="pl-3 text-[12px] font-bold text-slate-400">
      {{ props.data?.category?.name }}
    </div>
    <div
      v-if="props.data?.name.length > 15"
      class="pl-3 text-lg font-bold text-slate-800"
    >
      {{ props.data?.name.slice(0, 15) + "..." }}
    </div>
    <div v-else class="pl-3 text-lg font-bold text-slate-800">
      {{ props.data?.name }}
    </div>
    <div
      class="flex gap-1 items-baseline pl-3"
      v-if="props.data?.reduced_price"
    >
      <div class="text-lg text-primary font-bold">
        {{ props.data?.reduced_price }}
      </div>
      <s class="text-sm text-slate-300 font-bold">{{ props.data?.price }}</s>
    </div>
    <div v-else class="pl-3">
      <div class="text-lg text-primary font-bold">{{ props.data?.price }}</div>
    </div>
    <div class="mt-6 w-[100%]">
      <v-button
        @click="onProductSelected(props.data?.id)"
        class="font-semibold w-[90%] mx-auto text-base rounded-[3px] py-[6px] bg-primary hover:bg-emerald-600 text-white transition-transform transform hover:-translate-y-1"
        >Buyurtma berish</v-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import VButton from "@/components/base/button.vue";
import router from "@/router";
import { useLikeStore } from "@/features/products/store/like";
import { ref, onMounted } from "vue";
import { productRoute } from "@/constants/routes/product";
import {
  writeToLocaleStorage,
  checkFromLocaleStorage,
} from "@/hooks/localeStorage";

const image_url = import.meta.env.VITE_BASE_URL.replace('uz/api', 'uz/');

const likeStore = useLikeStore();

const props = defineProps({
  data: Object,
});

function onProductSelected(id: any) {
  router.push({ name: productRoute.RT_SINGLE_PRODUCT, params: { id } });
}

const addedLike = ref(false);
function addDataToLike() {
  addedLike.value = writeToLocaleStorage("myLike", likeStore, props.data);
}

onMounted(() => {
  addedLike.value = checkFromLocaleStorage("myLike", props.data);
});
</script>
