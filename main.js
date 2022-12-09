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

    if (item === null) {
        document.getElementById("error").innerHTML = "errror"
    } else {
        item = document.getElementById("newItem").value;
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
        item.innerHTML = element;
        
        lista.append(item)

        });
     
    }
    
}




/* 
// DISPLAY
function displayShoppings(shoppingList) {
    
    console.log(shoppingList)

    shoppingList.forEach(element => {
        const item = document.createElement("div")
        item.innerHTML = element;
        const lista = document.getElementById("shoppingList")
        lista.append(item)

    });
     
} */






//POISTA YKSI
/* document.getElementById("delete").onclick = funtion(){

} */




//TYHJÄÄ KAIKKI

/* funktio tyhjentää local storagen */
function reset() {
    console.log("local storage is empty")
    localStorage.removeItem("shoppingList")
    displayShoppings()
}