import { useState } from "react";
import "./App.css";
import Expense from "./components/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/NewExpense/ExpenseFilter";
import Card from "./components/shared/Card";
import Expenselist from "./components/NewExpense/ExpenseList";

const data = [
  {
    title: "Test",
    price: "123",
    date: new Date(),
    id: Math.random.toString(),
  },
  {
    title: "Test2",
    price: "1231",
    date: new Date(),
    id: Math.random.toString(),
  },
  {
    title: "Test3",
    price: "1213",
    date: new Date(),
    id: Math.random.toString(),
  },
];

function App() {
  const [items, updateExpnseData] = useState(data);
  const [filteredYear, setFiletredYear] = useState("2021");

  const onChangeFilter = (year) => {
    setFiletredYear(year);
  };

  const onSaveExpense = (newExpense) => {
    updateExpnseData((prevState) => {
      return [newExpense, ...prevState];
    });
  };

  const filterList = items.filter((x) => {
    return x.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <NewExpense onSaveExpenseChange={onSaveExpense}></NewExpense>
      <Card className='custom'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={onChangeFilter} />
        {filterList.length > 0 ? <Expenselist filterList={filterList}></Expenselist> : <p className='not_found'>No Record</p>}
      </Card>
    </>
  );
}

export default App;
