//* For Better Readability instead of using div with un-meaningful tailwind className I've used 
//* something that atleast gives a little hint to me about it.

import Table from "../Components/Tables/BasicTable";
import Last6Months from "../Components/Widgets/Charts/Last6MonthsRevenue";
import Total from "../Components/Widgets/Charts/TotalRevenue";
import Widget from "../Components/Widgets/Widget";

const Home = () => {
  return (
    <homecontainer>
      <widgets className="flex p-5 gap-5">
        <Widget type="balance" />
        <Widget type="earning" />
        <Widget type="order" />
        <Widget type="user" />
      </widgets>
      <charts className="flex mt-[-15px] dark:mt-0 px-5 gap-5">
        <Total />
        <Last6Months title="Last 6 Months (Revenue)" width={850} height={392} />
      </charts>
      <listcontainer className="flex flex-col m-5 dark:mt-10 p-5 shadow-2xl dark:shadow-white rounded-lg">
        <listtitle className="text-lg text-gray-500 font-bold mb-4">Latest Transition</listtitle>
        <Table />
      </listcontainer>
    </homecontainer>
  );
};

export default Home;
