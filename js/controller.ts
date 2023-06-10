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

  model.addTask(data);

  tasksView.render(model.state.items);

  formTaskView.reset();
};

const controlDeleteTask = (listItem: HTMLLIElement) => {
  const itemToDeleteId = listItem.dataset.id;
  if (!itemToDeleteId) return;

  model.deleteTask(itemToDeleteId);

  tasksView.render(model.state.items);
};

function init() {
  formTaskView.addSubmitHandler(controlTasks);
  tasksView.deleteItemHandler(controlDeleteTask);
}

init();
