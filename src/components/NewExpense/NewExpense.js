import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveExpense = (newExpense) => {
    newExpense = { ...newExpense, id: Math.random().toString() };
    console.log()
    props.onSaveExpenseChange(newExpense);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpense={onSaveExpense}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
