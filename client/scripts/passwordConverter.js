

export function passwordConverter(password) {
    // Converts a given password to leetspeak.
    // Conversion substitutes are chosen by me since there are too many possibilities.

    // Converting to upper case to catch lower case letters.
    let uppercasepw = password.toUpperCase();

    let leettable = {
        //Selection based on most commonly used leetspeak and readability for a layman.
        "A": "4",
        "B": "|3",
        "C": "(",
        "D": "|)",
        "E": "3",
        "H": "|-|",
        "I": "1",
        "K": "|<",
        "L": "|_",
        "M": "/V\\",
        "N": "/\\/",
        "O": "0",
        "R": "I2",
        "S": "5",
        "T": "7",
        "U": "|_|",
        "V": "\\/",
        "W": "\\/\\/",
        "X": ")(",
        "1": "i",
        "3": "e",
        "4": "a",
        "5": "s",
        "7": "t",
        "!": "?",
        "0": "o",
        "(": "c"

    };
    
    let newpassword = uppercasepw.replace(/[ABCDEHIKLMNORSTUVWX13457!0(]/g, match => leettable[match]);
    return newpassword;
}

