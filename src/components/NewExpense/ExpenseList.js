import Expense from "../Expense";

const Expenselist = (props) => {
  return (
    <div>
      {props.filterList.map((x, index) => (
        <Expense key={index} title={x.title} price={x.price} date={x.date} />
      ))}
    </div>
  );
};

export default Expenselist;
