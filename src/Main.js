import SearchItem from './SearchItem.js';
import { FaTrash } from 'react-icons/fa';
import AddItem from './AddItem.js';
import './Main.css'

const Main = ({groceryItems, handleCheckbox, handleDelete, addItem, setAddItem, handleAddItem, handleSubmit, handleInputValue, search, handleSearchValue}) => {

    return (
        <main>
            <SearchItem 
                search={search}
                handleSearchValue={handleSearchValue}
            />
            <AddItem 
                addItem={addItem}
                setAddItem={setAddItem}
                handleAddItem={handleAddItem}
                handleSubmit={handleSubmit}
                handleInputValue={handleInputValue}
            />
            <ul>
                {
                    groceryItems.map((eachItem) => (

                        <li className='groceryList' key={eachItem.id} >
                            <input type="checkbox" className='checkbox' checked={eachItem.checked} onChange= {() => handleCheckbox(eachItem.id)} />
                            <h3 style={(eachItem.checked) ? {textDecoration: "line-through"} : null}>{eachItem.itemName}</h3>
                            <FaTrash className='trashBox' onClick = {() => handleDelete(eachItem.id)}/>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}

export default Main