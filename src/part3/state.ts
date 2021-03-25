import { pipe } from "ramda";

export type State<S, A> = (initialState: S) => [S, A];

/*
export const bind: <S, A, B>((s: State<S, A>, f: (x: A) => State<S, B>) => State<S, B>) = undefined;
*/

export const bind: <S, A, B>(st: State<S, A>, f: (x: A) => State<S, B>) => State<S, B> = <S, A, B>(st: State<S, A>, f: (x: A) => State<S, B>) => 
    pipe(
        ((tmpS : S) => st(tmpS)),
        ((tmpSt : S, v: A) => f(v)(tmpSt))
    );




