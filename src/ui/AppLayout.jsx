import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="h-screen ">
      <Header />
      <div className="flex h-[90%] max-w-[1400px] m-auto">
        <div className=" basis-64 border-r-[1px] border-border h-full p-4">
          <Sidebar />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
