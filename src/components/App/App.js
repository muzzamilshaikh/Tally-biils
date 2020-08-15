import React, { useContext } from "react";
import "./App.css";
import AddBill from "../AddBill/AddBill";
import { ContextBill } from "../../context/ContextBill";
import BillList from "../BillList/BillList";
import BillTotal from "../BillTotal/BillTotal";
import BillOptions from "../BilldOptions/BillOptions";
import EditBills from "../EditBills/EditBills";

function App() {
  const { editModeEnabled } = useContext(ContextBill);
  return (
    <div className="bills-container">
      {editModeEnabled ? (
        <EditBills />
      ) : (
        <span>
          <BillOptions />
          <AddBill />
          <BillTotal />
          <BillList />
        </span>
      )}
    </div>
  );
}

export default App;
