//* For Better Readability instead of using div with un-meaningful tailwind className
//* I've used something that atleast gives a little hint to me about it.

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Total = () => {
  return (
    <total className="flex flex-col basis-1/3 min-w-80 h-2/3 p-4 shadow-xl dark:shadow-white rounded-lg">
      <titlesection className="flex items-center justify-between">
        <h1 className="text-lg text-gray-400 font-bold">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </titlesection>
          <bottomsection className="flex flex-col items-center justify-center p-5">
        <totalchart className="w-40 h-40 my-2">
          <CircularProgressbar
            value={70}
            text={`${70}%`}
            strokeWidth={8}
            // styles={{
            //   path: { stroke: "#7451f8" },
            //   text: { fill: "#7451f8" },
            // }}
          />
        </totalchart>
          <p className="title text-xl text-gray-400 font-medium mt-1">
          Total Sales Made Today
        </p>
        <p className="amount text-3xl my-2">$420</p>
        <p className="description text-xs text-center font-normal text-gray-400  ">
          Previous transactions processing. Last payments may not be included.
        </p>
        <summary className="flex w-full items-center justify-between mt-2">
          <summarysection className="text-center">
            <itemtitle className="text-sm text-gray-400">Target</itemtitle>
            <itemresult className="flex items-center mt-2 text-sm text-red-800">
              <KeyboardArrowDownIcon fontSize="small" />
              <resultamount>$15.8K</resultamount>
            </itemresult>
          </summarysection>
          <summarysection className="text-center">
            <itemtitle className="text-sm text-gray-400">Last Week</itemtitle>
            <itemresult className="flex items-center mt-2 text-sm text-green-800">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$15.8K</div>
            </itemresult>
          </summarysection>
          <summarysection className="text-center">
            <itemtitle className="text-sm text-gray-400">Last Month</itemtitle>
            <itemresult className="flex items-center mt-2 text-sm text-red-800">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$13.4K</div>
            </itemresult>
          </summarysection>
        </summary>
      </bottomsection>
    </total>
  );
};

export default Total;
