import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue"
import Earth from "@/views/Earth.vue"
import IluTower from "@/views/IluTower.vue"
import JulIrreversible from "@/views/JulIrreversible.vue";
import OperationSconce from "@/views/OperationSconce.vue";
import RitaOra from "@/views/RitaOra.vue";
import Wimagatee from "@/views/Wimagatee.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/earth",
      name: "earth",
      component: Earth
    },
    {
      path: "/jul-irreversible",
      name: "jul-irreversible",
      component: JulIrreversible
    },
    {
      path: "/wimagatee",
      name: "wimagatee",
      component: Wimagatee
    },
    {
      path: "/rita-ora",
      name: "rita-ora",
      component: RitaOra
    },
    {
      path: "/ilu-tower",
      name: "ilu-tower",
      component: IluTower
    },
    {
      path: "/operation-sconce",
      name: "operation-sconce",
      component: OperationSconce
    }
  ]
})

export default router;
