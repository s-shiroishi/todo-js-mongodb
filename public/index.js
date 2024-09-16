const formDom = document.querySelector('.input-form');
const inputDom = document.querySelector('.input');
const taskDom = document.querySelector('.tasks');

const taskView = async () => {
    try {
        const response = await fetch('http://localhost:3000/tasks');
        const tasks = await response.json();
        const taskHtml = tasks.map((task) => {
            return `<div class="task">
            <h2><span class="${task.completed ? 'completed' : 'no-completed'}"></span>${task.name}</h2>
            <div>
                <button class="btn edit-btn"><a href="edit.html?id=${task._id}">編集</a></button>
                <button class="btn delete-btn" data-id=${task._id}>削除</button>
            </div>
        </div>
            ` 
        }).join('');
        taskDom.innerHTML = taskHtml;
    } catch(err) {
        console.error(err.message);
    }
};

formDom.addEventListener('submit', async (event) => {
    try {
        event.preventDefault()
        const task = {
            'name': inputDom.value
        }
        await fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(task)
        });
        inputDom.value = ''
        taskView();
      } catch (error) {
        console.error('エラー:', error);
      }
});

taskDom.addEventListener('click', async (event) => {
    try{
        if(event.target.classList.contains('delete-btn')){
            const id = event.target.dataset.id;
            await fetch(`http://localhost:3000/tasks/${id}`, {
                method: 'DELETE'
            });
            taskView();
        }
    }catch(err){
        console.error(err.message);
    }
});

taskView();
