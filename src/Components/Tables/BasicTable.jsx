//* For Better Readability instead of using div with un-meaningful tailwind className I've used
//* something that atleast gives a little hint to me about it.

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "3 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "12 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "16 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "17 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];

  return (
    <TableContainer component={Paper} className="table ">
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        className="dark:bg-[#222] "
      >
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">
              <span className="dark:text-white">Product ID</span>
            </TableCell>
            <TableCell className="tableCell">
              <span className="dark:text-white">Product</span>
            </TableCell>
            <TableCell className="tableCell">
              <span className="dark:text-white">Customer</span>
            </TableCell>
            <TableCell className="tableCell">
              <span className="dark:text-white">Date</span>
            </TableCell>
            <TableCell className="tableCell">
              <span className="dark:text-white">Amount</span>
            </TableCell>

            <TableCell className="tableCell">
              <span className="dark:text-white">Payment Method</span>
            </TableCell>
            <TableCell className="tableCell">
              <span className="dark:text-white">Status</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">
                <span className="dark:text-white"> {row.id}</span>
              </TableCell>
              <TableCell className="tableCell">
                <imagecolumn className="flex items-center">
                  <img
                    src={row.img}
                    alt=""
                    className="w-8 h-8 object-cover rounded-full mr-3"
                  />
                  <span className="dark:text-white">{row.product}</span>
                </imagecolumn>
              </TableCell>
              <TableCell className="tableCell ">
                <span className="dark:text-white">{row.customer}</span>
              </TableCell>
              <TableCell className="tableCell">
                <span className="dark:text-white">{row.date}</span>
              </TableCell>
              <TableCell className="tableCell">
                <span className="dark:text-white">{row.amount}</span>
              </TableCell>
              <TableCell className="tableCell">
                <span className="dark:text-white">{row.method}</span>
              </TableCell>
              <TableCell className="tableCell">
                <span
                  className={
                    row.status === "Approved"
                      ? "bg-green-200 text-green-800 text-sm font-bold p-1 rounded-lg"
                      : row.status === "Pending"
                      ? "bg-yellow-200 text-yellow-800 text-sm font-bold p-1 rounded-lg"
                      : "bg-gray-100 text-gray-600"
                  }
                >
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
