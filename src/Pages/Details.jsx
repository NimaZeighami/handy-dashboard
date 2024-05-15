import List from "../Components/Tables/BasicTable";
import Chart from "../Components/Widgets/Charts/Last6MonthsRevenue";
function Details() {
  return (
    <detailcontainer className="single flex w-full justify-center">
      <div className="singleContainer mt-8">
        <div className="top flex px-4 gap-10">
          <div className="flex">
            <div className="max-w-md rounded-lg shadow-lg bg-white dark:bg-[#222] dark:text-white dark:shadow-lg dark:shadow-gray-400">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  alt=""
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 border-2 border-blue-600 bg-blue-600 text-blue-100 px-2 py-1 rounded-lg cursor-pointer">
                  Edit
                </div>
              </div>
              <div className="p-6 mt-6">
                <h1 className="text-2xl font-bold mb-4">Jane Doe</h1>
                <div className="mb-4">
                  <span className="font-semibold text-gray-500">Email: </span>
                  <span className="text-gray-700">janedoe@gmail.com</span>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-gray-500">Phone: </span>
                  <span className="text-gray-700">+1 2345 67 89</span>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-gray-500">Address: </span>
                  <span className="text-gray-700">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-gray-500">Country: </span>
                  <span className="text-gray-700">USA</span>
                </div>
              </div>
            </div>
          </div>
          <Chart title="User Spending ( Last 6 Months)" width={870} height={450} />
        </div>
        <div className="bottom flex flex-col m-5 p-5 shadow-xl rounded-lg  dark:bg-[#222] dark:text-white dark:shadow-lg dark:shadow-gray-400">
          <h1 className="title text-xl text-gray-400">Last Transactions</h1>
          <List />
        </div>
      </div>
    </detailcontainer>
  );
}

export default Details;
