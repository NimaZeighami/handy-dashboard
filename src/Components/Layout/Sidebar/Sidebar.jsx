//* For Better Readability instead of using div with un-meaningful tailwind className 
//* I've used something that atleast gives a little hint to me about it.

import BarChartIcon from "@mui/icons-material/BarChart";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LogoutIcon from "@mui/icons-material/Logout";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import StoreIcon from "@mui/icons-material/Store";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
// import { FormControlLabel } from "@mui/material";
// import { MaterialUISwitch } from "../../Switch/Switch";

function Sidebar() {
  return (
    <div className="flex flex-col w-1/6 min-w-52 max-w-56  h-screen overflow-auto p-4 bg-white border-r-2 border-gray-200">
      <top className="flex h-12 items-center justify-center">
        <span className="Logo font-extrabold text-xl text-blue-700">
          NimaAdmin
        </span>
      </top>
      <hr className="h-px bg-gray-200 border-0" />
      <middle>
        <ul className="flex flex-col my-2  gap-2">
          <p className="title text-xs font-extrabold text-gray-400 self-start">
            MAIN
          </p>
          <li className="mx-4 text-lg cursor">
            <DashboardIcon fontSize="medium" className="text-blue-600 mr-2" />
            <span className="text-gray-500">Dashboard</span>
          </li>
          <p className="title text-xs font-extrabold text-gray-400 self-start">
            LISTS
          </p>
          <li className="mx-4 text-lg cursor">
            <PeopleAltOutlinedIcon fontSize="medium" className="text-blue-600 mr-2" />
            <span className="text-gray-500">Users</span>
          </li>
          <li className="mx-4 text-lg cursor">
            <StoreIcon fontSize="medium" className="text-blue-600 mr-2" />
            <span className="text-gray-500">Products</span>
          </li>
          <li className="mx-4 text-lg cursor">
            <Inventory2OutlinedIcon fontSize="medium" className="text-blue-600 mr-2" />
            <span className="text-gray-500">Orders</span>
          </li>
          <li className="mx-4 text-lg cursor">
            <LocalShippingIcon fontSize="medium" className="text-blue-600 mr-2" />
            <span className="text-gray-500">Delivery</span>
          </li>
          <p className="title text-xs font-extrabold text-gray-400 self-start">
            USEFUL
          </p>
          <li className="mx-4 text-lg cursor">
            <BarChartIcon fontSize="medium" className="text-blue-600 mr-2" />
            <span className="text-gray-500">States</span>
          </li>
          <li className="mx-4 text-lg cursor">
            <CampaignOutlinedIcon fontSize="medium" className="text-blue-600 mr-2" />
            <span className="text-gray-500">Notification </span>
          </li>
          <p className="title text-xs font-extrabold text-gray-400 self-start">
            SERVICES
          </p>
          <li className="mx-4 text-lg cursor">
            <FavoriteOutlinedIcon fontSize="medium" className="text-blue-600 mr-2" />
            <span className="text-gray-500">System Health</span>
          </li>
          <li className="mx-4 text-lg cursor">
            <PsychologyIcon fontSize="medium" className="text-blue-600 mr-2" />
            <span className="text-gray-500">Logs</span>
          </li>
          <li className="mx-4 text-lg cursor">
            <SettingsIcon fontSize="medium" className="text-blue-600" />
            <span className="text-gray-500">Settings</span>
          </li>
          <p className="title text-xs font-extrabold text-gray-400 self-start">
            USERS
          </p>
          <li className="mx-4 text-lg cursor">
            <SwitchAccountIcon fontSize="medium" className="text-blue-600 mr-2" />
            <span className="text-gray-500">Profiles</span>
          </li>
          <li className="mx-4 text-lg cursor">
            <LogoutIcon fontSize="medium" className="text-blue-600 mr-2" />
            <span className="text-gray-500">Log Out</span>
          </li>
        </ul>
      </middle>
      <bottom className='mt-2'>
        {/* <FormControlLabel
          control={
            <MaterialUISwitch
              sx={{ transform: "scale(0.75)", mr: -0.5  }}
              defaultUnchecked
              size="medium"
            />
          }
          label="Dark Mode"
          className="text-gray-500 "
        /> */}
      </bottom>
    </div>
  );
}

export default Sidebar;
