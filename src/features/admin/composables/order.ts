import { useOrderStore } from "@/features/admin/store/order";
import { storeToRefs } from "pinia";
import { useRouter, useRoute } from "vue-router";

export const useOrder = () => {
  const store = useOrderStore();
  const router = useRouter();
  const route = useRoute();

  const { loading, orders, singleOrder } = storeToRefs(store);
  const { addOrder, deleteOrder, fetchAllOrders, fetchOneOrder } =
    useOrderStore();

  return {
    addOrder,
    deleteOrder,
    fetchAllOrders,
    loading,
    orders,
    router,
    route,
    singleOrder,
    fetchOneOrder,
  };
};
