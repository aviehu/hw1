import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countVowels = undefined;

/* Question 2 */
export const runLengthEncoding : (str : string) => string = str => {
    return stringToArray(stringToArray(str).reduce((a, b) => {
        if(a.length == 0) {
            return a + b + 1;
        }
        if(a[a.length - 2] != b) {
            return a + b + 1;
        }
        return a.slice(0, -1) + (parseInt(a.slice(-1)) + 1);    
    },'')).reduce((a,b) => {
        if (b == '1') {
            return a;
        }
        else return a + b;
    },'');
}

console.log(runLengthEncoding('qpqqppqqqpppqqqqqpppppppp'));

/* Question 3 */
export const isPaired = undefined;