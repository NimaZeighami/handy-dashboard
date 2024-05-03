//* For Better Readability instead of using div with un-meaningful tailwind className
//* I've used something that atleast gives a little hint to me about it.

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Widget = ({ type }) => {
  //temporary
  const amount = 100;
  const diff = 20;

  const dataMap = {
    user: {
      title: "USERS",
      isMoney: false,
      link: "See all users",
      icon: (
        <PersonOutlinedIcon
          fontSize="large"
          className="p-1 ml-12 rounded-md self-start"
          style={{ color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.2)" }}
        />
      ),
    },
    order: {
      title: "ORDERS",
      isMoney: false,
      link: "View all orders",
      icon: (
        <ShoppingCartOutlinedIcon
          fontSize="large"
          className="p-1 ml-12 rounded-md self-start"
          style={{
            backgroundColor: "rgba(218, 165, 32, 0.2)",
            color: "goldenrod",
          }}
        />
      ),
    },
    earning: {
      title: "EARNINGS",
      isMoney: true,
      link: "View net earnings",
      icon: (
        <MonetizationOnOutlinedIcon
          fontSize="large"
          className="p-1 ml-12 rounded-md self-start"
          style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
        />
      ),
    },
    balance: {
      title: "BALANCE",
      isMoney: true,
      link: "See details",
      icon: (
        <AccountBalanceWalletOutlinedIcon
          fontSize="large"
          className="p-1 ml-12 rounded-md self-start"
          style={{ backgroundColor: "rgba(128, 0, 128, 0.2)", color: "purple" }}
        />
      ),
    },
  };
  const data = dataMap[type] || {};

  return (
    <widget className="flex flex-1 h-36 justify-between rounded-xl  p-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ">
      <leftside className="flex flex-col justify-between">
        <span className="title font-black text-base text-gray-400">
          {data.title}
        </span>
        <span className="counter text-3xl font-light">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link w-max text-sm border-b-2 border-gray-400">
          {data.link}
        </span>
      </leftside>
      <rightside className="flex flex-col justify-between">
        <percentage className="flex items-center text-lg font-bold text-green-700">
          <KeyboardArrowUpIcon fontSize="large" />
          {diff} %
        </percentage>
        {data.icon}
      </rightside>
    </widget>
  );
};

export default Widget;
