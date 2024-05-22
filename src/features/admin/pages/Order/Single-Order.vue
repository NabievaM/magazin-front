<template>
  <button
    @click="backList"
    class="py-2 px-4 rounded-lg bg-orange mx-3 my-3 text-white hover:bg-[#3BB77E]"
  >
    Orqaga
  </button>
  <div
    class="text-xl font-semibold flex flex-col p-3 rounded-md text-center"
  >
    <div>
      <span class="text-lg font-normal">Xaridor: </span>
      {{ singleOrder?.full_name }}
    </div>
    <div>
      <span class="text-lg font-normal">Telefon raqami: </span>
      {{ singleOrder?.phone }}
    </div>
    <div>
      <span class="text-lg font-normal">Mahsulot nomi: </span>
      {{ singleOrder?.product?.name }}
    </div>
    <div class="mb-2">
      <span class="text-lg font-normal"> Mahsulot id raqami: </span>
      {{ singleOrder?.product_id }}
    </div>
    <div class="admin_order_img border border-solid mx-auto mb-2">
      <img
        :src="'http://5.182.26.68:3000/' + singleOrder?.product?.image"
        alt=""
      />
    </div>
    <button @click="showDeleteModal" class="text-3xl text-red-500 text-center">
      <i class="bx bx-trash"></i>
    </button>
  </div>
  <div
    v-show="showDelete"
    class="modal w-full h-screen fixed z-50 flex flex-col items-center justify-center top-0 left-0 text-white"
  >
    <div class="mb-3 text-2xl"></div>
    <div class="flex justify-around gap-2">
      <button @click="canceled" class="bg-slate-400 p-2 rounded-xl text-lg">
        Bekor qilish
      </button>

      <button @click="deleted" class="bg-red-500 p-2 rounded-xl text-lg">
        O'chirish
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrder } from "@/features/admin/composables/order";
import { onMounted, ref } from "vue";
import router from "@/router";
import { adminRoute } from "@/constants/routes/admin";
const { singleOrder, fetchOneOrder, route, deleteOrder } = useOrder();

const showDelete = ref(false);
async function showDeleteModal() {
  showDelete.value = true;
}

async function canceled() {
  showDelete.value = false;
}

async function deleted() {
  const id = String(route.params.id);
  await deleteOrder(id);
}

const backList = async () => {
  router.push({ name: adminRoute.RT_ORDER });
};

onMounted(async () => {
  const id = String(route.params.id);
  await fetchOneOrder(id);
});
</script>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
