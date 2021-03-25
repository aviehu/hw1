import { State, bind } from "./state";

export type Stack = number[];

export const push : (x : number) => State<Stack, undefined> = (x: number) =>
    (s : Stack) => [s.concat(x), undefined]

export const pop : State<Stack, number> = (s : Stack) =>
    [s.slice(0, s.length - 1), s[s.length - 1]]

export const stackManip: State<Stack, undefined> =
    bind(pop, (x: number) => bind(push(x * x), (z: undefined) => bind(pop, (y: number) => push(x + y))))
    
