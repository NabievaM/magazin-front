import { useProductStore } from "@/features/products/store";
import { storeToRefs } from "pinia";
import { onMounted, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";

export const useProduct = () => {
  const pagination = reactive({
    page: 1,
    pageSize: 10,
    skip: 0,
  });
  const store = useProductStore();
  const router = useRouter();
  const route = useRoute();
  const { loading, singleProduct, products, meta } = storeToRefs(store);
  const {
    addProduct,
    fetchAllProduct,
    updateProduct,
    fetchOneProduct,
    deleteProduct,
    updateProductImage,
  } = useProductStore();

  async function onPageSizeChange(pageSize) {
    pagination.pageSize = pageSize;
    pagination.skip = 0;
    await fetchAllProduct(pagination);
  }

  async function onPageChange(newPage) {
    pagination.page = newPage;
    pagination.skip = pagination.pageSize * (newPage - 1);
    await fetchAllProduct(pagination);
  }

  onMounted(async () => {
    await fetchAllProduct(pagination);
  });

  return {
    fetchAllProduct,
    loading,
    singleProduct,
    products,
    router,
    route,
    addProduct,
    updateProduct,
    deleteProduct,
    fetchOneProduct,
    pagination,
    onPageChange,
    onPageSizeChange,
    updateProductImage,
    meta,
  };
};
