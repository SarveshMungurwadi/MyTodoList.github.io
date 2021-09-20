//Selectors
const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");
const filteroption=document.querySelector(".filter-todo");


//Event Listeners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deletecheck);
filteroption.addEventListener("click",filterTodo);


//Functions

function addTodo(event)
{
    
    event.preventDefault();//prevent form from submitting
    //Todo div
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");
    //Create li
    const newTodo=document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //ADD todo to local storage
    // saveLocaltodos(todoInput.value);

    //check mark button
    const completedButton=document.createElement('button');
    completedButton.innerHTML= '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    
    todoDiv.appendChild(completedButton);
    
    //check trash button
    const trashButton=document.createElement('button');
    trashButton.innerHTML= '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv); 
    //clear todo input value
    todoInput.value="";
}

function deletecheck(event){
    const item=event.target;



    //Delete Todo
    if(item.classList[0]==="trash-btn")
    {
        const todo=item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
        // todo.remove();
    }

    if(item.classList[0]==="complete-btn")
    {
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
}


function filterTodo(e){
    const todos=todoList.childNodes;
    todos.forEach(function(todo)
    {
        switch(e.target.value){
            case "all":
                todo.style.display="flex";
                break;
            case "completed":
                if(todo.classList.contains('completed'))
                {
                    todo.style.display='flex';
                }
                else{
                    todo.style.display="none";
                }
                break;

            case "uncompleted":
                if(!todo.classList.contains('completed'))
                {
                    todo.style.display='flex';

                }
                else{
                    todo.style.display="none";
                }
                break;
        }

    });

  
}
// function saveLocaltodos(todo){
//     //Check do i already have thing in there
//     let todos;
//     if(localStorage.getItem('todos')===null)
//     {
//         todos=[];
//     }
//     else{
//         todos.JSON.parse(localStorage.getItem('todos'));
//     }
//     todos.push(todo);
//     localStorage.setItem('todos',JSON.stringify(todos));

// }