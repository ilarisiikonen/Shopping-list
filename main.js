//alustetaan ostoslista
let shoppingList = [];


/* Ohjelma katsoo löytyykö local storagesta ostoslistaa. Jos lista löytyy, ohjelma hakee sen. Ja jos ei, se asetetaan sinne */

if (localStorage.getItem("shoppingList") === null) {
    
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

    console.log("localstoragessa ei ollut tietoa mutta nyt on.");
    console.log(shoppingList)
} else {
    let shoppingList = localStorage.getItem("shoppingList")
    console.log(shoppingList)
    console.log("localstoragessa on jo tietoa")
}





// LISÄÄ
function add (shoppingList, item) {
    item = document.getElementById("newItem").value;
 
    console.log(item)
    
    shoppingList.push(item)
    
    console.log(shoppingList)
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
}



//POISTA YKSI
/* documetn.getElementById("delete").onclick = funtion(){

} */




//TYHJÄÄ KAIKKI

/* funktio tyhjentää local storagen */
function reset() {
    console.log("Lista tyhjennetty local storagesta")
    localStorage.removeItem("shoppingList")
    /* window.location.reload(true); */
}