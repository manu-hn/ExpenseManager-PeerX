
import ModalForm from "../modal/ModalForm";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalWindow, toggleDeleteWindow, toggleUpdateWindow } from "../../redux/slices/userSlice";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import DeleteWindow from "../modal/DeleteWindow";
import { useState } from "react";
import EditModal from "../modal/EditModal";
import ReactDatePicker from "react-datepicker";

const ExpenseManager = () => {
  const dispatch = useDispatch();
  const [selectDate, setSelectDate] = useState(new Date());
  const [searchText, setSearchText] = useState("");
  const [deleteIndex, setDeleteIndex] = useState(0);
  const expensesInfo = useSelector(store => store.expenses.expensesInfo);
  const [searchedExpense, setSearchedExpense] = useState([]);
  const userInfo = useSelector(store => store.user.userInfo);

  const { isModalOpen, isDeleteModalOpen, isUpdateModalOpen } = useSelector(store => store.user);
  // console.log(expensesInfo?.dateOfExpense)
  const filteredExpenses = (expenses) => {
    if (!searchText) {
      setSearchedExpense(expenses);
      return;
    }

    const results = expenses.filter((expense) => (
      expense?.expenseName?.toLowerCase()?.includes(searchText?.toLowerCase()))
    );
    setSearchedExpense(results);
  }

  const filterExpenseDate = () => {
    const date = selectDate.getDate();
    const month = selectDate.getMonth() + 1;
    const year = selectDate.getFullYear();

    const fullDate = `${date}/${month}/${year}`;

    const results = expensesInfo.filter((expense)=>{
      return expense.dateOfExpense=== fullDate
    })
    console.log(fullDate)
    // console.log(results)

    setSearchedExpense(results);
};


  const deleteFilteredExpense = (index)=>{
    searchedExpense.splice(index, 1)
  }
  const editFilteredExpense = (obj) => {
    searchedExpense.splice(obj?.index, 1, obj?.expense)
  }
  const handleDeleteExpense = () => {
    dispatch(toggleDeleteWindow(true))
  }
  return (
    <>
      <div className="w-full flex flex-col items-center my-2">
        <div className="w-full px-1 md:w-3/4 flex justify-between items-center ">
          <h1 className="text-xs lg:text-lg md:text-sm hidden md:block">Expenses Manager</h1>
          <h1 className="text-xs md:text-lg block md:hidden">Expenses</h1>
          <section className="flex items-center w-3/4 justify-evenly">
            <ReactDatePicker placeholderText="Select Date" className='px-2 md:px-4 h-6 bg-gray-400 bg-opacity-60 rounded-md text-sm md:text-sm w-full py-1' id='dateOfExpense'
              value={selectDate} selected={selectDate} onChange={(date) => {

                setSelectDate(date)
                filterExpenseDate()
              }} />

            <input type="text" className="border border-black block h-6 w-16 md:w-80 px-4  rounded-lg text-[0.6rem] md:text-sm"
              onChange={(e) => {

                setSearchText(e.target.value);
                filteredExpenses(expensesInfo);

              }} placeholder="Search Expense" />

            <button onClick={() => dispatch(toggleModalWindow(true))}
              className="bg-blue-800 px-4 rounded-md md:px-6 text-white text-xs py-1 md:py-1 md:text-sm">Create</button>

          </section>

        </div>

        {(searchedExpense.length === 0 && searchText === '') ? (
          <div className="w-full my-2 px-1 md:w-3/4 flex flex-col justify-between items-center">
            <table className="w-full ">
              <thead className="w-full  bg-slate-400 ">
                <tr className="">
                  <th className="text-[0.6rem] align-middle xl:text-lg md:text-sm">ID</th>
                  <th className="text-[0.6rem] align-middle xl:text-lg md:text-sm">Name</th>
                  <th className="text-[0.6rem] align-middle xl:text-lg md:text-sm">Category</th>
                  <th className="text-[0.6rem] align-middle xl:text-lg md:text-sm hidden md:block">Date of Expense</th>
                  <th className="text-[0.6rem] align-middle xl:text-lg md:text-sm block md:hidden">DOE</th>
                  <th className="text-[0.6rem] align-middle xl:text-lg md:text-sm">Amount</th>
                  <th className="text-[0.6rem] align-middle xl:text-lg md:text-sm hidden md:block">Updated At</th>
                  <th className="text-[0.6rem] align-middle xl:text-lg md:text-sm block md:hidden">Updated</th>
                  <th className="text-[0.6rem] align-middle xl:text-lg md:text-sm">Created By</th>
                  <th className="text-[0.6rem] align-middle xl:text-lg md:text-sm text-slate-400">............</th>
                </tr>
              </thead>
              <tbody className="w-full bg-sky-300">
                {
                  expensesInfo.map((expense, index) => {
                    return (
                      <tr key={index} className="w-full">
                        <td className=" text-center text-[0.6rem] md:text-sm  ">{index + 1}</td>
                        <td className=" text-center text-[0.6rem] md:text-sm  ">{expense?.expenseName}</td>
                        <td className=" text-center text-[0.6rem] md:text-sm  ">{expense?.category}</td>
                        <td className=" text-center text-[0.6rem] md:text-sm  ">{expense?.dateOfExpense}</td>
                        <td className=" text-center text-[0.6rem] md:text-sm  ">{expense?.expenseAmount}</td>
                        <td className=" text-center text-[0.6rem] md:text-sm  ">{expense?.updatedAt}</td>
                        <td className=" text-center text-[0.6rem] md:text-sm  ">{expense?.createdBy === userInfo.displayName ? "Me" : expense?.createdBy}</td>
                        <td className=" flex justify-evenly items-center text-[0.6rem] md:text-sm">
                          <button onClick={() => {
                            dispatch(toggleUpdateWindow(true));
                            setDeleteIndex(index);

                          }}>
                            <FaEdit />
                          </button>
                          <button className="relative" onClick={() => {
                            setDeleteIndex(index);
                            handleDeleteExpense();

                          }}>
                            <MdDelete />

                          </button>
                        </td>
                      </tr>
                    )
                  })
                }

              </tbody>
            </table>
            {isDeleteModalOpen && <DeleteWindow index={deleteIndex} />}
          </div>

        ) : (<div className="w-full my-2 px-1 md:w-3/4 flex flex-col justify-between items-center">
          <table className="w-full ">
            <thead className="w-full  bg-slate-400 ">
              <tr className="">
                <th className="text-[0.6rem] align-middle xl:text-lg md:text-sm">ID</th>
                <th className="text-[0.6rem] align-middle xl:text-lg md:text-sm">Name</th>
                <th className="text-[0.6rem] align-middle xl:text-lg md:text-sm">Category</th>
                <th className="text-[0.6rem] align-middle xl:text-lg md:text-sm hidden md:block">Date of Expense</th>
                <th className="text-[0.6rem] align-middle xl:text-lg md:text-sm block md:hidden">DOE</th>
                <th className="text-[0.6rem] align-middle xl:text-lg md:text-sm">Amount</th>
                <th className="text-[0.6rem] align-middle xl:text-lg md:text-sm hidden md:block">Updated At</th>
                <th className="text-[0.6rem] align-middle xl:text-lg md:text-sm block md:hidden">Updated</th>
                <th className="text-[0.6rem] align-middle xl:text-lg md:text-sm">Created By</th>
                <th className="text-[0.6rem] align-middle xl:text-lg md:text-sm text-slate-400">............</th>
              </tr>
            </thead>
            <tbody className="w-full bg-sky-300">
              {
                searchedExpense.map((expense, index) => {
                  return (
                    <tr key={index} className="w-full">
                      <td className=" text-center text-[0.6rem] md:text-sm  ">{index + 1}</td>
                      <td className=" text-center text-[0.6rem] md:text-sm  ">{expense?.expenseName}</td>
                      <td className=" text-center text-[0.6rem] md:text-sm  ">{expense?.category}</td>
                      <td className=" text-center text-[0.6rem] md:text-sm  ">{expense?.dateOfExpense}</td>
                      <td className=" text-center text-[0.6rem] md:text-sm  ">{expense?.expenseAmount}</td>
                      <td className=" text-center text-[0.6rem] md:text-sm  ">{expense?.updatedAt}</td>
                      <td className=" text-center text-[0.6rem] md:text-sm  ">{expense?.createdBy === userInfo.displayName ? "Me" : expense?.createdBy}</td>
                      <td className=" flex justify-evenly items-center text-[0.6rem] md:text-sm">
                        <button onClick={() => {
                          dispatch(toggleUpdateWindow(true));
                          setDeleteIndex(index);
                          deleteFilteredExpense(index)

                        }}>
                          <FaEdit />
                        </button>
                        <button className="relative" onClick={() => {
                          setDeleteIndex(index);
                          handleDeleteExpense();
                          editFilteredExpense(index)

                        }}>
                          <MdDelete />

                        </button>
                      </td>
                    </tr>
                  )
                })
              }

            </tbody>
          </table>
          {isDeleteModalOpen && <DeleteWindow index={deleteIndex} />}
        </div>)
        }
      </div>
      {
        isUpdateModalOpen && <EditModal index={deleteIndex} />
      }
      {isModalOpen && <ModalForm />}
    </>
  )
}

export default ExpenseManager