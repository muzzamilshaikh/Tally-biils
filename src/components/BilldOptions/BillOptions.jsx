import React, { useContext } from "react";
import { ContextBill } from "../../context/ContextBill";
import "./style.css";
export default function BillOptions() {
  const { selectedCostIntervel, setSelectedCostIntervel } = useContext(
    ContextBill
  );

  return (
    <div className="intervel-option-container">
      <div>
        <h3 className="headline">Tally Your Bills For </h3>
      </div>
      <div
        className={
          selectedCostIntervel === "Daily" ? "selected-intervel" : "intervel"
        }
        onClick={(e) => setSelectedCostIntervel(e.target.innerText)}>
        Daily
      </div>
      <div
        className={
          selectedCostIntervel === "Weekly" ? "selected-intervel" : "intervel"
        }
        onClick={(e) => setSelectedCostIntervel(e.target.innerText)}>
        Weekly
      </div>

      <div
        className={
          selectedCostIntervel === "Monthly" ? "selected-intervel" : "intervel"
        }
        onClick={(e) => setSelectedCostIntervel(e.target.innerText)}>
        Monthly
      </div>

      <div
        className={
          selectedCostIntervel === "Yearly" ? "selected-intervel" : "intervel"
        }
        onClick={(e) => setSelectedCostIntervel(e.target.innerText)}>
        Yearly
      </div>
    </div>
  );
}
