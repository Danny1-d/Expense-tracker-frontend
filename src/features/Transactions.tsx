

const Transactions = () => {

  // Sample data for transactions
  const Transactions = [
    { id: 1, date: "2023-01-01", amount: 100, description: "Groceries" },
    { id: 2, date: "2023-02-15", amount: 50, description: "Utilities" },
    { id: 3, date: "2023-03-10", amount: 200, description: "Rent" },
    { id: 4, date: "2023-04-05", amount: 150, description: "Dining Out" },
    { id: 5, date: "2023-05-20", amount: 75, description: "Entertainment" },
    // Add more transactions as needed
  ];

  return (
    <div>
      <h2 className="bg-[#340260] text-[#C2C2C2] p-2 font-bold text-xl rounded-md text-center">Expenses Made in the Past Months</h2>
        <div className="bg-white p-8 rounded-lg shadow-sm mb-15">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Total Amount spent this Month</h3>
            <h3 className="text-sm font-semibold text-gray-800">600000</h3>
          </div>
        </div>

      <table className="w-full">
        <thead className="bg-[#340260] text-[#C2C2C2]">
          <tr>
            <th className="p-4">Date</th>
            <th className="p-4">Amount</th>
            <th className="p-4">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white">
      {Transactions.map((list) => (
            <tr key={list.id}>
              <td className="p-4 text-center">{list.date}</td>
              <td className="p-4 text-center">{list.amount}</td>
              <td className="p-4 text-center">{list.description}</td>
            </tr>
      ))}
        </tbody>
      </table>

    </div>
  )
}

export default Transactions;