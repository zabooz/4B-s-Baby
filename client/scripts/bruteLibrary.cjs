async function bruteForceLibrary(pwd,passwordList) {
    const closeEnough = [];
    const normPwd = pwd.toLowerCase();

    let pwdFound = false;
    let startTime = Date.now();
    let time = 'N/A'

        passwordList.forEach(pw => {
            if(pw === pwd){
                pwdFound = true;
                time = ((Date.now() - startTime)/1000) + ' sec';
            }else if(pw.toLowerCase().includes(normPwd)){
                closeEnough.push(pw)
            }
        })
        
    return [pwdFound, pwd, time, closeEnough];
}

module.exports = bruteForceLibrary