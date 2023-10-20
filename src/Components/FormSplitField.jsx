import { useState } from "react";
import Button from "./Btn";

function FormSplitField({ selection }) {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const paidByFriend = bill ? bill - expense : "";
  const [whopaid, setWhopaid] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByFriend) return;
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split the bill with {selection.name}</h2>

      <label> 👍 Bill value</label>
      <input
        type="text"
        onChange={(e) => {
          setBill((el) => (el = +e.target.value));
        }}
      />
      <label> 😰 your expense</label>
      <input
        value={expense}
        type="text"
        onChange={(e) => {
          setExpense((el) =>
            +e.target.value > bill ? expense : +e.target.value
          );
        }}
      />
      <label> 🐭 {selection.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />
      <label> 🦢 Who is paying the bill</label>
      <select onChange={(e) => setWhopaid((el) => (el = e.target.value))}>
        <option value="user">You</option>
        <option value="friend">{selection.name}</option>
      </select>

      <Button> Split bill</Button>
    </form>
  );
}

export default FormSplitField;
