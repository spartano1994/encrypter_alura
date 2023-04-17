function isVowel( letter ){
    vowels = [ "a" , "e" , "i" , "o" , "u" ];
    for ( let j = 0 ; j < 5 ; j++ ){
        if ( letter === vowels[ j ] ){
            return [ true , j ] ;
        }
    } 
    return [ false , NaN ]
}

function encrypt( text ){
    let newText = "";
    let dictionary = [ "ai", "enter", "imes" , "ober"  , "ufat" ] ;

    for ( letter of text ){
        let isVowelBool = isVowel( letter )[0];
        let index = isVowel( letter )[1];

        if( isVowelBool ){
            newText = newText + dictionary[ index ];
        } else {
            newText = newText + letter
        }
    }
    return newText;
}

function replaceAll( texto , old_word , new_word ){
    while (texto.indexOf( old_word ) != -1){
    texto = texto.replace( old_word , new_word );
    }
    return texto
}

function decrypt( text ){
    var dictionary = ["ai", "enter","imes","ober","ufat" ];
    var vowels = ["a","e","i","o","u"];

    for ( var i =0 ; i<5 ; i++ ){
        text = replaceAll(text , String(dictionary[i]),String(vowels[i]))
    }
    return text;

}

//let text = prompt( "Escriba el texto que desea encriptar" );

//document.write( encrypt( text ) );

//console.log( replaceAll( "este es el este del este" , "este" , "alo" ) )
 
//texto = "hola a todos mis amigos"
//console.log( encrypt( texto ) )

console.log( decrypt( "hoberlai ai toberdobers mimess aimimesgobers" ) )
