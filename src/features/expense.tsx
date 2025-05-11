import { useState } from "react";
import axios from "axios";

const Expense = () => {
  const [budget, setBudget] = useState<number>();
  const [expenses, setExpenses] = useState<{ name: string; amount: number }>({
    name: "",
    amount: 0,
  });

    const handleBudget = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value  = Number(e.target.value);
      setBudget( value );
      console.log("Budget:", budget);
    }

    const budgetSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(budget)
  
      try {
        const response = await axios.post("http://localhost:5000/budget", {amount: budget}, {
          headers: {
            Accept: "application/json",
            'Content-Type': "application/json",
          },
        });
        console.log("success:" + response.data.message);
      } catch (error) {
        console.log("Error submitting sheet: " + error);
      }
    }

  const handleExpense = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { id, value } = e.target as HTMLInputElement;
    setExpenses({...expenses, [id] : value});
    // console.log("Expense submitted:", expenses);
  }

  const expenseSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(expenses)

    try {
      const response = await axios.post("http://localhost:5000/expense", expenses, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log("success:" + response.data.message);
    } catch (error) {
      console.log("Error submitting sheet: " + error);
    }
  }

  return (
    <div className="h-screen">
      <h2 className="bg-[#340260] text-[#C2C2C2] p-2 font-bold text-sm md:text-xl rounded-md text-center">Add Your Monthly Budget</h2>

      <div className="flex flex-col gap-3">
        <form className="flex flex-col items-center justify-center mt-4 gap-2" onSubmit={budgetSubmit}>
          <input
            type="number"
            placeholder="Enter your budget"
            onChange={handleBudget}
            value={Number(budget)}
            id="amount"
            className="border border-gray-300 rounded-md p-2 w-full md:w-1/2 placeholder:text-sm"
          />
          <button type="submit" className="bg-[#340260] text-[#C2C2C2] rounded-lg p-2 w-1/2 cursor-pointer text-sm md:text-lg" >Add Budget</button>
        </form>

        <form className="flex flex-col items-center justify-center mt-4 gap-2" onSubmit={expenseSubmit}>
          <input 
            type="text"
            placeholder="Enter your expense name"
            className="border border-gray-300 rounded-lg p-2 w-full md:w-1/2 placeholder:text-sm"
            id= "name"
            onChange={handleExpense}
            value={expenses.name}
          />
          <input 
            type="number"
            placeholder="Enter your expense amount"
            className="border border-gray-300 rounded-lg p-2 w-full md:w-1/2 placeholder:text-sm"
            id= "amount"
            onChange={handleExpense}
            value={expenses.amount}
          />
          <button type="submit" className="bg-[#340260] text-[#C2C2C2] rounded-lg p-2 w-1/2 cursor-pointer text-sm md:text-lg">Add Expense</button>
        </form>
      </div>
    </div>
  )
}

export default Expense;