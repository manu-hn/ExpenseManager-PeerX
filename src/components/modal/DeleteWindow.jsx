import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteExpense, } from '../../redux/slices/expenseSlice';
import { toggleDeleteWindow } from '../../redux/slices/userSlice';


const DeleteWindow = ({ index }) => {
    const dispatch = useDispatch()

    console.log(index);
    return (
        <div>

            <div className=" right-16 w-48 md:w-72 bg-black bg-opacity-40 px-4 py-2 my-1 rounded-md">
                <h1 className='text-xs md:text-lg'>

                    Are you sure, You Want to delete this ?
                </h1>
                <div className="flex justify-evenly">
                    <button className="bg-red-500 px-6 py-1 rounded-md text-white text-xs md:text-sm md:px-7 " onClick={() => dispatch(toggleDeleteWindow(false))}>
                        No</button>
                    <button className="bg-green-500 px-6 py-1 rounded-md text-white text-xs md:text-sm md:px-7" onClick={() => {
                        dispatch(deleteExpense(index))
                        dispatch(toggleDeleteWindow(false))
                    }}>Yes</button>
                </div>
            </div>
        </div>
    )
}


DeleteWindow.propTypes = {
    index: PropTypes.number
}
export default DeleteWindow