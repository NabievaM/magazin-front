<template>
  <div v-if="loading">
    <Loading />
  </div>
  <div v-else>
    <div v-if="products.length !== 0">
      <table class="w-full text-center">
        <tr class="border-y-[1px]">
          <th class="fontsize py-2">ID</th>
          <th class="fontsize">Nom</th>
          <th class="fontsize"><span class="hide">Narx</span></th>
          <th class="fontsize"><span class="hide">Arzonlashtirilgan narx</span></th>
          <th class="fontsize"><span class="hide">Qiymat</span></th>
          <th class="fontsize"><span class="hide">Kategoriyasi</span></th>
        </tr>
        <tr
          v-for="(product, index) in products"
          :key="index"
          :data-id="product.id"
          @click="onProductSelected(product.id)"
          class="border-y-[1px] cursor-pointer"
        >
          <td class="py-2 text-[15px]">{{ product.id }}</td>
          <td class="text-[15px]">{{ product.name }}</td>
          <td class="text-[15px]">
            <span class="hide">{{ product.price }}</span>
          </td>
          <td class="text-[15px]">
            <span class="hide">{{ product.reduced_price }}</span>
          </td>
          <td class="text-[15px]">
            <span class="hide">{{ product.value }}</span>
          </td>
          <td class="text-[15px]">
            <span class="hide">{{ product.category.name }}</span>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      <Empty />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProduct } from "@/features/products/composables/product";
import Loading from "@/components/loading.vue";
import Empty from "@/components/empty.vue";
import router from "@/router";
import { adminRoute } from "@/constants/routes/admin";
const { loading, products } = useProduct();

function onProductSelected(id: any) {
  router.push({ name: adminRoute.RT_SINGLE_PRODUCT, params: { id } });
}
</script>

<style scoped></style>
