export type Item = {
  id: string;
  title: string;
};

export type TaskData = {
  title: string;
};

export type State = {
  items: Item[];
};

export type Subscriber<T, S> = { (this: T, ev: S): any };
