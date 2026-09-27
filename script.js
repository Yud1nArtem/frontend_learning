/* const price = 1200;
const isAvailable = true;
const userBalance = 1500;

if (userBalance >= price && isAvailable) {
    console.log('Покупка доступна')
} else if (userBalance < price && isAvailable) {
    console.log('Недостаточно денег')
} else {
    console.log('Товара нет в наличии')
}; */

/* for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        continue
    } else if (i === 9) {
        break
    }

    console.log(i)
}; */

/* let num = 3;

while (num <= 10) {
    if (num === 7) {
        break
    }
    console.log(num);
    num++;
} */

/* function culc(first, second) {

    let total = first + second

    return total
}

console.log(culc(5, 10)) */

/* const checkPurchase = (price, userBalance, isAvailable) => {
    if (userBalance >= price && isAvailable) {
        return 'Покупка доступна';
    } else if (userBalance < price && isAvailable) {
        return 'Недостаточно денег';
    } else {
        return 'Товара нет в наличии';
    }
}

const result = checkPurchase(1200, 1500, true)

console.log(result); */

/* const price = [1200, 500, 2500, 300]

price.push(800)

console.log(price.length)

for (const i of price) {
    if (i > 1000) {
        console.log(i)
    }
}; */

/* const tasks = [
    {
        id: 1,
        title: 'Learn JavaScript',
        isDone: false
    },
    {
        id: 2,
        title: 'Go to gym',
        isDone: true
    },
    {
        id: 3,
        title: 'Buy food',
        isDone: false
    }
];

for (const task of tasks) {
    if (!task.isDone) {
        console.log(task.title)
    }
}; */

/* function printTask({ title, isDone }) {
    return `${title}, ${isDone}`;
}

const tasks = {
    id: 1,
    title: 'Learn JavaScript',
    isDone: false
}

console.log(printTask(tasks)); */

/* const tasks = [
    { id: 1, title: 'Learn JS', isDone: false },
    { id: 2, title: 'Gym', isDone: true },
    { id: 3, title: 'Buy food', isDone: false }
];

const activeTasks = tasks.filter((task) => {
    return task.isDone === false;
});

const findTask = tasks.find((task) => {
    return task.id === 2;
})

const mapTask = tasks.map(({ title }) => {
    return title;
})

console.log(activeTasks)
console.log(findTask)
console.log(mapTask) */

/* const tasks = document.querySelectorAll('.task')

for (const task of tasks) {
    const taskStatus = task.querySelector('.task__status-text');
    const completeButton = task.querySelector('.task__button--positive');
    const deleteButton = task.querySelector('.task__button--negative')

    completeButton.addEventListener('click', () => {
        taskStatus.textContent = 'Completed';

        taskStatus.classList.remove('task__status-text--negative');
        taskStatus.classList.add('task__status-text--positive');

        completeButton.textContent = 'Cancel'
    });

    deleteButton.addEventListener('click', () => {
        task.remove();
    });
}

const taskForm = document.querySelector('.task-form');
const titleInput = document.querySelector('.task-form__input');
const textInput = document.querySelector('.task-form__text');

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newTask = {
        title: titleInput.value,
        text: textInput.value,
        isDone: false
    };

    const tasksContainer = document.querySelector('.tasks');

    const task = document.createElement('article');
    task.classList.add('task');

    const taskTitle = document.createElement('h2');
    taskTitle.classList.add('task__title');
    taskTitle.textContent = newTask.title;

    const taskText = document.createElement('p');
    taskText.classList.add('task__text');
    taskText.textContent = newTask.text;

    task.append(taskTitle, taskText);

    tasksContainer.append(task);
}); */

/* const user = {
    name: 'Artem',
    age: 24,
    city: {
        name: 'Moscow',
        str: 'Kitay-gorod',
        house: 13
    },
    job: 'Designer'
}

const user2 = {
    name: 'Ivan',
    age: 24,
    job: 'Designer'
}

console.log(user2.city?.house); */

/* import { sayHello } from "./utils.js";

sayHello('ARTEMIY'); */

