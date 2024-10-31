export enum Color {
  red,
  green,
  blue,
  black
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
