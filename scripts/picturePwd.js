import { passwordConverter } from "./passwordConverter.js";

export async function pictureToString() {
  const input = document.getElementById("uploadFile");
  const file = input.files[0];
  const label = document.getElementById("uploadLabel");
  label.textContent = "Foto hochladen!";

  if (!file) {
    throw new Error("No file selected");
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = function () {
      const base64String = reader.result
        .replace("data", "")
        .replace(/^.+,/, "");
      const pwdLength = 12;
      const key = base64String.charCodeAt(pwdLength*pwdLength*pwdLength/2*pwdLength/2*pwdLength/2);

      let password = "";
      let index = 100;
      let count =0
      while (password.length < pwdLength) {
        ++index
        count++
        index = (index*2 + key ) % base64String.length;
        const char = base64String[index];
        password += char;
        console.log( "count: ",count, "index: ", index,"base64StringChar:",base64String[index], "char: ",char,"base64String" ,base64String)
      }

      let betterPassword = "";

      for (let i = 0; i < password.length; i++) {
        if (i % 2 === 0) {
          betterPassword += passwordConverter(password[i], "leetAdvanced");
        } else {
          betterPassword += password[i];
        }
      }
      resolve(betterPassword);
    };

    reader.onerror = function () {
      reject(new Error("File reading failed"));
    };

    reader.readAsDataURL(file);
  });
}
