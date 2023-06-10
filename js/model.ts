import { v4 as uuidv4 } from 'uuid';
import { Item, State, TaskData } from './types';

export const state: State = {
  items: [],
};

export const addTask = (task: TaskData) => {
  state.items = [...state.items, { id: uuidv4(), ...task }];
};

export const deleteTask = (itemToDeleteId: string) => {
  state.items = state.items.filter(({ id }) => id !== itemToDeleteId);
};
