import { State, bind } from "./state";

export type Stack = number[];

export const push : (x : number) => State<Stack, number> = (x: number) => {
    return (s : Stack) => [s.concat(x), x];
};

export const pop : (s : Stack) => [Stack, number] = (s : Stack) => {
    return [s.slice(0,s.length - 1), s[s.length - 1]];
};

export const stackManip = undefined;
