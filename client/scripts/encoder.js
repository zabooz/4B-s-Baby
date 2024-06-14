const characters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
    '!', '?', ';', ':', '@', '#', '$', '%', '^', '&', '*', '(', ')', 
    '-', '_', '=', '+', '[', ']', '{', '}', '|', '\\', '/', '<', '>', 
    ',', '.', '`', '~'
];
function generateEncodingKey () {
    return Math.floor(Math.random() * characters.length);
}
export function passwordEncoder (input) {
    // Encodes the user's password.
    // const passwordInput = document.getElementById('passwordInput');
    let encodedString = "";
    const encodingKey = generateEncodingKey();

    for (let char of input) {
        const charIndex = characters.indexOf(char);

        if (charIndex === -1) {
            // If character is not found in the array, leave it unchanged
            encodedString += char;
        } else {
            const newIndex = (charIndex + encodingKey) % characters.length;
            encodedString += characters[newIndex];
        }
    }
    console.log(encodedString, encodingKey)
    return { encodedString, encodingKey };
}

export function passwordDecoder(encodedString, encodingKey) {
    // Decodes the encoded password.
    let decodedString = '';

    for (let char of encodedString) {
        const charIndex = characters.indexOf(char);

        if(charIndex === -1) {
            // If char not found in the array, leave it unchanged.
            decodedString += char;
        }else {
            let newIndex = charIndex - encodingKey;
            if (newIndex < 0) {
                newIndex = characters.length + newIndex;
            }
            decodedString += characters[newIndex];
        }
    }
    return decodedString;
}
