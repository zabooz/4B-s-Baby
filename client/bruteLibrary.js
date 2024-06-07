const fs = require('fs')


fs.readFile('rockYou.json','utf-8',(err,data)=> {
    if(err){
        console.log(err)
        return
    }


    let passwords = JSON.parse(data)

    console.log(passwords)


})




export function bruteForceLibrary(){

    
}