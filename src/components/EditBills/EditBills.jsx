import React, { useContext } from "react";
import { ContextBill } from "../../context/ContextBill";
import "./style.css";
export default function EditBills() {
  const { bills, setEditModeEnabled, editBills, deleteBill } = useContext(
    ContextBill
  );
  return (
    <div className="edit-bill-container">
      <h6
        className="edit-mode-done-btn"
        onClick={() => setEditModeEnabled(false)}>
        Done
      </h6>
      {bills.map((bill, billIndex) => {
        return (
          <div key={billIndex} className="edit-bill-row">
            <div className="edit-bill-row-content">
              <div className="edit-bill-title">{bill.title}</div>
              <input
                type="number"
                className="edit-bill-cost-input"
                value={bill.monthlyCost}
                onChange={(e) =>
                  editBills({
                    title: bill.title,
                    enabled: bill.enabled,
                    monthlyCost: e.target.value,
                  })
                }
              />
              <h6 onClick={() => deleteBill(bill)} className="delete-button">
                DELETE
              </h6>
              <hr />
            </div>
          </div>
        );
      })}
    </div>
  );
}
