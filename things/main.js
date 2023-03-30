

window.addEventListener('load', () => {
    // Any items saved in localStorage, we are able to get them or the array will stay empty
    todos = JSON.parse(localStorage.getItem('todos')) || [];

    // Declare a variable for <input> within <h2> with id="name"
    const nameInput = document.querySelector('#name');

    // Declare a variable for <form> with id="new-todo-form"
    const newTodoForm = document.querySelector('#new-todo-form');

    // We are able to get a username from localStorage
    const username = localStorage.getItem('username') || '';

    // Any name that was typed in the <input> with id="name", will be stored with username key in localStorage
    nameInput.value = username;

    // Allows to change the name that was typed in the <input> with id="name" and store it in localStorage
    nameInput.addEventListener('change', e => {
        localStorage.setItem('username', e.target.value);
    })

    newTodoForm.addEventListener('submit', e => {
        e.preventDefault() // prevents from submitting the form without input

        // Declare a variable that holds <input> from the from with id="new-todo-form"
        const todo = {
            content: e.target.elements.content.value, // gets value from <input> with id="content"
            category: e.target.elements.category.value, // get value from class="options", where each option has its own id (e.g. "category1", "category2")
            done: false, // a class that will be false by default
            createdAt: new Date().getTime() // get a time stamp (current date and time)
        }


        // todos = global variable above, which will be pushed to localStorage (add new todos to the array)
        todos.push(todo);

        // Save all localStorage items, where JSON.stringify turns our todos list into an array and store it in localStorage
        localStorage.setItem('todos', JSON.stringify(todos));

        //Reset our target, so once we submit a to do, the name and category won't be filled and ticked
        e.target.reset();


        // Call function to display all the todos that are saved in localStorage
        DisplayTodos();
    })

    // Again! We can also call at the end of our event listener, in order to call it as soon as the page is loaded
    DisplayTodos();
})

function DisplayTodos() {
    const todoList = document.querySelector('#todo-list'); // new element, where will push todos 

    todoList.innerHTML = ""; // the to do list is empty, every time we refresh it


    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item'); // for every single todo, we will create a new element <div>

        const label = document.createElement('label'); // for every single todo, we will create a new element <label>
        const input = document.createElement('input'); // for every single todo, we will create a new element <input> that is our checkbox
        const span = document.createElement('span');
        const content = document.createElement('div');
        const actions = document.createElement('div'); // hold our actions 
        const edit = document.createElement('button'); // edit button
        const deleteButton = document.createElement('button'); // delete button

        input.type = 'checkbox';
        input.checked = todo.done;
        span.classList.add('bubble');


        // It will tell is it blue or pink
        if (todo.category == 'personal') {
            span.classList.add('personal');
        } else {
            span.classList.add('business');
        }

        // Add styling 
        content.classList.add('todo-content');
        actions.classList.add('actions');
        edit.classList.add('edit');
        deleteButton.classList.add('delete');

        content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
        edit.innerHTML = 'Edit';
        deleteButton.innerHTML = 'Delete';

        label.appendChild(input);
        label.appendChild(span);
        actions.appendChild(edit);
        actions.appendChild(deleteButton);
        todoItem.appendChild(label);
        todoItem.appendChild(content);
        todoItem.appendChild(actions);

        todoList.appendChild(todoItem)

        if (todo.done) {
            todoItem.classList.add('done');
        }

        input.addEventListener('click', e => {
            todo.done = e.target.checked;
            localStorage.setItem('todos', JSON.stringify(todos));

            if (todo.done) {
                todoItem.classList.add('done');
            } else {
                todoItem.classList.remove('done');
            }
            DisplayTodos();
        })

        edit.addEventListener('click', (e) => {
            const input = content.querySelector('input');
            input.removeAttribute('readonly'); // removing readonlz value, so we it allows to edit each to do
            input.focus();
            input.addEventListener('blur', (e) => { // when we click outside input field, it will stop editing
                input.setAttribute('readonly', true);
                todo.content = e.target.value;
                localStorage.setItem('todos', JSON.stringify(todos));
                DisplayTodos()

            })
        })

        deleteButton.addEventListener('click', (e) => {
            todos = todos.filter(t => t != todo);
            localStorage.setItem('todos', JSON.stringify(todos));
            DisplayTodos()
        })

    })
}
