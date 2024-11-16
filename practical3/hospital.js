function upperCase(){
    let msg = "hello there new world"
    const msgArr = msg.split(' ');   //this makes the sentence an array already

    let newSentence = '';
    for(let i = 0; i < msgArr.length ; i++) {
        newSentence += msgArr[i].charAt(0).toUpperCase() + msgArr[i].slice(1) + ' ';
    }
    return newSentence;
}

function makeUpperCase(callback){
     return callback();
}

console.log(makeUpperCase(upperCase));