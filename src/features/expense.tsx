import { useState } from "react";
// import axios from "axios";

const Expense = () => {
  const [budget, setBudget] = useState<Number>();
  const [expenses, setExpenses] = useState<{ name: string; amount: number }>({
    name: "",
    amount: 0,
  });

    const handleBudget = (e: React.ChangeEvent<HTMLInputElement>) => {
      // e.preventDefault()
      // const value  = Number(e.target.value);
      // if (isNaN(value)) {
      //   setBudget( value );
      // }
      const value  = Number(e.target.value);
      setBudget( value );
      console.log("Budget:", budget);
    }

    const budgetSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(budget)
  
      // try {
      //   const response = await axios.post("http://localhost:5000/auth/ForgotPassword", budget, {
      //     headers: {
      //       Accept: "application/json",
      //       "Content-Type": "application/json",
      //     },
      //   });
      //   console.log("success:" + response.data.message);
      // } catch (error) {
      //   console.log("Error submitting sheet: " + error);
      // }
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

    // try {
    //   const response = await axios.post("http://localhost:5000/auth/signup", expenses, {
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   console.log("success:" + response.data.message);
    // } catch (error) {
    //   console.log("Error submitting sheet: " + error);
    // }
  }

  return (
    <div>
      <h2 className="bg-[#340260] text-[#C2C2C2] p-2 font-bold text-xl rounded-md text-center">Add Your Monthly Budget</h2>

      <form className="flex flex-col items-center justify-center mt-4" onSubmit={budgetSubmit}>
        <input
          type="number"
          placeholder="Enter your budget"
          onChange={handleBudget}
          value={Number(budget)}
          className="border border-gray-300 rounded-md p-2 w-1/2 mb-4"
        />
        <button type="submit" className="bg-[#340260] text-white rounded-md p-2 w-1/2 cursor-pointer" >Add Budget</button>
      </form>

      <form className="flex flex-col items-center justify-center mt-4" onSubmit={expenseSubmit}>
        <input 
          type="text"
          placeholder="Enter your expense name"
          className="border border-gray-300 rounded-md p-2 w-1/2 mb-4"
          id= "name"
          onChange={handleExpense}
          value={expenses.name}
        />
        <input 
          type="number"
          placeholder="Enter your expense amount"
          className="border border-gray-300 rounded-md p-2 w-1/2 mb-4"
          id= "amount"
          onChange={handleExpense}
          value={expenses.amount}
        />
        <button type="submit" className="bg-[#340260] text-white rounded-md p-2 w-1/2 cursor-pointer">Add Expense</button>
      </form>
    </div>
  )
}

export default Expense;