import { createRouter, createWebHistory } from "vue-router";

import AsparthDesert from "@/views/AsparthDesert.vue"
import BloodyLands from "@/views/BloodyLands.vue"
import Butterfly88 from "@/views/Butterfly88.vue"
import Butterfly88Retreat from "@/views/Butterfly88Retreat.vue"
import DeadlyBay from "@/views/DeadlyBay.vue"
import Home from "@/views/Home.vue"
import Earth from "@/views/Earth.vue"
import Explorer from "@/views/Explorer.vue"
import IluTower from "@/views/IluTower.vue"
import IssouThings from "@/views/IssouThings.vue"
import IssouTrain from "@/views/IssouTrain.vue"
import JulIrreversible from "@/views/JulIrreversible.vue";
import MountainPass from "@/views/MountainPass.vue";
import Nightmare from "@/views/Nightmare.vue";
import OperationSconce from "@/views/OperationSconce.vue";
import Patrol from "@/views/Patrol.vue";
import RitaOra from "@/views/RitaOra.vue";
import SeaStorm from "@/views/SeaStorm.vue";
import ThabuIsland from "@/views/ThabuIsland.vue"
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
    },
    {
      path: "/issou-train",
      name: "issou-train",
      component: IssouTrain
    },
    {
      path: "/butterfly-88-retreat",
      name: "butterfly-88-retreat",
      component: Butterfly88Retreat
    },
    {
      path: "/butterfly-88",
      name: "butterfly-88",
      component: Butterfly88
    },
    {
      path: "/issou-things",
      name: "issou-things",
      component: IssouThings
    },
    {
      path: "/thabu-island",
      name: "thabu-island",
      component: ThabuIsland
    },
    {
      path: "/nightmare",
      name: "nightmare",
      component: Nightmare
    },
    {
      path: "/sea-storm",
      name: "sea-storm",
      component: SeaStorm
    },
    {
      path: "/explorer",
      name: "explorer",
      component: Explorer
    },
    {
      path: "/bloody-lands",
      name: "bloody-lands",
      component: BloodyLands
    },
    {
      path: "/asparth-desert",
      name: "asparth-desert",
      component: AsparthDesert
    },
    {
      path: "/mountain-pass",
      name: "mountain-pass",
      component: MountainPass
    },
    {
      path: "/deadly-bay",
      name: "deadly-bay",
      component: DeadlyBay
    },
    {
      path: "/patrol",
      name: "patrol",
      component: Patrol
    },
  ]
})

export default router;
