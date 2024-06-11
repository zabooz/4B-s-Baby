async function bruteForceLibrary(pwd,passwordList) {
    const closeEnough = [];
    const normPwd = pwd.toLowerCase();
    const mode = 'Library'
    let startTime = Date.now();
    let time = 'N/A'
    let count

        passwordList.forEach((pw,i)=> {
            if(pw === pwd){
                count = i
                console.log(Date.now(),startTime)
                time = ((Date.now() - startTime)/1000) + ' sec';
            }else if(pw.toLowerCase().includes(normPwd)){
                closeEnough.push(pw)
            }
        })

    return [ pwd, time, closeEnough,count,mode];
}

module.exports = bruteForceLibrary