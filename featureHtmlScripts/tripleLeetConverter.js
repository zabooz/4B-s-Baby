import { passwordConverter } from "../scripts/passwordConverter.js";

export function tripleConverter(password) {
  const pwArr = [undefined, undefined, undefined];
  const modi = ["leetSimple", "leetAdvanced", "leetComplicated"];
  for (let i = 0; i < pwArr.length; i++) {
    pwArr[i] = passwordConverter(password, modi[i]);
  }
  return pwArr;
}
