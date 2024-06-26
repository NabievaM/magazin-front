import { createRouter, createWebHistory } from "vue-router";
import { layoutMiddleware } from "./middlewares/index";
import i18n from "@/plugins/i18n";

// import all constants
import { Layouts } from "@/constants/layouts";
import { authRoute } from "@/constants/routes/auth";

// import all features routes
import userRoutes from "@/features/users/router";
import adminRoutes from "@/features/admin/router";
import productRoutes from "@/features/products/router";
import decodeJwt from "@/functions/tokenParser";

const routes = [
  ...userRoutes,
  ...productRoutes,
  ...adminRoutes,
  {
    path: "/:pathMatch(.*)*",
    name: authRoute.RT_NOT_FOUND,
    component: () => import("@/views/NotFound.vue"),
    meta: {
      layout: Layouts.AUTH,
      requiresAuth: false,
      title: authRoute.MT_NOT_FOUND,
    },
  },
  {
    path: "/login",
    name: authRoute.RT_LOGIN,
    component: () => import("@/views/Login.vue"),
    meta: {
      layout: Layouts.AUTH,
      title: authRoute.MT_LOGIN,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("access_token");
  const parsedToken = decodeJwt(token);
  const isTokenExpired = parsedToken.exp < Date.now() / 1000;

  if (
    to.name !== authRoute.RT_LOGIN &&
    isTokenExpired &&
    to.meta.requiresAuth
  ) {
    next({ name: authRoute.RT_LOGIN });
  } else if (!isTokenExpired && to.name === authRoute.RT_LOGIN) {
    if (!from.name) {
      next({ name: authRoute.RT_NOT_FOUND });
    } else {
      next({ name: from.name });
    }
  } else {
    next();
  }
});

// perroute beforeEnter

router.beforeResolve(async (to) => {
  await layoutMiddleware(to);
  updateMeta(to?.meta?.title);
});

function updateMeta(title: any) {
  document.title = i18n.global.t(title);
}

export { updateMeta };
export default router;
