import { State, bind } from "./state";

export type Stack = number[];

export const push : (x : number) => State<Stack, number> = (x: number) =>
    (s : Stack) => [s.concat(x), x]

export const pop : State<Stack, number> = (s : Stack) =>
    [s.slice(0,s.length - 1), s[s.length - 1]]

export const stackManip: State<Stack, number> =
    bind(pop, (x: number) => bind(push(x * x), (z: number) => bind(pop, (y: number) => push(x + y))))
    
