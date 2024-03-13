import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <>
      <Header />
      <div className="flex max-w-[1400px] m-auto h-[90vh]">
        <div className=" min-w-72 border-r-[1px] border-border h-full p-4 hidden lg:block overflow-auto">
          <Sidebar />
        </div>

        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
