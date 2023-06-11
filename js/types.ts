export type Item = {
  title: string;
  done: boolean;
};

export type TaskData = {
  title: string;
};

export type State = {
  readonly items: Map<string, Item>;
};

export type Subscriber<T, S> = { (this: T, ev: S): any };
