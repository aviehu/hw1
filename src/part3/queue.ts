import { State, bind } from "./state";

export type Queue = number[];

export const enqueue : (x: number) => State<Queue, number> = (x) =>
    (q: Queue) => [q.concat(x), x];

export const dequeue : State<Queue, number> = (q) =>
    [q.slice(1), q[0]];

export const queueManip : State<Queue, number> =
    bind(dequeue, enqueue);

    /*
    bind<Queue, number, number>(dequeue, (x: number) => bind<Queue, number, number>(
        enqueue(2 * x), (y: number) => bind<Queue, number, number>(
            enqueue(x/3), (z: number) => dequeue)))(q)
            */
        
