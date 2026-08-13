export default function TransactionsTable({
  transactions,
  deleteTransaction,
  startediting,
  totalExpense,
  totalIncome,
}) {
  let balance = totalIncome - totalExpense;
  return (
    <section className="mt-8 w-full">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:cursor-pointer hover:bg-blue-800"
        >
          All
        </button>
        <button
          type="button"
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-red-600 hover:cursor-pointer"
        >
          Expense
        </button>
        <button
          type="button"
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-blue-600 hover:cursor-pointer"
        >
          Income
        </button>
      </div>

      <div className="relative w-full max-w-full overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full min-w-[640px] text-left text-sm text-gray-500 rtl:text-right">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-3 py-3 sm:px-6">
                Title
              </th>
              <th scope="col" className="px-3 py-3 sm:px-6">
                Amount
              </th>
              <th scope="col" className="px-3 py-3 sm:px-6">
                type
              </th>
              <th scope="col" className="px-3 py-3 sm:px-6">
                Category
              </th>
              <th scope="col" className="px-3 py-3 sm:px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody className=" h-20">
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
              >
                <th
                  scope="row"
                  className="whitespace-nowrap px-3 py-4 font-medium text-gray-900 dark:text-white sm:px-6"
                >
                  {transaction.title}
                </th>
                <td className="whitespace-nowrap px-3 py-4 capitalize sm:px-6">
                  {transaction.amount} EGP
                </td>
                <td className="px-3 py-4 capitalize sm:px-6">
                  {transaction.type}
                </td>
                <td className="px-3 py-4 capitalize sm:px-6">
                  {transaction.category}
                </td>
                <td className="flex gap-3 px-3 py-4 sm:gap-5 sm:px-6">
                  <button
                    onClick={() => startediting(transaction)}
                    className="font-medium text-blue-600  hover:cursor-pointer hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTransaction(transaction.id)}
                    className="font-medium text-red-600  hover:cursor-pointer hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="font-semibold text-gray-900">
              <th
                scope="row"
                className="whitespace-nowrap px-3 py-3 text-sm sm:px-6 sm:text-base"
              >
                Total Income
              </th>

              <td className="whitespace-nowrap px-3 py-3 sm:px-6">
                {totalIncome} EGP
              </td>

              <th
                scope="row"
                className="whitespace-nowrap px-3 py-3 text-sm sm:px-6 sm:text-base"
              >
                Total Expenses
              </th>

              <td className="whitespace-nowrap px-3 py-3 sm:px-6">
                {totalExpense} EGP
              </td>
              <th
                scope="row"
                className="whitespace-nowrap px-3 py-3 text-sm sm:px-6 sm:text-base"
              >
                Total : <span>{balance} EGP</span>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}
