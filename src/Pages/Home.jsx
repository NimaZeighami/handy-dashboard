//* For Better Readability instead of using div with un-meaningful tailwind className I've used something that atleast gives a little hint to me about it.

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
      <charts className="flex  mt-[-15px] px-5 gap-5 ">
        <Total />
        <Last6Months />
      </charts>
    </homecontainer>
  );
};

export default Home;
