import React, { useContext } from "react";

import "./style.css";
import { ContextBill } from "../../context/ContextBill";
export default function BillList() {
  const { bills, editBills, setEditModeEnabled } = useContext(ContextBill);
  return (
    <div className="bill-list-container">
      <h6 className="edit-mode-btn" onClick={() => setEditModeEnabled(true)}>
        Edit Price
      </h6>
      {bills.map((bill, index) => {
        return (
          <div key={index} className="bill-list-row">
            <input
              type="checkbox"
              className="form-check-input"
              checked={bill.enabled}
              onChange={() =>
                editBills({
                  title: bill.title,
                  monthlyCost: bill.monthlyCost,
                  enabled: !bill.enabled,
                })
              }
            />
            <div className="bill-list-row-content">
              {bill.title} - &#8377;{bill.monthlyCost}
            </div>
          </div>
        );
      })}
    </div>
  );
}
