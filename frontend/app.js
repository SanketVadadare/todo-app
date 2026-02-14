const API_URL = 'http://localhost:5000/api/todos';

// Load todos on page load
document.addEventListener('DOMContentLoaded', loadTodos);

async function loadTodos() {
    try {
        const response = await fetch(API_URL);
        const todos = await response.json();
        displayTodos(todos);
    } catch (error) {
        console.error('Error loading todos:', error);
    }
}

async function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    
    if (!text) return;
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        });
        
        if (response.ok) {
            input.value = '';
            loadTodos();
        }
    } catch (error) {
        console.error('Error adding todo:', error);
    }
}

async function deleteTodo(id) {
    try {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        loadTodos();
    } catch (error) {
        console.error('Error deleting todo:', error);
    }
}

function displayTodos(todos) {
    const list = document.getElementById('todoList');
    list.innerHTML = '';
    
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span>${todo.text}</span>
            <button class="delete-btn" onclick="deleteTodo('${todo._id}')">Delete</button>
        `;
        list.appendChild(li);
    });
}