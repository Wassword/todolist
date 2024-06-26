
    const addTodoButton = document.getElementById('add-todo');
    const newTodoInput = document.getElementById('new-todo');
    const todoList = document.getElementById('todo-list');

    addTodoButton.addEventListener('click', () => {
        const todoText = newTodoInput.value.trim();

        if (todoText !== '') {
            const todoItem = document.createElement('li');
            todoItem.textContent = todoText;

            todoItem.addEventListener('click', () => {
                todoList.removeChild(todoItem);
            });

            todoList.appendChild(todoItem);
            newTodoInput.value = '';
            newTodoInput.focus();
        }
    });

    newTodoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodoButton.click();
        }
    });
;
