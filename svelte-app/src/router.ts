// sv-router
//

import { createRouter } from "sv-router";
import DashboardPage from "$lib/routes/DashboardPage.svelte";
import EventEditPage from "$lib/routes/EventEditPage.svelte";
import ProductsPage from "$lib/components/ProductsPage.svelte";

export const { p, navigate, isActive, route } = createRouter({
  "/a": DashboardPage,
  "/a/editEvent": EventEditPage,
  "/a/ProductsList": ProductsPage,
});
