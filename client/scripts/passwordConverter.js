

export function passwordConverter(password) {
    // Converts a given password to leetspeak.
    // Conversion substitutes are chosen by me since there are too many possibilities.

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

    };

    let newpassword = password.replace(/[ABCDEHIKLMNORSTUVWX]/g, match => leettable[match]);
    return newpassword;
}

