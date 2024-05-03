//* For Better Readability instead of using div with un-meaningful tailwind className I've used something that atleast gives a little hint to me about it.

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Header from './Header/Header'

function Layout() {
  return (
    <div className="layout flex ">
      <Sidebar />
      <div className="w-full ">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
