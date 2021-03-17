let counter = 0;
let target = 0;

function createNewOrder() {
    counter++;
    document.getElementById("orderSection").innerHTML += 
   `<ul class="list-group list-group-horizontal" id = "${counter}">
        <li class="list-group-item User" id= "${"u"+counter}">New user</li>
        <li class="list-group-item ProductList" id="${"p"+counter}">No current products</li>
        <li class="list-group-item Edit">
            <button type="button" class="btn btn-primary" onclick="findTarget(${counter})" data-toggle="modal"data-target="#exampleModal" >Edit</button>
        </li>
        <li class="list-group-item Delete">
            <button type="button" onclick="deleteCurrentOrder(${counter})" class="btn btn-danger">Delete</button>
        </li>
    </ul>`;
}

function findTarget(vari){
    target = vari;
    setDefaultFields();
}

function editCurrentOrder() {
    let x = document.getElementById("editUsersName").value;
    let y = document.getElementById("editUsersOrder").value;
    document.getElementById(target).innerHTML = 
   `<li class="list-group-item User" id = "${"u"+ target}">${x}</li>
    <li class="list-group-item ProductList" id= ${"p"+target}>${y}</li>
    <li class="list-group-item Edit">
        <button type="button" class="btn btn-primary"  onclick="findTarget(${target})" data-toggle="modal"data-target="#exampleModal" >Edit</button>
    </li>
    <li class="list-group-item Delete">
        <button type="button" onclick="deleteCurrentOrder(${target})" class="btn btn-danger">Delete</button>
    </li>`;
}

function deleteCurrentOrder(deletion) {
    document.getElementById(deletion).remove();
}

function setDefaultFields() {
    let a = "u" + target;
    let b = "p" + target; 
    let c = document.getElementById(a).innerHTML;
    let d = document.getElementById(b).innerHTML;
    document.getElementById("editUsersName").value = c;
    document.getElementById("editUsersOrder").value = d;
}
