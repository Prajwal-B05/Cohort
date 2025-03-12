
let ctr = 1;
function addtodo(){
    const list = document.createElement("div");
    list.setAttribute("id","todo-"+ctr);
    var add = document.getElementById("todoInput").value;
    list.innerHTML = "<li>"+add+'</li><button onclick="deletetodo('+ctr+')">Delete</button>';

    const element = document.querySelector("ul");
    element.appendChild(list);
    ctr = ctr+1;

}

function deletetodo(index){

    
    const elemnt = document.getElementById("todo-"+index);
    elemnt.parentNode.removeChild(elemnt);

}

function edittodo(){

}

function cleartext()
{
    document.querySelector("input").value="";
}

function addncldear()
{
    document.getElementById("btn").onclick = function()
    {
        addtodo();
        cleartext();
    }
}