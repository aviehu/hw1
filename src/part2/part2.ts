import * as R from "ramda";
import { pipe } from "ramda";
const stringToArray = R.split("");

const isVowel: ((ch : string) => boolean) = (ch) =>
    ch === 'a' || ch === 'A' || ch === 'e' || ch === 'E' ||
    ch === 'i' || ch === 'I' || ch === 'o' || ch === 'O' ||
    ch === 'u' || ch === 'U'


const countVowelsRec : ((str : string, c : number) => number) = (str, c) =>
    //Finish recursion if string is empty
    str == '' ? c :
    //Check if vowel
    isVowel(str[0]) ? countVowelsRec(str.substring(1), c) : countVowelsRec(str.substring(1), c + 1);




/* Question 1 */
export const countVowels : ((str : string) => number) = (str) =>
    countVowelsRec(str, 0);

/* Question 2 */
export const runLengthEncoding : ((str : string) => string) = str => {
    const f = pipe(
        ((x : string) => stringToArray(x)),
        ((x : string[]) => x.reduce((a : String, b: string) => {
            if(a.length === 0 || a[a.length - 2] !== b) {
                return a + b + 1;
            }
            return a.slice(0, -1) + (parseInt(a.slice(-1)) + 1); 
        },'')
        ),
        ((x : string) => stringToArray(x)),
        ((x : string[]) => x.reduce((a: string, b : string) => {
            if (b === '1') {
                return a;
            }
            else return a + b; 
        }, '' ))
    )
    return f(str);
}

console.log(runLengthEncoding('aaaabbbccd'));

/* Question 3 */
export const isPaired: (str: string) => boolean = (str) => {
    const open = ['(', '{', '['];
    const close = [ ')', '}', ']']
    return stringToArray(str).reduce((a,b) => {
        console.log(a);
        if (open.includes(b)) {
            return a + b;
        }
        if (close.includes(b)) {
            if ((b === ')' && a[a.length-1] !== '(') || (b === '}' && a[a.length-1] !== '{') || (b === '[' && a[a.length-1] !== ']')) {
                return a + 'Err'
            }
            else return a.slice(0, -1)
        }
        return a;
    },'').length == 0;
}
