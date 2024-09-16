const taskIdDom = document.querySelector('.task-id');
const taskNameDom = document.querySelector('.task-name');
const taskCompletedDom = document.querySelector('.task-completed');
const editFormDom = document.querySelector('.edit-form');
const alertDom = document.querySelector('.alert');
const backBtnDom = document.querySelector('.back-btn');

const urlParams = new URLSearchParams(window.location.search);
const taskId = urlParams.get('id');

const taskView = async () => {
    taskIdDom.innerHTML = taskId;
    
    try {
        const response = await fetch(`http://localhost:3000/tasks/${taskId}`);
        const task = await response.json();
        taskNameDom.value = task.name;
        taskCompletedDom.checked = true ? task.completed : false;
    } catch(err) {
        console.error(err.message);
    }
};

editFormDom.addEventListener('submit', async (event) => {
    try {
        event.preventDefault();
        const task = {
            'name': taskNameDom.value,
            'completed': taskCompletedDom.checked
        };
        await fetch(`http://localhost:3000/tasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(task)
        });
        window.location.href = 'index.html';
      } catch (error) {
        console.error('エラー:', error);
      };
      alertDom.innerHTML = 'タスクを編集しました';
});

backBtnDom.addEventListener('click', () => {
    window.location.href = 'index.html';
});

taskView();