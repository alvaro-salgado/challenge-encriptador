
const texto = document.querySelector('.texto-a-encriptar');

const encriptarBtn = document.querySelector('#button-encriptar');
const desencriptarBtn = document.querySelector('#button-desencriptar');

encriptarBtn.onclick = () => {
    console.log(encriptar(texto.value))
}

desencriptarBtn.onclick = () => {
    console.log(desencriptar(texto.value))
}

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function encriptar (text){
    text = text.toLowerCase();
    let textUpperCase = text;
    let textoEncriptado = '';
    const eLetter = 'enter';
    const iLetter = 'imes';
    const aLetter = 'ai';
    const oLetter = 'ober';
    const uLetter = 'ufat';

    //Replace vowels to UperCase letters.
    textUpperCase = text.replaceAll('a','A');
    textUpperCase = textUpperCase.replaceAll('e','E');
    textUpperCase = textUpperCase.replaceAll('i','I');
    textUpperCase = textUpperCase.replaceAll('o','O');
    textUpperCase = textUpperCase.replaceAll('u','U');

    textoEncriptado = textUpperCase;
    textoEncriptado = textUpperCase.replaceAll('A',aLetter);
    textoEncriptado = textoEncriptado.replaceAll('E',eLetter);
    textoEncriptado = textoEncriptado.replaceAll('I',iLetter);
    textoEncriptado = textoEncriptado.replaceAll('O',oLetter);
    textoEncriptado = textoEncriptado.replaceAll('U',uLetter);

    return textoEncriptado;
}

function desencriptar (text){
    text = text.toLowerCase();
    let textoDesencriptado = text;
    const eLetter = 'enter';
    const iLetter = 'imes';
    const aLetter = 'ai';
    const oLetter = 'ober';
    const uLetter = 'ufat';


    // textoEncriptado = textUpperCase;
    textoDesencriptado = textoDesencriptado.replaceAll(aLetter,'a');
    textoDesencriptado = textoDesencriptado.replaceAll(eLetter,'e');
    textoDesencriptado = textoDesencriptado.replaceAll(iLetter,'i');
    textoDesencriptado = textoDesencriptado.replaceAll(oLetter,'o');
    textoDesencriptado = textoDesencriptado.replaceAll(uLetter,'u');

    return textoDesencriptado;
}

