import React, { useState, useContext } from "react";
import "./style.css";
import { ContextBill } from "../../context/ContextBill";

const AddBill = () => {
  const [newBillTitle, setNewBillTitle] = useState("");
  const [newBillCost, setNewBillCost] = useState("");

  const { updateBills } = useContext(ContextBill);
  const billObjectValid = () => {
    //newBillCost is truthy and is a number
    const costValid = newBillCost && Number.parseFloat(newBillCost);
    const titleValid =
      newBillTitle && newBillTitle.split("").find((char) => char !== " ");
    return titleValid && costValid;
  };
  const clearForm = () => {
    setNewBillTitle("");
    setNewBillCost("");
  };

  return (
    <div className="add-bill-container">
      <input
        className="add-bill-form-control form-control"
        type="text"
        placeholder="Enter Bill Title"
        value={newBillTitle}
        onChange={(e) => {
          setNewBillTitle(e.target.value);
        }}
      />

      <input
        className="add-bill-form-control form-control"
        type="number"
        placeholder="Enter Bill Cost"
        value={newBillCost}
        onChange={(e) => {
          setNewBillCost(e.target.value);
        }}
      />
      <button
        className="add-bill-form-control btn btn-style"
        onClick={() => {
          if (billObjectValid()) {
            updateBills({
              title: newBillTitle,
              monthlyCost: newBillCost,
              enabled: true,
            });
            clearForm();
          }
        }}>
        Add Bill
      </button>
    </div>
  );
};

export default AddBill;
