import { useAdminStore } from "@/features/admin/store/admin";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

export const useAdmin = () => {
  const store = useAdminStore();
  const router = useRouter();
  const route = useRoute();

  const { loading, admins, self_admin, singleAdmin } = storeToRefs(store);
  const {
    getAdmins,
    signup,
    updateAdmin,
    deleteAdmin,
    fetchOneAdmin,
    updateByYourself,
  } = useAdminStore();

  onMounted(async () => {
    await getAdmins();
  });

  return {
    admins,
    loading,
    router,
    route,
    fetchOneAdmin,
    singleAdmin,
    updateAdmin,
    deleteAdmin,
    signup,
    self_admin,
    updateByYourself,
  };
};
