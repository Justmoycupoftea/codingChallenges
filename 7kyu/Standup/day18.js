// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// ["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"],['codewars','picaniny','hubububo'];
// ["abracadabra","allottee","assessee"],['abracadabra','alote','asese'];
// ["kelless","keenness"], ['keles','kenes'];
// ["Woolloomooloo","flooddoorroommoonlighters","chuchchi"], ['Wolomolo','flodoromonlighters','chuchchi'];

//use map to modify and make new array, use filter
//will there be spaces, special chars, things that aren't words,

function dup(s) {
    //map grab each word and do something to it then make it the first word in new array
    //map -> word - split - filter - join
    return s.map(word => word.split('').filter((l,i,a) => l != a[i-1] ).join(''))
};

function same(s){
    return s.map(word => word.split('').filter((l,i,a) => l != a[i-1]).join(''))
    //copy array, filter out ea letter that is not the same as ea other and join letters for new word
    //similar letters will be filtered out
}

function sames(s){
    return s.map(word =>  word.split('').filter((w,i,a)=> w != a[i - 1].join('')))
}