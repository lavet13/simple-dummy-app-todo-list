import { Subscriber, TaskData } from '../types';

class FormTaskView {
  #parentElement = document.querySelector<HTMLFormElement>('#form-task');

  addSubmitHandler = (subscriber: Subscriber<Element, Event>) => {
    if (!this.#parentElement) return;

    this.#parentElement.addEventListener('submit', subscriber);
  };

  getData = () => {
    if (!this.#parentElement) return;

    const formData = new FormData(this.#parentElement);
    return Object.fromEntries(formData.entries()) as TaskData;
  };

  reset = () => this.#parentElement && this.#parentElement.reset();
}

export default new FormTaskView();
