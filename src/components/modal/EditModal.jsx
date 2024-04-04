import PropTypes from 'prop-types';
import Form from './Form'
import { useDispatch } from 'react-redux'
import {  toggleUpdateWindow } from '../../redux/slices/userSlice'
import { editExpense } from '../../redux/slices/expenseSlice'

const EditModal = ({ index }) => {
    const dispatch = useDispatch()

    const handleExpenseEdit = async (expense) => {

        dispatch(editExpense({ expense, index }));
        dispatch(toggleUpdateWindow(false));
    }
    return (
        <div className="">

            <div className='fixed inset-0 bg-black bg-opacity-35 backdrop-blur-md flex justify-center items-center'>
                
                <Form title={'Update Expense'} type={'edit'} expenseCreator={(data) => handleExpenseEdit(data)} />
            </div>
        </div>
    )
}

EditModal.propTypes = {
    index: PropTypes.number
}

export default EditModal