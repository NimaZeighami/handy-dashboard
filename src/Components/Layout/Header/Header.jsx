//* For Better Readability instead of using div with un-meaningful tailwind className
//* I've used something that atleast gives a little hint to me about it.

import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
function Header() {
  return (
    <nav
      className="flex items-center h-16 border-b-2 border-gray-200  text-gray-500
    "
    >
      <wrapper className="flex items-center justify-between w-full p-5">
        <searchbar className="flex items-center p-1  border-2 rounded-lg border-gray-200">
          <input
            type="text"
            placeholder="Search Here ..."
            className="outline-none bg-transparent"
          />
          <SearchOutlinedIcon />
        </searchbar>
        <items className="flex items-center">
          <item className="flex items-center mr-5">
            <LanguageOutlinedIcon fontSize="medium" />
            English
          </item>
          <item className="flex items-center mr-5">
            <DarkModeOutlinedIcon
              fontSize="medium"
              // onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </item>
          <item className="flex items-center mr-5">
            <FullscreenExitOutlinedIcon fontSize="medium" />
          </item>
          <item className="flex items-center mr-5">
            <NotificationsNoneOutlinedIcon fontSize="medium" />
            <div className="flex items-center justify-center self-start ml-[-10px] text-xs font-bold size-4 rounded-full bg-yellow-400  text-white">
              1
            </div>
          </item>
          <item className="flex items-center mr-5">
            <ChatBubbleOutlineOutlinedIcon fontSize="medium" />
            <div className="flex items-center justify-center self-start ml-[-6px] text-xs font-bold size-4 rounded-full bg-yellow-400  text-white">
              2
            </div>
          </item>
          <item className="flex items-center mr-5">
            <ListOutlinedIcon fontSize="medium" />
          </item>
          <item className="flex items-center mr-5">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="size-8 rounded-full"
            />
          </item>
        </items>
      </wrapper>
    </nav>
  );
}

export default Header;
