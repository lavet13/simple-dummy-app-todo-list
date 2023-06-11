import { nanoid } from 'nanoid';
import { State, TaskData } from './types';
import { enableMapSet, produce } from 'immer';

enableMapSet();

export let state: State = {
  items: new Map([]),
};

export const addTask = (task: TaskData) => {
  state = produce(state, draftState => {
    draftState.items.set(nanoid(), { ...task, done: false });
  });
};

export const markTask = (itemToMarkId: string) => {
  state = produce(state, draftState => {
    const todo = draftState.items.get(itemToMarkId);

    if (todo) {
      todo.done = !todo.done;
    }
  });
};

export const deleteTask = (itemToDeleteId: string) => {
  state = produce(state, draftState => {
    const { items } = draftState;

    if (items.has(itemToDeleteId)) items.delete(itemToDeleteId);
  });
};
