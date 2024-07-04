 export async function bruteForceLibrary(pwd,passwordList) {
    const mode = 'Library'
    let startTime = Date.now();
    let time = 'N/A'
    let count = 'N/A'
 
        passwordList.forEach((pw,i)=> {
            if(pw === pwd){
                count = i
                time = ((Date.now() - startTime)/1000) + ' sec';
            }
        })
        return [pwd,count,mode,time];
      
}

