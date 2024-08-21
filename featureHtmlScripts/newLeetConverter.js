import { passwordConverter } from "../scripts/passwordConverter.js";

export function tripleConverter(password) {
  const newPassword1 = passwordConverter(password, "leetSimple");
  const newPassword2 = passwordConverter(password, "leetAdvanced");
  const newPassword3 = passwordConverter(password, "leetComplicated");
  return [newPassword1, newPassword2, newPassword3];
}
