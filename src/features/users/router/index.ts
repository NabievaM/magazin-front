import { Layouts } from "@/constants/layouts";
import { userRoute } from "@/constants/routes/user";

export default [
  {
    path: "/",
    name: userRoute.RT_HOME,
    component: () => import("@/features/users/pages/Home.vue"),
    meta: {
      layout: Layouts.USER,
      title: userRoute.MT_HOME,
    },
  },
];
