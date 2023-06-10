import { nanoid } from 'nanoid';
import { State, TaskData } from './types';
import { produce } from 'immer';

export let state: State = {
  items: [],
};

export const addTask = (task: TaskData) => {
  state = produce(state, draftState => {
    draftState.items.push({ id: nanoid(), ...task });
  });

  return state;
};

export const deleteTask = (itemToDeleteId: string) => {
  state = produce(state, draftState => {
    const { items } = draftState;
    items.splice(
      items.findIndex(item => item.id === itemToDeleteId),
      1
    );
  });

  return state;
};
