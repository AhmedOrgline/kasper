let patern = "abcdefghijklmnopqrstuvwxyz";

function wordsToMarks(string) {
    let sum_value_Of_charcter = 0;
    for(let i of string){
        sum_value_Of_charcter += patern.indexOf(i)+1;
    }
    return sum_value_Of_charcter;
}
console.log(wordsToMarks('family'))