function createTaskCard(task) {
    const taskCard = document.createElement('article');
    taskCard.classList.add('task');

    const taskCardTitle = document.createElement('h2');
    taskCardTitle.textContent = task.title;
    taskCardTitle.classList.add('task__title');

    const taskCardText = document.createElement('p');
    taskCardText.textContent = task.description;
    taskCardText.classList.add('task__text');

    taskCard.append(taskCardText, taskCardTitle);

    const taskStatus = document.createElement('div');
    taskStatus.classList.add('task__status');

    const taskStatusImage = document.createElement('div');
    taskStatusImage.classList.add('task__status-image');

    const taskStatusText = document.createElement('p');
    taskStatusText.classList.add('task__status-text');

    if (task.is_done) {
        taskStatusText.textContent = 'Completed';
        taskStatusText.classList.add('task__status-text--positive');
    } else {
        taskStatusText.textContent = 'Not completed';
        taskStatusText.classList.add('task__status-text--negative');
    }

    const taskButtons = document.createElement('div');
    taskButtons.classList.add('task__buttons');

    const taskButtonPositive = document.createElement('button');
    taskButtonPositive.classList.add(
        'task__button', 
        'task__button--positive'
    );

    const taskButtonNegative = document.createElement('button');
    taskButtonNegative.textContent = 'Delete'
    taskButtonNegative.classList.add(
        'task__button', 
        'task__button--negative'
    );

    if (task.is_done) {
        taskButtonPositive.textContent = 'Cancel';
        taskButtonPositive.classList.remove('task__button--positive');
    } else {
        taskButtonPositive.textContent = 'Complete';
    }

    taskButtonPositive.addEventListener('click', async () => {

        task.is_done = !task.is_done;

        await fetch(`http://localhost:8000/tasks/${task.id}`, {
            method: 'PATCH',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                is_done: task.is_done
            })
        });

        if (task.is_done) {
            taskStatusText.textContent = 'Completed';

            taskStatusText.classList.remove('task__status-text--negative');
            taskStatusText.classList.add('task__status-text--positive');

            taskButtonPositive.textContent = 'Cancel';
            taskButtonPositive.classList.remove('task__button--positive');
        } else {
            taskStatusText.textContent = 'Not completed';

            taskStatusText.classList.remove('task__status-text--positive');
            taskStatusText.classList.add('task__status-text--negative');

            taskButtonPositive.textContent = 'Complete';
            taskButtonPositive.classList.add('task__button--positive');
        }

        await getTasks();
    });

    taskButtonNegative.addEventListener('click', async () => {
        await fetch(`http://localhost:8000/tasks/${task.id}`, {
            method: 'DELETE'
        });

        taskCard.remove();

        await getTasks();
    });

    taskStatus.append(taskStatusImage, taskStatusText);
    taskButtons.append(taskButtonPositive, taskButtonNegative);

    taskCard.append(taskStatus, taskButtons);

    return taskCard;
};

async function getTasks() {
    try {
        const response = await fetch('http://localhost:8000/tasks');
        const tasks = await response.json();

        const tasksContainer = document.querySelector('.tasks');
        tasksContainer.innerHTML = '';

        const counter = document.querySelector('.header__text--all');
        counter.textContent = `${tasks.length} tasks`;

        const counterCompleted = document.querySelector('.header__text--success');
        let i = 0;

        for (const task of tasks) {

            if (task.is_done) {
                i++;
            }
        }

        counterCompleted.textContent = `${i} completed`;

        for (const task of tasks) {

            const taskCard = createTaskCard(task);

            tasksContainer.append(taskCard);
        }
    }
    catch (error) {
        alert('Не удалось загрузить задачи');
    }
};

const taskForm = document.querySelector('.task-form');
const taskFormInput = document.querySelector('.task-form__input');
const taskFormText = document.querySelector('.task-form__text');
const taskFormButton = document.querySelector('.task-form__button');

taskForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = taskFormInput.value;
    const text = taskFormText.value;

    const newTaskData = {
        title: title,
        description: text,
        is_done: false,
        user_id: 1
    };

    await fetch('http://localhost:8000/tasks', {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(newTaskData)
    });

    taskFormInput.value = '';
    taskFormText.value = '';

    await getTasks();
});

getTasks();

