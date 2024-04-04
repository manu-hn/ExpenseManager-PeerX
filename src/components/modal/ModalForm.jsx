import PropTypes from 'prop-types';

import Form from './Form';
import { useDispatch } from 'react-redux';
import { createExpense } from '../../redux/slices/expenseSlice';
import { toggleModalWindow } from '../../redux/slices/userSlice';


const ModalForm = () => {
    const dispatch = useDispatch();
   

    const handleExpenseCreate = async (expense) => {
       
        dispatch(createExpense(expense));
        dispatch(toggleModalWindow(false));
    }

    return (
        <div className="fixed inset-0">

            <div className='fixed inset-0 bg-black bg-opacity-35 backdrop-blur-md flex justify-center items-center'>
                <Form title={'Create New Expense'} type={'create'} expenseCreator={(data) => handleExpenseCreate(data)} />
            </div>
        </div>
    )
}

ModalForm.propTypes = {
    isOpen: PropTypes.bool
}
export default ModalForm