import { useEffect, useRef, useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [isFormValid, setFormValue] = useState(false);
  //const refTitle = useRef("");

  useEffect(() => {
    setFormValue(title.trim().length > 0 && amount.trim().length > 0 && date.trim().length > 0);
    console.log("sasa");
    return () => {
      console.log("cleanup");
    };
  }, [amount, title, date]);

  const updateForm = (index, event) => {
    switch (index) {
      case 1:
        setTitle(event.target.value);
        break;
      case 2:
        setAmount(event.target.value);
        break;
      case 3:
        setDate(event.target.value);
        break;
      default:
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    const newExpense = {
      title: title,
      price: amount,
      date: new Date(date),
    };
    props.onSaveExpense(newExpense);
    setAmount("");
    setTitle("");
    setDate("");
    //refTitle.current.value = "";
  };

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            value={title}
            type='text'
            onChange={(event) => {
              updateForm(1, event);
            }}
          ></input>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            value={amount}
            type='number'
            onChange={(event) => {
              updateForm(2, event);
            }}
          ></input>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            value={date}
            type='date'
            max='2023-12-31'
            onChange={(event) => {
              updateForm(3, event);
            }}
          ></input>
        </div>
      </div>
      <div className='new-expense__actions'>{isFormValid && <button onClick={submitForm}>Add Expense</button>}</div>
    </form>
  );
};

export default ExpenseForm;
