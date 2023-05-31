export interface CustomMatSelectOption<T> {
  label: string;
  value: T;
  children?: CustomMatSelectOption<T>[];
}
