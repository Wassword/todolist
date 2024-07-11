
    const addTodoButton = document.getElementById('add-todo') as HTMLButtonElement;
    const newTodoInput = document.getElementById('new-todo') as HTMLInputElement;
    const todoList = document.getElementById('todo-list') as HTMLOListElement;

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

    newTodoInput.addEventListener('keypress', (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            addTodoButton.click();
        }
    });
;
