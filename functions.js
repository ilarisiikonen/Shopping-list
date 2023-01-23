// ADD
const add = (shoppingList, item) => {
    item = {
        name: document.getElementById("newItem").value,
        state: false
    }

    if (item.name === "") {
        document.getElementById("error").innerHTML = "Input field is empty"
    } else {
        document.getElementById("error").innerHTML = ""
        shoppingList.push(item);

        localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

        //clear input
        document.querySelector('#newItem').value = "";  

        // display
        displayShoppings() 
    }
    
}


/* add items with enter key */
const field = document.getElementById('newItem');

field.addEventListener("keyup", function(event) {
    if (event.code == "Enter") {
        event.preventDefault();
        document.getElementById('enter').click();
    }
});


 

// DISPLAY
const displayShoppings = () => {
    const list = document.getElementById("shoppingList")
    list.innerHTML = ""
    shoppingList = JSON.parse(localStorage.getItem("shoppingList")) 
    const items = shoppingList.map(({ name }) => name)

    
        
        items.forEach(element => {
        const item = document.createElement("div")
        item.classList.add("listItem")
        
        item.innerHTML = element;
        
        list.append(item) //add item to the list
        
        if (shoppingList[items.indexOf((element), 0)].state === false) {
            item.classList.add("notCollectedItem")
        } else {
            item.classList.remove("notCollectedItem")
            item.classList.add("collectedItem")
        } 
      

        //mark as collected
        item.addEventListener('click', function(){
                   
            if (shoppingList[items.indexOf((element), 0)].state === false) {
               
                item.classList.remove("notCollectedItem")
                item.classList.add("collectedItem")
                shoppingList[items.indexOf((element), 0)].state = true
                localStorage.setItem("shoppingList", JSON.stringify(shoppingList))
            } else {
                shoppingList[items.indexOf((element), 0)].state = false
                localStorage.setItem("shoppingList", JSON.stringify(shoppingList))
                item.classList.remove("collectedItem")
                item.classList.add("notCollectedItem")
            } 
        })
               

            //delete item form list
            //double click works on mobile but not in dev tools "mobile mode"
        item.addEventListener('dblclick', function(){
            list.removeChild(item)
            localStorage.setItem("previousShoppingList", JSON.stringify(shoppingList));
            shoppingList.splice(shoppingList.indexOf(element), 1)
            localStorage.setItem("shoppingList", JSON.stringify(shoppingList))
        })
    });
}


//  RESET
//function set shoppingList as and empty array
const reset = () => {

    localStorage.setItem("previousShoppingList", JSON.stringify(shoppingList));

    shoppingList = [];
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList))

    displayShoppings()
}

//  UNDO
//function returns previous list
const undo = () => {
    shoppingList = JSON.parse(localStorage.getItem("previousShoppingList"))
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList))

    displayShoppings()
}