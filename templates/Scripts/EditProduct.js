function deleteList(target){
    var toDel = target.parentNode; //li element
    toDel.parentNode.parentNode.innerHTML = ""; //div of the item
}

function addToList(target){
    var toAddTo = target.parentNode.parentNode.children[1].innerHTML;
    let value1= Number(toAddTo);
    let value2= Number(prompt("Please enter the value of supplementary items"));
    let sum = value1 + value2;
    target.parentNode.parentNode.children[1].innerHTML= sum;
}