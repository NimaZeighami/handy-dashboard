import { LineChart, lineElementClasses } from "@mui/x-charts";

const uData = [1200, 2100, 800, 1600, 900, 1700];
const pData = [1200, 2100, 800, 1600, 900, 1700];
const xLabels = ["", "February", "March", "April", "May", "June"];

const Last6Months = ({ title , width , height }) => {
  return (
    <last6months className="flex flex-col  w-2/3  h-2/3 shadow-xl dark:shadow-white rounded-lg">
      <chartname className="flex items-center justify-between m-4">
        <h1 className="text-lg text-gray-400 font-bold">{title}</h1>
      </chartname>
      <div className="flex justify-between">
      <LineChart
        width={width}
        height={height}
        series={[
          {
            data: uData,
            area: true,
            stack: "total",
            showMark: false,
            color: "#4D869C",
          },
          {
            data: pData,
            area: true,
            stack: "total",
            showMark: false,
            color: "#A0DEFF",
          },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        leftAxis={null}
        sx={{
          [`& .${lineElementClasses.root}`]: {
            display: "none",
          },
        }}
      />
      </div>
    </last6months>
  );
};

export default Last6Months;
