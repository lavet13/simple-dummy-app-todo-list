export type Item = {
  id: string;
  title: string;
  done: boolean;
};

export type TaskData = {
  title: string;
};

export type State = {
  readonly items: Item[];
};

export type Subscriber<T, S> = { (this: T, ev: S): any };
