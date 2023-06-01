let entrada = document.querySelector( "#encrypt-area" );
let boton_entrada = document.querySelector( "#encrypt-button" );
let salida = document.querySelector( "#decrypt-area" );
let boton_salida = document.querySelector( "#decrypt-button" );
let boton_copiar = document.querySelector( "#copy-button" );

var message_not_found = document.getElementById("message-not-found");
var decrypt_area = document.getElementById( "decrypt-area" );
var lower_button_box = document.getElementById( "lower-button-box" );
var doll_container = document.getElementById( "doll-container" );

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

    text = text.toLowerCase();

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

    if ( ( text != "") && !( with_accents( text ) ) ) {
        message_not_found.style.display = "none";
        decrypt_area.style.display = "block";
        lower_button_box.style.display = "block";
        doll_container.style.display = "none";
        salida.value = newText;
    }

    if (with_accents( text )) {
        alert("El texto no puede contener acentos.")
    } 

}

function replaceAll( texto , old_word , new_word ){
    while (texto.indexOf( old_word ) != -1){
    texto = texto.replace( old_word , new_word );
    }
    return texto;
}

function with_accents( text ){
    let vowels_accents = [ "á" , "é" , "í" , "ó" , "ú" , 
                            "ä", "ë" , "ï" , "ö" , "ü" ,
                            "à", "è" , "ì" , "ò" , "ù" ,
                            "â" , "ê" , "î" , "ô" , "û" ]
    
    for (letter of text){
        for (element of vowels_accents){
            if (letter === element){
                return true;
            }
        }
    }

    return false;

}


function decrypt(){
    let text = String( entrada.value );
    let dictionary = ["ai", "enter","imes","ober","ufat" ];
    let vowels = ["a","e","i","o","u"];

    for ( var i =0 ; i<5 ; i++ ){
        text = replaceAll(text , String(dictionary[i]),String(vowels[i]));
    }
    entrada.value = "";

    if ( ( text != "") && !( with_accents( text ) ) ) {
        message_not_found.style.display = "none";
        decrypt_area.style.display = "block";
        lower_button_box.style.display = "block";
        doll_container.style.display = "none";
        salida.value = text;
    }

    if (with_accents( text )) {
        alert("El texto no puede contener acentos.")
    } 
}

function copy() {
    salida.select();
    document.execCommand("copy");
    salida.value = "";
}

boton_entrada.onclick = encrypt;
boton_salida.onclick = decrypt;
boton_copiar.onclick = copy;