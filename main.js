const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const tasksList = document.getElementById('tasks');

addTaskButton.addEventListener('click', () => {
  const newTaskText = newTaskInput.value;
  if (newTaskText === '') {
    return;
  }

  const newTask = document.createElement('li');
  newTask.classList.add('task');

  const newTaskCheckbox = document.createElement('input');
  newTaskCheckbox.type = 'checkbox';
  newTaskCheckbox.addEventListener('change', () => {
    newTask.classList.toggle('selected');
  });

  const newTaskLabel = document.createElement('label');
  newTaskLabel.innerText = newTaskText;

  newTask.appendChild(newTaskCheckbox);
  newTask.appendChild(newTaskLabel);

  tasksList.appendChild(newTask);

  newTaskInput.value = '';
});