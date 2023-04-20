import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import React, { useState } from 'react';
import './App.css';


function App() {

  // || MAIN PROP DRILLING:
  const[groceryItems, setGroceryItems] = useState(JSON.parse(localStorage.getItem("groceryList")) || []);



    // Handle the state of Checkbox:
    const handleCheckbox = (id) => {

        // The checkedbox id will be passed here.
        console.log(id);

        const checkedGroceryItemList = groceryItems.map((eachItem) => 
        
            // If passed id is equal to the groceryItems array id then change the checkbox state else just return the grocery item as it is:
            (eachItem.id === id) ? {...eachItem, checked: !eachItem.checked} : eachItem
        );

        // Set the new state of the list:
        setGroceryItems(checkedGroceryItemList);
        localStorage.setItem("groceryList", JSON.stringify(checkedGroceryItemList));
    };


    // Handle delete:
    const handleDelete = (id) => {
        
        // Return updated array (remove the deleted item from the array):
        const deletedGroceryItemList = groceryItems.filter((eachItem) => {

            console.log(id)
            
            return ((eachItem.id !== id) ? eachItem : null);
        });

        // Set the new state of the list:
        setGroceryItems(deletedGroceryItemList);
        localStorage.setItem("groceryList", JSON.stringify(deletedGroceryItemList));
    };




    // || ADD ITEM PROP DRILLING:
    const[addItem, setAddItem] = useState('');

    const handleAddItem = (itemName) => {

        // Set the id of new item else if no item is present then make the item itself as the first item:
        const id = (groceryItems.length) ? groceryItems[groceryItems.length - 1].id + 1 : 1;
        
        const newAddedItem = {

            id,
            checked: false,
            itemName
        }

        // New Item list:
        const newItemList = [...groceryItems, newAddedItem];
        setGroceryItems(newItemList);
        localStorage.setItem("groceryList", JSON.stringify(newItemList));
    };

    const handleInputValue = (event) => {

        // Set the new value of add item
        const newItem = event.target.value;
        setAddItem(newItem);
    }

    const handleSubmit = (event) => {

        event.preventDefault();

        if (!addItem) return;
        setAddItem('');

        handleAddItem(addItem);
    };




    // || SEARCH PROP DRILLING:
    const [search, setSearch] = useState('');

    const handleSearchValue = (event) => {

        // Set the new value of add item
        const searched = event.target.value;
        setSearch(searched);
    }

    

    return (
      <div className="App">
          <Header />
          <Main 
            groceryItems={groceryItems.filter(searchedItem => ((searchedItem.itemName).toLowerCase()).includes(search.toLowerCase()))}
            handleCheckbox={handleCheckbox}
            handleDelete={handleDelete}
            addItem={addItem}
            setAddItem={setAddItem}
            handleAddItem={handleAddItem}
            handleSubmit={handleSubmit}
            handleInputValue={handleInputValue}
            handleSearchValue={handleSearchValue}
          />
          <Footer
            groceryItems={groceryItems.length}
          />
      </div>
  );
}

export default App;
