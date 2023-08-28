const addButton = document.getElementById("add-btn")
const inputTask = document.getElementById('input-todo')
const todoList = document.getElementById('todo-list')
const tasks =  document.querySelectorAll('.todo-task')


const ifNoTask = document.createElement('div');
ifNoTask.innerHTML = `<h1> NO Task Added </h1>`
ifNoTask.classList.add('no-task')



if(tasks.length ===0){
    todoList.replaceWith(ifNoTask)
}


function addTask(){
   
    ifNoTask.replaceWith(todoList)
    if(inputTask.value.trim().length == 0){
        alert("Please enter something")
    }
else  {

    const newTask = document.createElement("li")
    newTask.innerHTML = `  <li class="todo-task ">
    <div class="task-data">
        <input type="checkbox" class="task-checkbox">
        <span class="task-text">${inputTask.value}</span>
    </div>
   
    <button class="delete-btn">Delete</button>
</li>`
todoList.appendChild(newTask)

inputTask.value="";
}
}

addButton.addEventListener('click' , addTask);


function onClickTask(e){

    if(e.target.classList.contains("task-checkbox") ){

    
        e.target.parentElement.classList.toggle("lineThrough")
    }
    else if(e.target.classList.contains("delete-btn")){
        e.target.parentElement.remove();
        if(tasks.length ===0){
            todoList.replaceWith(ifNoTask)
        }
        
    }

}
todoList.addEventListener('click' , onClickTask)

