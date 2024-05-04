//* For Better Readability instead of using div with un-meaningful tailwind className I've used something that atleast gives a little hint to me about it.

import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

function Layout() {
  return (
    <layout className="flex ">
      <Sidebar />
      <div className="w-full h-screen overflow-auto ">
        <Header />
        <Outlet />
      </div>
    </layout>
  );
}

export default Layout;
