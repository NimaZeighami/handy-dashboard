//* For Better Readability instead of using div with un-meaningful tailwind className I've used something that atleast gives a little hint to me about it.
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
import { FormControlLabel } from "@mui/material";
import { MaterialUISwitch } from "../../Switch/Switch";

function Sidebar() {
  return (
    <div className="flex flex-col  w-1/6 min-w-52 max-w-56 min-h-screen p-4 bg-white border-r-2 border-gray-200">
      <top className="flex h-12 items-center justify-center">
        <span className="Logo font-bold text-xl text-cyan-400">NimaAdmin</span>
      </top>
      <hr className="h-px bg-gray-200 border-0 " />
      <middle>
        <ul className="flex flex-col my-4 items-center gap-4 ">
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>

          <li>
            <PeopleAltOutlinedIcon />
            <span>Users</span>
          </li>
          <li>
            <StoreIcon />
            <span>Products</span>
          </li>
          <li>
            <Inventory2OutlinedIcon />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon />
            <span>Delivery</span>
          </li>
          <li>
            <BarChartIcon />
            <span>States</span>
          </li>
          <li>
            <CampaignOutlinedIcon />
            <span>Notification </span>
          </li>
          <li>
            <FavoriteOutlinedIcon />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon />
            <span>Settings</span>
          </li>
          <li>
            <SwitchAccountIcon />
            <span>Profiles</span>
          </li>
          <li>
            <LogoutIcon />
            <span>Log Out</span>
          </li>
        </ul>
      </middle>
      <bottom className='mt-8'>

        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 0 }}  defaultChecked size="small" />}
          label="Dark Mode"
        />
      </bottom>
    </div>
  );
}

export default Sidebar;
