const lenght = 5
const options ="dog"
export function generatePassword(options, lenght){
let password =""
const symbols =`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:'",.<>?/~`.split('')
for(let i=0;i<lenght;i++){
    const random = Math.floor(Math.random()*symbols.length)
    password += symbols[random]
}
 console.log(password);

 crypto.getRandomValues()
    
   

    

}