/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Form from "./Components/Form/Form";
import { useFormik } from "formik";
import TransactionsTable from "./Components/TransactionsTable/TransactionsTable";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [totalIncome, settotalIncome] = useState(0);
  const [totalExpense, settotalExpense] = useState(0);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("")

  let formik = useFormik({
    initialValues: {
      title: "",
      amount: "",
      type: "",
      category: "",
    },
    onSubmit: editingTransaction ? updateTransaction : addTransaction,
  });

  function addTransaction(formValues) {
    let newTransaction = {
      id: crypto.randomUUID(),
      title: formValues.title,
      amount: formValues.amount,
      type: formValues.type,
      category: formValues.category,
    };
    formik.resetForm();
    let updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
    // localStorage.setItem("Transactions", JSON.stringify(updatedTransactions));
  }

  function deleteTransaction(transactionId) {
    let updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== transactionId,
    );
    setTransactions(updatedTransactions);
  }

  function startediting(transaction) {
    setEditingTransaction(transaction);
  }

  function updateTransaction(formValues) {
    let updatedTransactions = transactions.map((transaction) => {
      if (transaction.id === editingTransaction.id) {
        return {
          ...transaction,
          title: formValues.title,
          amount: formValues.amount,
          type: formValues.type,
          category: formValues.category,
        };
      }
      return transaction;
    });
    setTransactions(updatedTransactions);
    setEditingTransaction(null);
    formik.resetForm();
  }

  function getTotalIncome() {
    let income = transactions.reduce((acc, transaction) => {
      if (transaction.type === "income") {
        return acc + Number(transaction.amount);
      }
      return acc;
    }, 0);
    settotalIncome(income);
  }

  function getTotalExpenses() {
    let expenses = transactions.reduce((acc, transaction) => {
      if (transaction.type === "expense") {
        return acc + Number(transaction.amount);
      }
      return acc;
    }, 0);
    settotalExpense(expenses);
  }
  useEffect(() => {
    if (editingTransaction) {
      formik.setValues({
        title: editingTransaction.title,
        amount: editingTransaction.amount,
        type: editingTransaction.type,
        category: editingTransaction.category,
      });
    }
  }, [editingTransaction]);

  useEffect(() => {
    getTotalExpenses();
    getTotalIncome();
  }, [transactions]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <Form formik={formik} />
        <div className="w-[80%] mx-auto h-0.25 bg-black my-3"></div>
        <div>
          <h2 className="text-center text-3xl  font-bold">Transactions</h2>
        </div>
        <TransactionsTable
          deleteTransaction={deleteTransaction}
          transactions={transactions}
          startediting={startediting}
          totalIncome={totalIncome}
          totalExpense={totalExpense}
          setFilter={setFilter}
          filter={filter}
          search={search}
          setSearch={setSearch}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
