let counter = 0;
let target = 0;
function createNewOrder() {
    counter++;
   document.getElementById("orderSection").innerHTML += `<ul class="list-group list-group-horizontal" id = "${counter}"><li class="list-group-item User">New user</li><li class="list-group-item ProductList">No current products</li><li class="list-group-item Edit"><button type="button" class="btn btn-primary"  onclick="findTarget(${counter})" data-toggle="modal"data-target="#exampleModal" >Edit</button></li><li class="list-group-item Delete"><button type="button" class="btn btn-danger">Delete</button></li></ul>`;

}
function findTarget(vari){
 target = vari;
 console.log(vari);
}

function editCurrentOrder() {
    let x = document.getElementById("editUsersName").value;
    let y = document.getElementById("editUsersOrder").value;
   document.getElementById(target).innerHTML = `<li class="list-group-item User">${x}</li><li class="list-group-item ProductList">${y}</li><li class="list-group-item Edit"><button type="button" class="btn btn-primary"  onclick="findTarget(${counter})" data-toggle="modal"data-target="#exampleModal" >Edit</button></li><li class="list-group-item Delete"><button type="button" class="btn btn-danger">Delete</button></li>`;
}

function deleteCurrentOrder(counter) {
    let x = document.getElementById(counter).innerHTML;
    let y = document.getElementById(counter).innerHTML;
  }
