//* For Better Readability instead of using div with un-meaningful tailwind className
//* I've used something that atleast gives a little hint to me about it.

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Total = () => {
  return (
    <total className="flex flex-col basis-1/3 h-3/4 p-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-lg">
      <titlesection className="flex items-center justify-between ">
        <h1 className="text-lg text-gray-400 font-bold">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </titlesection>
          <bottomsection className="flex flex-col items-center justify-center p-5">
        <totalchart className=" w-44 h-44">
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
          <p className="title text-xl text-gray-400 font-medium mt-4 ">
          Total Sales Made Today
        </p>
        {/* <totalcontent className="flex flex-col justify-center items-center "> */}
        <p className="amount text-3xl  my-2">$420</p>
        <p className="description text-xs text-center font-normal text-gray-400 ">
          Previous transactions processing. Last payments may not be included.
        </p>
        {/* </totalcontent> */}
        <summary className="flex w-full items-center justify-between">
          <summarysection className="text-center">
            <itemtitle className="text-sm text-gray-400">Target</itemtitle>
            <itemresult className=" ">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </itemresult>
          </summarysection>
          <summarysection>
            <div className="itemTitle">Last Week</div>
            <itemresult className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </itemresult>
          </summarysection>
          <summarysection>
            <div className="itemTitle">Last Month</div>
            <itemresult className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </itemresult>
          </summarysection>
        </summary>
      </bottomsection>
    </total>
  );
};

export default Total;
