//to do list kaltainen ostoslista

//local storage, delete


if (localStorage.getItem("list") === null) {
    let list = [];
    localStorage.setItem("list", JSON.stringify(list));

    console.log("localstoragessa ei ollut tietoa mutta nyt on.");

} else {
    
    console.log("localstoragessa on jo tietoa")
}






// LISÄÄ
function add (list, item) {
    list.push(item)
    console.log(item)
    console.log(list)
}



//POISTA YKSI





//TYHJÄÄ KAIKKI
function reset() {
    console.log("tyhjennä")
    localStorage.removeItem("list")
    
}