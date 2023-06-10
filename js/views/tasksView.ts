import { Item, Subscriber } from '../types';

class TasksView {
  #parentElement = document.querySelector<HTMLUListElement>('.tasks');
  #data!: Item[];

  deleteItemHandler = (subscriber: Subscriber<null, HTMLLIElement>) => {
    if (!this.#parentElement) return;

    this.#parentElement.addEventListener('click', event => {
      if (
        !(event.target as HTMLUListElement).closest('button') ||
        !this.#parentElement
      )
        return;

      const button = event.target as HTMLButtonElement;

      if (!button.parentElement) return;

      const listItem = button.parentElement as HTMLLIElement;

      subscriber.call(null, listItem);
    });
  };

  render = (data: Item[]) => {
    try {
      if (!this.#parentElement) throw new Error("parentElement doesn't exist");
      this.#data = data;
      const markup = this.#generateMarkup();
      this.#clear();
      this.#parentElement.insertAdjacentHTML('beforeend', markup);
    } catch (error: any) {
      alert(error.message);
    }
  };

  #generateMarkup = () => {
    return this.#data
      .map(
        ({ id, title }) => `
        <li data-id="${id}">
          <span>${title}</span><button type="button">&times;</button>
        </li>
    `
      )
      .join('');
  };

  #clear = () => {
    if (this.#parentElement) this.#parentElement.innerHTML = '';
  };
}

export default new TasksView();
