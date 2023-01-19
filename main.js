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








