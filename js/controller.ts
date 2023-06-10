import * as model from './model';
import 'core-js';
import 'regenerator-runtime';
import formTaskView from './views/formTaskView';
import tasksView from './views/tasksView';

const controlTasks = (event: Event) => {
  event.preventDefault();

  if (!event.target) return;

  const data = formTaskView.getData();

  if (!data) return;

  if (data.title === '') return alert('Поле не заполнено!');

  const { items } = model.addTask(data);
  console.log(items);

  tasksView.render(items);

  formTaskView.reset();
};

const controlDeleteTask = (listItem: HTMLLIElement) => {
  const itemToDeleteId = listItem.dataset.id;
  if (!itemToDeleteId) return;

  const { items } = model.deleteTask(itemToDeleteId);

  tasksView.render(items);
};

function init() {
  formTaskView.addSubmitHandler(controlTasks);
  tasksView.deleteItemHandler(controlDeleteTask);
}

init();
