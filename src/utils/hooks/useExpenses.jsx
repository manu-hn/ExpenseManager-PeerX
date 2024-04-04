// import { useEffect } from "react";
// import { BASE_EXPENSE_URL } from "../constants";
// import { useDispatch } from "react-redux";
// import { createExpense } from "../../redux/slices/expenseSlice";



// const useExpenses = () => {
//     const dispatch = useDispatch();

//     useEffect(() => {
//         fetchExpenses();
//     }, [])

//     async function fetchExpenses() {

//         const response = await fetch(BASE_EXPENSE_URL + 'get-expenses', { method: 'GET', headers: { 'Content-Type': 'application/json' } });

//         const results = await response.json();
//         const { data } = results
//         dispatch(createExpense([...data]))
//         console.log(results);
//     }



// }

// export default useExpenses