function bruteforcePassword(targetPassword, charset, maxLength) {
  let count = 0;
  let found = false;
  let mode = 'simple'
  let closeEnough = 'N/A'
  const startTime = Date.now()
  function generate(prefix, length) {
    console.log(prefix)
    if (found) return;
    count++;
    if (length === 0) {
      // console.log(prefix, count);
      if (prefix === targetPassword) {
        console.log(`Password found: ${prefix}`);
        found = true;
      }
      return;
    }
    for (let char of charset) {
      generate(prefix + char, length - 1);
      if (found) return;
    }
  }

  for (let length = 1; length <= maxLength && !found; length++) {
    generate("", length);
  }

  if (found) {

    const time = (Date.now() -startTime)/1000 + ' sec'


    return [targetPassword,count,mode,time];
  } else {
    return "Password not found within the given length constraints.";
  }
}

module.exports = bruteforcePassword;
