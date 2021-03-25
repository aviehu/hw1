import { State, bind } from "./state";

export type Queue = number[];

export const enqueue : ((x: number) => State<Queue, number>) = (number) =>
    (q: Queue) => [q.concat(number), number]

export const dequeue : ((q: Queue) => [Queue, number]) = (q) =>
    [q.slice().pop(), q[q.length - 1]]

export const queueManip = undefined;
