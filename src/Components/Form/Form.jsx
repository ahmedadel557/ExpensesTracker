export default function Form({ formik }) {
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="mx-auto w-full max-w-sm mb-5"
      >
        <h2 className="text-3xl mb-2 font-bold">Transaction Info</h2>
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Title
          </label>
          <input
            value={formik.values.title}
            onChange={formik.handleChange}
            type="text"
            id="title"
            name="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="amount"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Amount
          </label>
          <input
            value={formik.values.amount}
            onChange={formik.handleChange}
            type="number"
            id="amount"
            name="amount"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="type"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Type
          </label>
          <select
            value={formik.values.type}
            onChange={formik.handleChange}
            id="type"
            name="type"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option value="" disabled>
              Choose a type
            </option>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Category
          </label>
          <input
            value={formik.values.category}
            onChange={formik.handleChange}
            type="text"
            id="category"
            name="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
        <button
          type="submit"
          className="text-white hover:cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Add Transaction
        </button>
      </form>
    </>
  );
}
