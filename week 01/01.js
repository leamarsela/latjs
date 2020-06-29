var input = 'hello world!';


var i;
var text;
for (i = input.length - 1; i >= 0; i--){
    text += input[i];
}

console.log(text);