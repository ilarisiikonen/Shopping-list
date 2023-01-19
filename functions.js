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
    console.log(items)

    if (shoppingList === null) {
        console.log("List is empty")
    } else {

        items.forEach(element => {
        const item = document.createElement("div")
        item.classList.add("listItem")
        item.classList.add("notCollectedItem")
        item.innerHTML = element;
        
        list.append(item) //add item to the list

                //mark as collected
                item.addEventListener('click', function(){
                if (item.classList.contains("collectedItem")) {

                    item.classList.remove("collectedItem")
                    item.classList.add("notCollectedItem")
                } else {

                    item.classList.remove("notCollectedItem")
                    item.classList.add("collectedItem")
                }
            })

            //delete item form list
            //double click works on mobile but not in dev tools "mobile mode"
             item.addEventListener('dblclick', function(){
                list.removeChild(item)
                shoppingList.splice(shoppingList.indexOf(element), 1)
                localStorage.setItem("shoppingList", JSON.stringify(shoppingList))
            })

        });
    }
}


//  RESET
//function set shoppingList as and empty array
const reset = () => {

    localStorage.setItem("previousShoppingList", JSON.stringify(shoppingList));

    shoppingList = [];
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList))

    console.log(shoppingList)
    displayShoppings()
}

//  UNDO
//function returns previous list
const undo = () => {
    shoppingList = JSON.parse(localStorage.getItem("previousShoppingList"))
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList))
    console.log(shoppingList)
    displayShoppings()
}