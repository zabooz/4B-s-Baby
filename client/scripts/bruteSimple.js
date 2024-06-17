const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


 export async function bruteForceSimple(targetPassword, charset, maxLength,shouldContinue) {
  let count = 0;
  let found = false;
  const  mode = 'Simple'
  const startTime = Date.now()

  console.log('brute force started')

  
  async function generate(prefix, length) {

    if (found || !shouldContinue()) return;
   
    count++;

    if (length === 0) {

      if (prefix === targetPassword) {
        console.log(`Password found: ${prefix}`);
        found = true;
        }
        
      return;
    }


    for (let char of charset) {
      await generate(prefix + char, length - 1);
      if (found || !shouldContinue){
        console.log('bruteForce stopped')
        return;
      } 
    }


    await sleep(1)
  }

  for (let length = 1; length <= maxLength && !found; length++) {
    await generate("", length);
  }

  if (found || !shouldContinue()) {

    const time = (Date.now() -startTime)/1000 + ' sec'

    console.log(targetPassword,count,mode,time)
    return [targetPassword,count,mode,time];
  } else {
    return "Password not found within the given length constraints.";
  }
}
