//alustetaan ostoslista
shoppingList = [];

//edellinen ostoslista
previousShoppingList = [];

/* Ohjelma katsoo löytyykö local storagesta ostoslistaa. Jos lista löytyy, ohjelma hakee sen. Ja jos ei, se asetetaan tyhjänä sinne */

if (localStorage.getItem("shoppingList") === null) {
    
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

    console.log("localstoragessa ei ollut tietoa mutta nyt on.");
    console.log(shoppingList)
} else {
    shoppingList = JSON.parse(localStorage.getItem("shoppingList"))
    previousShoppingList = JSON.parse(localStorage.getItem("previousShoppingList"))
    console.log(shoppingList)
    console.log("localstoragessa on jo tietoa")
    displayShoppings()
}

/* jos  */




// ADD
function add (shoppingList, item) {
    item = document.getElementById("newItem").value;

    if (item === "") {
        document.getElementById("error").innerHTML = "Input field is empty"
    } else {
        document.getElementById("error").innerHTML = ""
        console.log(item + "  lisätty item");
        shoppingList.push(item);
        console.log(shoppingList + " lista");
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
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('enter').click();
    }
});



// DISPLAY
function displayShoppings() {
    const lista = document.getElementById("shoppingList")
    lista.innerHTML = ""
    shoppingList = JSON.parse(localStorage.getItem("shoppingList")) 
    if (shoppingList === null) {
        console.log("List is empty")
    } else {
        shoppingList.forEach(element => {
        const item = document.createElement("div")
        item.classList.add("listItem")
        item.classList.add("notCollectedItem")
        item.innerHTML = element;
        
       /*  const img = document.createElement("img")
        img.src = 'check.png'
        document.getElementsByClassName("collectedItem") */
        
        //add item to the list
        lista.append(item)

      


        // marks item collected or not back to not collected
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
            lista.removeChild(item)
            console.log(shoppingList)
            shoppingList.splice(shoppingList.indexOf(element), 1)
            console.log(shoppingList)
            localStorage.setItem("shoppingList", JSON.stringify(shoppingList))
        })

        });
    }
    
}







//  RESET
//function set shoppingList as and empty array
function reset() {

    localStorage.setItem("previousShoppingList", JSON.stringify(shoppingList));

    shoppingList = [];
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList))

    console.log(shoppingList)
    displayShoppings()
}

//  UNDO
//function returns previous list
function undo() {
    shoppingList = JSON.parse(localStorage.getItem("previousShoppingList"))
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList))
    console.log(shoppingList)
    displayShoppings()
}