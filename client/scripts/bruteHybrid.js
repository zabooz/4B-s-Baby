import { all } from "axios";

export async function bruteForceHybrid(pwd){

    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?'.split('');



    const startTime = Date.now()
    const normPwd = pwd.toLowerCase();

    let pwdFound = false;
    let time = 'N/A'
    
    let passwords;

    try{
        const response = await fetch('../data/rockYou.json')
        passwords = await response.json()


    }catch(err){
        console.log(err, 'i fucked up')
    }



    if(passwords){

        passwords.lines.forEach(pw => {
        
        const normPw = pw.toLowerCase()


        if(pw === pwd){
            pwdFound = true;
            time = ((Date.now() - startTime)/1000) + ' sec';
        }else if(normPw.includes(normPwd)){
            
            const startIndex = normPw.split('').indexOf(normPwd[0])
            const endIndex = normPw.split('').lastIndexOf(normPwd[normPwd.length-1])



        }
    
        
    })









    }


}


function fixes (index){

    let fix;

    for (let i = 0; i < allCharacters.length;i++){

        
        fix.length < index ? fix += allCharacters[i]

        const fix = allCharacters[i]


    }



}