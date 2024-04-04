import React from 'react';
import PropTypes from 'prop-types';
import { MdOutlineCancel } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalWindow, toggleUpdateWindow } from '../../redux/slices/userSlice';
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from 'react-datepicker';


const Form = ({ expenseCreator, title, type }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [expenseData, setExpenseData] = useState({
        expenseName: "",
        description: "",
        category: "health",
        dateOfExpense: '',
        expenseAmount: "",
        updatedAt: "",
        createdBy: "",

    });
    const dispatch = useDispatch();
    const { isModalOpen, userInfo, isUpdateModalOpen } = useSelector(store => store?.user);

    const handleDataChange = (e) => {
        const date = startDate.getDate();
        const month = startDate.getMonth() + 1;
        const year = startDate.getFullYear();
        setExpenseData({ ...expenseData, [e.target.id]: e.target.value, createdBy: userInfo?.displayName, dateOfExpense: (date + '/' + month + '/' + year) });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const currentDate = new Date();
        const formattedDate = ` ${currentDate.toLocaleTimeString()}`;
        const updatedExpenseData = { ...expenseData, updatedAt: formattedDate };

        expenseCreator(updatedExpenseData);
    }

    if (!isModalOpen && !isUpdateModalOpen) return null;
    return (

        <div className="flex flex-col items-end">
            <button className="" onClick={() => dispatch(type === 'create' ? toggleModalWindow(false) : toggleUpdateWindow(false))}>
                <MdOutlineCancel className="text-3xl text-red-500" />
            </button>
            <form action="" className="bg-sky-100 bg-opacity-35 h-[20rem] md:h-[28rem] px-4
            w-56 md:w-80 flex flex-col rounded-lg shadow-md justify-evenly" onSubmit={handleFormSubmit}>
                <h1 className='text-sm md:text-lg text-center font-semibold'>{title}</h1>
                <div className="flex flex-col">
                    <label htmlFor="expenseName" className='text-sm md:text-lg'>Expense Name </label>
                    <input type="text" id="expenseName" name="expenseName" value={expenseData?.expenseName}
                        onChange={handleDataChange} maxLength={140}
                        className="bg-gray-400 bg-opacity-60 text-black placeholder:text-white px-2 text-xs md:text-sm md:px-4 py-1 rounded-md"
                        placeholder="Enter Name of Expense" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="description" className='text-sm md:text-lg'>Description </label>
                    <textarea value={expenseData?.description}
                        onChange={handleDataChange} name="description" id="description" cols="30" rows="3"
                        className="bg-gray-400 bg-opacity-60 text-black placeholder:text-white px-2 text-xs md:text-sm md:px-4 py-1 rounded-md"
                        placeholder="Enter Description"
                    ></textarea>

                </div>
                <div className="flex flex-col">
                    <label htmlFor="category" className='text-sm md:text-lg'>Category </label>

                    <select name="category" id="category" onChange={handleDataChange} className='bg-gray-400 bg-opacity-60 text-black border-none outline-none rounded-md px-2 md:px-4'>
                        <option value="Health">Health</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Travel">Travel</option>
                        <option value="Education">Education</option>
                        <option value="Books">Books</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="dateOfExpense" className='text-sm md:text-sm'>Date of Expense </label>

                    <ReactDatePicker className='px-2 md:px-4 bg-gray-400 bg-opacity-60 rounded-md text-sm md:text-sm w-full py-1' id='dateOfExpense'
                        value={startDate} selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="expenseAmount" className='text-sm md:text-lg'>Expense Amount </label>
                    <input type="number" id="expenseAmount" name="expenseAmount" value={expenseData?.expenseAmount}
                        onChange={handleDataChange} min={0}
                        className="bg-gray-400 bg-opacity-60 text-black placeholder:text-white px-2 text-xs md:text-sm md:px-4 py-1 rounded-md"
                        placeholder=" Expense Amount" />
                </div>
                <div className="flex justify-center ">

                    <button className="bg-green-500 px-3 md:px-4 py-1 rounded-md text-white text-sm md:text-lg" type='submit'>{type === 'create' ? "Create" : 'Update'}</button>
                </div>
            </form>

        </div>
    )
}

Form.propTypes = {
    expenseCreator: PropTypes.func,
    title: PropTypes.string,
    type: PropTypes.string

}
export default Form