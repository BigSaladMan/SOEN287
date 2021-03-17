function deleteList(target){
    var toDel = target.parentNode; //li element
    toDel.parentNode.parentNode.innerHTML = ""; //div of the item
}

function addToList(target){
    var toAddTo = target.parentNode.parentNode.children[1].innerHTML;
    var value1 = parseInt(window.prompt("Please enter numerical value of supplementary items.\ne.g. 10"));
    if (isNaN(value1)){
        window.alert("Please enter a numerical value. The previous entry was either not a number or in the wrong number format.");
    return;} 
    let value2= Number(toAddTo);
    let sum = value1 + value2;
    target.parentNode.parentNode.children[1].innerHTML= sum;
}

function removeFromList(target){
    var toRemoveFrom = target.parentNode.parentNode.children[1].innerHTML;
    var value1 = parseInt(window.prompt("Please enter ammount of items to remove.\ne.g. 10"));
    if (isNaN(value1)){
        window.alert("Please enter a numerical value. The previous entry was either not a number or in the wrong number format.");
    return;} 
    let value2= Number(toRemoveFrom);
    let sum = value2 - value1;
    target.parentNode.parentNode.children[1].innerHTML= sum;
}

function addItemToList(){
    var itemToAdd= window.prompt("Please enter the name of the new Item.\ne.g. Apples");
    var qteToAdd= window.prompt("Please enter quantity of the new product.\ne.g. 300");
    var ancestor=document.getElementById("PList");
    let grandpa= document.createElement('div');
    grandpa.setAttribute("id", itemToAdd);
    let parent= document.createElement('ul');
    parent.setAttribute("class", "list-group list-group-horizontal");
    let child1= document.createElement('li');
    child1.setAttribute("class", "list-group-item User")
    child1.innerHTML= itemToAdd;
    let child2= document.createElement('li');
    child2.setAttribute("class", "list-group-item ProductList")
    child2.innerHTML= qteToAdd;
    let child3= document.createElement('li');
    child3.setAttribute("class", "list-group-item Edit")

    let youngerChild1= document.createElement('button');
    youngerChild1.setAttribute("type", "button");
    youngerChild1.setAttribute("class", "btn btn-primary");
    youngerChild1.onclick=addToList(this);
    youngerChild1.innerHTML= "Add";

    let lb1= document.createElement('br');
    let lb2= document.createElement('br');

    let youngerChild2= document.createElement('button');
    youngerChild2.setAttribute("type", "button");
    youngerChild2.setAttribute("class", "btn btn-primary");
    youngerChild2.onclick=removeFromList(this);
    youngerChild2.innerHTML= "Remove";

    child3.appendChild(youngerChild1);
    child3.appendChild(lb1);
    child3.appendChild(lb2);
    child3.appendChild(youngerChild2);

    let child4= document.createElement('li');
    child4.setAttribute("class", "list-group-item Delete");

    let youngerChild3= document.createElement('button');
    youngerChild3.setAttribute("type", "button");
    youngerChild3.setAttribute("class", "btn btn-danger");
    youngerChild3.onclick=deleteList(this);
    youngerChild3.innerHTML= "Delete";

    child4.appendChild(youngerChild3);

    parent.appendChild(child1);
    parent.appendChild(child2);
    parent.appendChild(child3);
    parent.appendChild(child4);

    grandpa.appendChild(parent);
    ancestor.appendChild(grandpa);
    

}