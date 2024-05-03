//* For Better Readability instead of using div with un-meaningful tailwind className I've used something that atleast gives a little hint to me about it.

import Widget from "../Components/Widget";

const Home = () => {
  return (
    <widgets className="flex p-5 gap-5">
      <Widget type="balance" />
      <Widget type="earning" />
      <Widget type="order" />
      <Widget type="user" />
    </widgets>
  );
};

export default Home;
