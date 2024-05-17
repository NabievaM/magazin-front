import { onMounted } from "vue";
import { useCategoryStore } from "@/features/admin/store/category";
import { storeToRefs } from "pinia";
import { useRouter, useRoute } from "vue-router";

export const useCategory = () => {
  const store = useCategoryStore();
  const router = useRouter();
  const route = useRoute();

  const { loading, singleCategory, categorylist } = storeToRefs(store);
  const {
    addCategory,
    fetchAllCategory,
    fetchOneCategory,
    updateCategory,
    deleteCategory,
  } = useCategoryStore();

  onMounted(async () => {
    await fetchAllCategory();
  });

  return {
    addCategory,
    fetchAllCategory,
    fetchOneCategory,
    updateCategory,
    deleteCategory,
    loading,
    singleCategory,
    categorylist,
    router,
    route,
  };
};
