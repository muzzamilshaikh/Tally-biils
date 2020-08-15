import React, { useState, createContext, useEffect } from "react";
const ContextBill = createContext();

function BillProvider({ children }) {
  const [bills, setBills] = useState([]);
  const [selectedCostIntervel, setSelectedCostIntervel] = useState("Monthly");
  const [editModeEnabled, setEditModeEnabled] = useState(false);

  useEffect(() => {
    setBills(JSON.parse(localStorage.getItem("bills")) || []);
  }, [setBills]);

  const aphlabeticalOrder = (bills) => {
    return bills.sort((a, b) =>
      a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 0
    );
  };
  const updateBills = (bill) => {
    const updatedBills = aphlabeticalOrder([...bills, bill]);
    localStorage.setItem("bills", JSON.stringify(updatedBills));
    setBills(updatedBills);
  };

  const editBills = (billToUpdate) => {
    const billsFiltered = bills.filter(
      (bill) => bill.title !== billToUpdate.title
    );

    const updatedBills = aphlabeticalOrder([...billsFiltered, billToUpdate]);
    localStorage.setItem("bills", JSON.stringify(updatedBills));
    setBills(updatedBills);
  };

  const deleteBill = (billToDelete) => {
    const updatedBills = bills.filter(
      (bill) => bill.title !== billToDelete.title
    );
    localStorage.setItem("bills", JSON.stringify(updatedBills));
    setBills(updatedBills);
  };
  return (
    <ContextBill.Provider
      value={{
        bills,
        updateBills,
        editBills,
        selectedCostIntervel,
        setSelectedCostIntervel,
        editModeEnabled,
        setEditModeEnabled,
        deleteBill,
      }}>
      {children}
    </ContextBill.Provider>
  );
}

export { ContextBill, BillProvider };
