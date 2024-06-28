

export function pictureToString(){
    
    const input = document.getElementById('uploadFile')
    const file = input.files[0]
    const label = document.getElementById('uploadLabel')
    label.textContent ='Upload your picture'

    if(file){
        const reader = new FileReader()


        reader.onloadend = function(){
            
            const base64String = reader.result.replace('data','').replace(/^.+,/, '')
            
            const pwdLength = 12

            const key = base64String.charCodeAt(pwdLength)
            
            let password = ''

            let index = 0

            while(password.length < pwdLength){
                index = (index + key) % base64String.length
                const char = base64String[index]
                password += char

            }
            
            let betterPassword =''

            for(let i = 0; i<password.length;i++ ){

                if(i%2 === 0){
                  betterPassword+=  passwordConverter(password[i],"leetAdvanced")
                }else{
                    betterPassword+=  password[i]
                }



            }
            
            
            
            document.getElementById('picResult').textContent = 'Your password: ' + betterPassword
            return base64String
        }


        reader.readAsDataURL(file)
    }

}
function passwordConverter(password, selector) {
    // Converts a strings content based on dropdown menu choice ("selector")
        let newPassword;

        const leetTables = {
            leetSimple: {
                // Easily readable leetspeak here.
                "A": "4",
                "a": "4",
                "C": "(",
                "c": "(",
                "E": "3",
                "e": "3",
                "I": "1",
                "i": "1",
                "O": "0",
                "o": "0",
                "S": "5",
                "s": "5",
                "T": "7",
                "t": "7"
            },
            leetAdvanced: {
                // Easily readable leetspeak here.
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
            },
            leetComplicated: {
                // Define complicated leetspeak substitutions here.
                "A": "(L",
                "B": "|-]",
                "C": "<",
                "D": "?",
                "E": "|=-",
                "F": "v",
                "G": "(_+",
                "H": "#",
                "I": "!",
                "J": ",_|",
                "K": "(7<",
                "L": "£",
                "M": "^^",
                "N": "^/",
                "O": "<>",
                "Q": "&",
                "R": "[z",
                "S": "§",
                "T": "']",
                "U": "L|",
                "V": "|/",
                "W": "'//",
                "X": "><",
                "Y": "`/",
                "Z": "-\\_",
                "1": "i",
                "3": "e",
                "4": "a",
                "5": "s",
                "7": "t",
                "!": "?",
                "0": "o",
                "(": "c"
            }
        };

        // Converting to upper case to catch lower case letters for leetspeak.
        let upperCasePw = password.toUpperCase();

        // Get the correct leetTable based on the selected converter.
        const leetTable = leetTables[selector];

        // Create a regex pattern from the keys of leetTable
        const pattern = new RegExp(`[${Object.keys(leetTable).join('')}]`, 'g');

        // Use the pattern to replace characters based on the leetTable
        if (selector === 'leetSimple') {
            newPassword = password.replace(pattern, match => leetTable[match]);
        } else {
            newPassword = upperCasePw.replace(pattern, match => leetTable[match]);
        }
        return newPassword;
 };



