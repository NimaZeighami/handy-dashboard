import { LineChart, lineElementClasses } from "@mui/x-charts";

const uData = [1200, 2100, 800, 1600, 900, 1700];
const pData = [1200, 2100, 800, 1600, 900, 1700];
const xLabels = ["", "February", "March", "April", "May", "June"];

const Last6Months = ({ title }) => {
  return (
    <last6months className="flex flex-col  w-2/3  h-2/3 shadow-xl rounded-lg">
      <chartname className="flex items-center justify-between m-4">
        <h1 className="text-lg text-gray-400 font-bold">{title}</h1>
      </chartname>
      <normalscreen className="4xl:hidden">
      <LineChart
        width={850}
        height={392}
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
      </normalscreen>
      <bigscreen className="md:hidden 4xl:block">
      <LineChart
        width={1550}
        height={376}
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
      </bigscreen>
    </last6months>
  );
};

export default Last6Months;
