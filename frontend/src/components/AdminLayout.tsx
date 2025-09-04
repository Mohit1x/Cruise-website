import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { SidebarProvider } from "@/components/ui/custom-sidebar";
import AdminHeader from "./admin/AdminHeader";

export default function AdminLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50">
        <AdminHeader />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 overflow-x-hidden">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
