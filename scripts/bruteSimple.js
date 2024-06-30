export function bruteForceSimple(targetPassword) {
  const charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:",.<>?/`~';
  const maxLength = 16;
  let count = 0;
  let found = false;
  const mode = "Simple";
  const startTime = Date.now();
  let abort = false;

  console.log("brute force started");

  function generate(prefix, length, resolve) {
    if (found || abort) return resolve();

    if (length === 0) {
      count++;
      if (prefix === targetPassword) {
        console.log(`Password found: ${prefix}`);
        found = true;
        return resolve();
      }
      return resolve();
    }

    (function iterateChars(index) {
      if (index === charset.length) {
        return resolve();
      }
      if (found || abort) {
        return resolve();
      }
      const char = charset[index];
      setImmediate(() => {
        generate(prefix + char, length - 1, () => {
          iterateChars(index + 1);
        });
      });
    })(0);
  }

  async function run() {
    for (let length = 1; length <= maxLength && !found; length++) {
      await new Promise((resolve) => generate("", length, resolve));
      if (found || abort) {
        const time = (Date.now() - startTime) / 1000 + " sec";
        return [targetPassword, count, mode, time];
      }
    }
  }

  return {
    promise: run(),
    abort: () => {
      abort = true;
    },
  };
}
