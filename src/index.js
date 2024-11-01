import './styles.css';


document.addEventListener('DOMContentLoaded', () => {
    const dialog = document.getElementById('myDialog');
    const form = document.querySelector('form');
    const todoContainer = document.querySelector('.todo_container');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const description = document.getElementById('description').value.trim();
        const date = document.getElementById('date').value;
        const priority = document.getElementById('priority').value;

        const dueDate = new Date(date);
        if (isNaN(dueDate)) {
            return;
        }

        const task = document.createElement('div');
        task.className = `todo_item ${priority}`;
        
        task.innerHTML = `
            <div class="title_Date">
                <p class="title">${name}</p>
                <p class="dueDate">${new Date(date).toLocaleDateString()}</p>
            </div>
            <p class="description">${description}</p>
            <button class="delete"></button>
        `;

        task.querySelector('.delete').addEventListener('click', () => {
            todoContainer.removeChild(task);
        });

        todoContainer.appendChild(task);

        form.reset();
        dialog.close();
    });

    document.querySelectorAll('.task').forEach(item => {
        item.addEventListener('click', (e) => {
            document.querySelectorAll('.task').forEach(task => task.classList.remove('selected'));
            e.target.classList.add('selected');
            const selectedCategory = e.target.innerText.trim();
        });
    });
});
