
//necessary variables

let newTask= document.querySelector('#new-task')
let form = document.querySelector('form')
let incompleteUL = document.querySelector('#items')
let completeUL= document.querySelector('.complete-list ul')


//function

let createTask = function(task){

    let listItem = document.createElement('li')
    let checkbox= document.createElement('input')
    let label = document.createElement('label')

    label.innerText = task;
    checkbox.type = 'checkbox';

    listItem.appendChild(checkbox)
    listItem.appendChild(label)

    return listItem;

}

let addTask = function(e)
{
 e.preventDefault();
 let listItem = createTask (newTask.value);
 incompleteUL.appendChild(listItem)
 newTask.value = "" 
bindinComplete(listItem, completeTask)
}


let completeTask = function()
{

let listItem = this.parentNode;
let dltBtn = document.createElement('button')
dltBtn.innerText='Delete'
dltBtn.className = 'delete'
listItem.appendChild(dltBtn)


let checkbox = listItem.querySelector('input[type="checkbox"]')
checkbox.remove();
completeUL.appendChild(listItem)

bindComplete(listItem, dltTask)

}


let dltTask = function(){

let listItem = this.parentNode;
let ul = listItem.parentNode;
ul.removeChild(listItem)

}


let bindinComplete = function(taskItem, checkBoxClick){
    let checkBox = taskItem.querySelector('input[type="checkbox"]')
    checkBox.onchange = checkBoxClick;

}


let bindComplete = function(taskItem, deleteBtnClick){
 let dltButton = taskItem.querySelector('.delete')
 dltButton.onclick = deleteBtnClick;


}


for(let i=0; i< incompleteUL.children.length; i++ ) {
  bindinComplete(incompleteUL.children[i], completeTask);
}

for(let i=0; i< completeUL.children.length; i++ ) {
    bindComplete(completeUL.children[i], dltTask);
}

form.addEventListener('submit',addTask)