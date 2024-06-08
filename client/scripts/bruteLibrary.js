export async function bruteForceLibrary(pwd) {
    const closeEnough = [];
    const normPwd = pwd.toLowerCase();

    let pwdFound = false;
    let startTime = Date.now();
    let time = 'N/A'

    try {
        const response = await fetch('../data/rockYou.json'); 
        const passwords = await response.json();
        
        passwords.lines.forEach(pw => {

            if(pw === pwd){
                pwdFound = true;
                time = ((Date.now() - startTime)/1000) + ' sec';
            }else if(pw.toLowerCase().includes(normPwd)){
                closeEnough.push(pw)
            }
        })

    } catch (err) {
        console.log(err);
        time = 'N/A';
    }

    return [pwdFound, pwd, time, closeEnough];
}
