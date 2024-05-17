<template>
  <div v-if="loading">
    <Loading />
  </div>
  <div v-else-if="orders.length !== 0">
    <table class="w-full text-center">
      <tr class="border-y-[1px]">
        <th class="py-2 fontsize">ID</th>
        <th class="fontsize">Familiya Ism</th>
        <th class="fontsize"><span class="hide">Telefon raqam</span></th>
        <th class="fontsize"><span class="hide">Buyurtma</span></th>
        <th class="fontsize"><span class="hide">Buyurtma ID</span></th>
      </tr>
      <tr
        @click="onOrderSelected(order.id)"
        class="border-y-[1px] cursor-pointer"
        v-for="(order, index) in orders"
        :key="index"
        :data-id="order.id"
      >
        <td class="py-2 text-[15px]">{{ order.id }}</td>
        <td class="text-[15px]">{{ order.full_name }}</td>
        <td class="text-[15px]"><span class="hide">{{ order.phone }}</span></td>
        <td class="text-[15px]"><span class="hide">{{ order.product.name }}</span></td>
        <td class="text-[15px]"><span class="hide">{{ order.product.id }}</span></td>
      </tr>
    </table>
  </div>
  <div v-else>
    <Empty />
  </div>
</template>

<script setup lang="ts">
import { useOrder } from "@/features/admin/composables/order";
import Loading from "@/components/loading.vue";
import Empty from "@/components/empty.vue";
import { onMounted } from "vue";
import { userRoute } from "@/constants/routes/user";
import router from "@/router";
const { loading, orders, fetchAllOrders } = useOrder();

function onOrderSelected(id: any) {
  router.push({ name: userRoute.RT_SINGLE_ORDER, params: { id } });
}

onMounted(async () => {
  await fetchAllOrders();
});
</script>

<style scoped></style>
