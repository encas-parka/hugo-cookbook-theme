// routes.ts // svelte5-router
import type { RouteConfig } from "@mateothegreat/svelte5-router";
import DashboardPage from "$lib/routes/DashboardPage.svelte";
import EventEditPage from "$lib/routes/EventEditPage.svelte";

export const routes: RouteConfig[] = [
  {
    component: DashboardPage,
  },
  {
    path: "eventEdit",
    component: EventEditPage,
  },
  {
    path: "eventEdit/(?<id>.*)",
    component: EventEditPage,
  },
];
