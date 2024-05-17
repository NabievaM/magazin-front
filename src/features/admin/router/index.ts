import { adminRoute } from "@/constants/routes/admin";
import { userRoute } from "@/constants/routes/user";
import { Layouts } from "@/constants/layouts";

export default [
  {
    path: "/view/categories",
    name: adminRoute.RT_CATEGORY,
    component: () => import("@/features/admin/pages/Category/Category.vue"),
    meta: {
      requiresAuth: true,
      layout: Layouts.ADMIN,
      title: adminRoute.MT_CATEGORY,
    },
  },
  {
    path: "/view/products",
    name: adminRoute.RT_PRODUCTS,
    component: () => import("@/features/admin/pages/Product/Product.vue"),
    meta: {
      requiresAuth: true,
      layout: Layouts.ADMIN,
      title: adminRoute.MT_PRODUCTS,
    },
  },
  {
    path: "/product/:id",
    name: adminRoute.RT_SINGLE_PRODUCT,
    component: () => import("@/features/admin/pages/Product/SingleProduct.vue"),
    meta: {
      requiresAuth: true,
      layout: Layouts.ADMIN,
      title: adminRoute.MT_SINGLE_PRODUCT,
    },
  },
  {
    path: "/admins",
    name: adminRoute.RT_ADMINS,
    component: () => import("@/features/admin/pages/Admin/Admin.vue"),
    meta: {
      requiresAuth: true,
      layout: Layouts.ADMIN,
      title: adminRoute.MT_ADMINS,
    },
  },
  {
    path: "/admin/:id",
    name: adminRoute.RT_SINGLE_ADMIN,
    component: () => import("@/features/admin/pages/Admin/SingleAdmin.vue"),
    meta: {
      requiresAuth: true,
      layout: Layouts.ADMIN,
      title: adminRoute.MT_SINGLE_ADMIN,
    },
  },
  {
    path: "/view/orders",
    name: adminRoute.RT_ORDER,
    component: () => import("@/features/admin/pages/Order/Order.vue"),
    meta: {
      requiresAuth: true,
      layout: Layouts.ADMIN,
      title: adminRoute.MT_ORDER,
    },
  },
  {
    path: "/order/:id",
    name: userRoute.RT_SINGLE_ORDER,
    component: () => import("@/features/admin/pages/Order/Single-Order.vue"),
    meta: {
      requiresAuth: true,
      layout: Layouts.ADMIN,
      title: userRoute.MT_SINGLE_ORDER,
    },
  },
  {
    path: "/add/category",
    name: adminRoute.RT_ADD_CATEGORY,
    component: () => import("@/features/admin/pages/Category/AddCategory.vue"),
    meta: {
      requiresAuth: true,
      layout: Layouts.ADMIN,
      title: adminRoute.MT_ADD_CATEGORY,
    },
  },
  {
    path: "/add/product",
    name: adminRoute.RT_ADD_PRODUCT,
    component: () => import("@/features/admin/pages/Product/AddProduct.vue"),
    meta: {
      requiresAuth: true,
      layout: Layouts.ADMIN,
      title: adminRoute.MT_ADD_PRODUCT,
    },
  },
  {
    path: "/add/admin",
    name: adminRoute.RT_ADD_ADMIN,
    component: () => import("@/features/admin/pages/Admin/AddAdmin.vue"),
    meta: {
      requiresAuth: true,
      layout: Layouts.ADMIN,
      title: adminRoute.MT_ADD_ADMIN,
    },
  },
];
