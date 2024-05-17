import { productRoute } from "@/constants/routes/product";
import { Layouts } from "@/constants/layouts";

export default [
  {
    path: "/order/product/:id",
    name: productRoute.RT_SINGLE_PRODUCT,
    component: () => import("@/features/products/pages/SingleProduct.vue"),
    meta: {
      requiresAuth: false,
      layout: Layouts.USER,
      title: productRoute.MT_SINGLE_PRODUCT,
    },
  },
  {
    path: "/wishes",
    name: productRoute.RT_PRODUCT_LIKE,
    component: () => import("@/features/products/pages/Like.vue"),
    meta: {
      requiresAuth: false,
      layout: Layouts.USER,
      title: productRoute.MT_PRODUCT_LIKE,
    },
  },
];
