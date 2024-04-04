// import { BASE_EXPENSE_URL } from "../constants";

// const useCreateExpenses = () => {

//     async function createExpenses(expenseData) {
//         console.log(expenseData);
//         try {
//             const response = await fetch(BASE_EXPENSE_URL + 'create-expense', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(expenseData)
//             });


//             const results = await response.json();
//             console.log(results);

//             return results;
//         } catch (error) {
//             console.error('Something Happened:', error);
//         }
//     }

//     return {createExpenses};
// }

// export default useCreateExpenses;
