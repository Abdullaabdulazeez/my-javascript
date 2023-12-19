const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
    name: '',
    dueDate: '',
    time : ''
}];

renderTodoList();

 function renderTodoList() {

    let toDoListHTML = '';

    for (let i = 0; i < todoList.length; i++ ) {
    const todoObject = todoList[i];
    //taking object outside
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const time = todoObject.time;
    const html = `<div>${name}</div>
    <div>${dueDate}</div> 
    <div>${time}</div>
        <button 
        onclick="todoList.splice(${i}, 1)
        renderTodoList();
        " class="todo-delete">Delete</button>
        `;
    toDoListHTML += html;
    }
    
    localStorage.setItem('todoList', JSON.stringify(todoList));

    document.querySelector('.js-todo-container').innerHTML = toDoListHTML;
}

function addToDo() {
    const inputElement = document.querySelector('.js-todo-input');
    const name = inputElement.value;

    const inputElementDate = document.querySelector('.js-duedate');
    const dueDate = inputElementDate.value;

    const inputElementTime = document.querySelector('.js-time');
    const time = inputElementTime.value;

    todoList.push({name,
        dueDate,
        time});

    inputElement.value = '';
    inputElementDate.value = '';
    renderTodoList();

}
function keyBoardPress(event) {
    if (event.key === 'Enter') {
        addToDo();
    }
}

