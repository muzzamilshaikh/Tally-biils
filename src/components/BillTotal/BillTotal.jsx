import React, { useContext } from "react";
import "./style.css";
import { ContextBill } from "../../context/ContextBill";
export default function BillTotal() {
  const { bills, selectedCostIntervel } = useContext(ContextBill);

  const moneyIntervelTransform = (cost) => {
    const monthlyCost = Number.parseFloat(cost);
    switch (selectedCostIntervel) {
      case "Monthly":
        return monthlyCost;
      case "Yearly":
        return monthlyCost * 12;

      case "Weekly":
        return (monthlyCost * 12) / 52;
      case "Daily":
        return (monthlyCost * 12) / 365;

      default:
        return 0;
    }
  };
  return (
    <div>
      <div className="bill-total-container">
        {selectedCostIntervel} Bill Cost :
        <span className="total-cost">
          {" "}
          &#8377;
          {
            +bills
              .reduce((acc, val) => {
                return val.enabled
                  ? moneyIntervelTransform(val.monthlyCost) + acc
                  : acc;
              }, 0)
              .toFixed(2)
          }
        </span>
      </div>

      <div className="total-saved-container">
        {selectedCostIntervel} Saved :
        <span className="total-save">
          {" "}
          &#8377;
          {
            +bills
              .reduce((acc, val) => {
                return !val.enabled
                  ? moneyIntervelTransform(val.monthlyCost) + acc
                  : acc;
              }, 0)
              .toFixed(2)
          }
        </span>
      </div>
    </div>
  );
}
