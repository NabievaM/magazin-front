<template>
  <div v-if="loading">
    <Loading />
  </div>
  <div v-else-if="admins.length !== 0">
    <div class="m-2 flex items-center justify-end">
      <v-button
        class="p-2 bg-orange transition duration-700 ease-in-out hover:bg-primary font-semibold rounded-lg text-white float-right"
        @click="addAdminpage"
      >
        Admin qo'shish
      </v-button>
    </div>

    <table class="w-full text-center">
      <tr class="border-y-[1px]">
        <th class="py-2 fontsize">ID</th>
        <th class="fontsize">Familiya Ism</th>
        <th class="fontsize"><span class="hide">Email</span></th>
        <th class="fontsize"><span class="hide">Manzil</span></th>
        <th class="fontsize"><span class="hide">Telefon raqam</span></th>
        <th class="fontsize"><span class="hide">Faol</span></th>
        <th class="fontsize"><span class="hide">Super Admin</span></th>
      </tr>
      <tr
        @click="onAdminSelected(admin.id)"
        class="border-y-[1px] cursor-pointer"
        v-for="(admin, index) in admins"
        :key="index"
        :data-id="admin.id"
      >
        <td class="py-2 text-[15px]">{{ admin.id }}</td>
        <td class="text-[15px]">{{ admin.full_name }}</td>
        <td class="text-[15px]"><span class="hide">{{ admin.email }}</span></td>
        <td class="text-[15px]"><span class="hide">{{ admin.address }}</span></td>
        <td class="text-[15px]"><span class="hide">{{ admin.phone }}</span></td>
        <td class="text-[15px]"><span class="hide">{{ admin.is_active }}</span></td>
        <td class="text-[15px]"><span class="hide">{{ admin.is_superAdmin }}</span></td>
      </tr>
    </table>
  </div>

  <div v-else class="text-center text-xl font-semibold mt-10">
    Adminlarni faqat super admin ko'roladi!
  </div>
</template>

<script setup lang="ts">
import { useAdmin } from "@/features/admin/composables/admin";
import Loading from "@/components/loading.vue";
import router from "@/router";
import { adminRoute } from "@/constants/routes/admin";
import VButton from "@/components/base/button.vue";
const { loading, admins } = useAdmin();

function onAdminSelected(id: any) {
  router.push({ name: adminRoute.RT_SINGLE_ADMIN, params: { id } });
}

const addAdminpage = () => {
  router.push({ name: adminRoute.RT_ADD_ADMIN });
};
</script>

<style scoped>
</style>