import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/products/$category")({
  component: CategoryLayout,
});

function CategoryLayout() {
  return <Outlet />;
}
