function countCharacter(text, character) {
    var prepCharacter = 0;
    var i = 0;

    while (i < text.length) {
        if(text.charAt(i) === character){
            prepCharacter++;
        }
        i++;
    }

    console.log(prepCharacter)
    return prepCharacter

}

countCharacter("pikapikapi", "a")