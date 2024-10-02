import { Navbar, RegisterModal } from "@/components";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <RegisterModal />
      <Navbar />

      <Outlet />
    </>
  );
};
