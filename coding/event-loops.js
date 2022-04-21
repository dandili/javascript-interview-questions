/*
* Similar question asked today
* What would the output be of this function?
*
* Answer:
* Index4Indexundefined
* Index4Indexundefined
* Index4Indexundefined
* Index4Indexundefined
*
* Why? - Because of JS event loops and callbacks.
*/

const arr = [12,22,13,41]

function main(arr) {
    for (var i = 0; i < arr.length; i++) {
        setTimeout(() => {
            console.log(`Index${i}Index${arr[i]}`)
        }, 300);
    }
}

main(arr);