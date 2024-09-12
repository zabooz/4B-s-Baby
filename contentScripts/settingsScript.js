import { dataKrakenGives, dataKrakenTrades} from "../utilities/dataKraken.js";

import { deleteUser } from "../utilities/registerLogIn.js";
export const settingsScripts = async () => {
    const overviewListItems = document.querySelectorAll("span[data-key]");
  const changeUsername = document.getElementById("changeUsername");
  const changePassword = document.getElementById("changePassword");
  const changeProfilePic = document.getElementById("chooseProfilePic");
  const changeEmail = document.getElementById("changeEmail");
  const deleteAccount = document.getElementById("deleteAccount");
  const profilePicSrc = document.querySelectorAll(".img img");


  const data = await (async () => {
    try {
      const response = await dataKrakenGives();

      return  response.data[0];
    } catch (error) {
      console.error(error);
    }
  })();




  if (data) {
    overviewListItems.forEach((item) => {
      item.innerText = data[item.dataset.key] || "N/A";
    });
  }

  const updateProfile = async (key, value) => {
    try {
      const response = await dataKrakenTrades(key, value);
      if (response.message && key !== "avatar") {
        alert(response.message + " : " + key);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error(error);
    }
  };
  changeUsername.addEventListener("click", async () => {
    const username = prompt("Enter new username:");
    if (username) {
      await updateProfile("username", username);
    }
  });

  changePassword.addEventListener("click", async () => {
    const password = prompt("Enter new password:");
    if (password) {
      await updateProfile("password", password);
    }
  });

  changeEmail.addEventListener("click", async () => {
    const email = prompt("Enter new email:");
    if (email) {
      await updateProfile("email", email);
    }
  });

  deleteAccount.addEventListener("click", async () => {
    console.log(214)
      deleteUser()
  })



  let avatarSrc = "";

  profilePicSrc.forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector(".choosen")?.classList.remove("choosen");

      item.classList.toggle("choosen");
      avatarSrc = item.src;
    });
  });


  changeProfilePic.addEventListener("click", async () => {
    const profilePictureNav = document.getElementById("profilePictureNav");
    const avatar = document.getElementById("avatar");

    if (avatarSrc) {
      avatar.src = avatarSrc;
      profilePictureNav.src = avatarSrc;
      await updateProfile("avatar", avatarSrc);
    }
  });
};
