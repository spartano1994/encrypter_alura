let entrada = document.querySelector( "#input_encriptar" );
let boton_entrada = document.querySelector( "#boton_encriptar" )
let salida = document.querySelector( "#input_desencriptar" );
let boton_salida = document.querySelector( "#boton_desencriptar" )

function isVowel( letter ){
    vowels = [ "a" , "e" , "i" , "o" , "u" ];
    for ( let j = 0 ; j < 5 ; j++ ){
        if ( letter === vowels[ j ] ){
            return [ true , j ] ;
        }
    } 
    return [ false , NaN ]
}

function encrypt(){
    let text = String( entrada.value );
    let newText = "";
    let dictionary = [ "ai", "enter", "imes" , "ober"  , "ufat" ] ;

    for ( letter of text ){
        let isVowelBool = isVowel( letter )[0];
        let index = isVowel( letter )[1];

        if( isVowelBool ){
            newText = newText + dictionary[ index ];
        } else {
            newText = newText + letter;
        }
    }
    entrada.value = "";
    salida.value = newText;
}

function replaceAll( texto , old_word , new_word ){
    while (texto.indexOf( old_word ) != -1){
    texto = texto.replace( old_word , new_word );
    }
    return texto;
}

function decrypt(){
    let text = String( entrada.value );
    let dictionary = ["ai", "enter","imes","ober","ufat" ];
    let vowels = ["a","e","i","o","u"];

    for ( var i =0 ; i<5 ; i++ ){
        text = replaceAll(text , String(dictionary[i]),String(vowels[i]));
    }
    entrada.value = "";
    salida.value = text;
}

boton_entrada.onclick = encrypt;
boton_salida.onclick = decrypt;