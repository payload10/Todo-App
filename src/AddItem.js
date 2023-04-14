import { FaPlus } from 'react-icons/fa';
import './AddItem.css';

                
const AddItem = ({addItem, handleSubmit, handleInputValue}) => {

    return (
        <form className='addItem' onSubmit={handleSubmit}>
            <input type="text" placeholder='Add an item' onChange = {handleInputValue} value={addItem}/>
            <button>
            <FaPlus id='plusIcon' />
            </button>
        </form>
    )
}

export default AddItem