//alustetaan ostoslista
shoppingList = [];


/* Ohjelma katsoo löytyykö local storagesta ostoslistaa. Jos lista löytyy, ohjelma hakee sen. Ja jos ei, se asetetaan sinne */

if (localStorage.getItem("shoppingList") === null) {
    
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

    console.log("localstoragessa ei ollut tietoa mutta nyt on.");
    console.log(shoppingList)
} else {
    shoppingList = JSON.parse(localStorage.getItem("shoppingList"))
    console.log(shoppingList)
    console.log("localstoragessa on jo tietoa")
    displayShoppings()
}





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

    shoppingList = [];
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList))
    console.log(shoppingList)
    displayShoppings()
}