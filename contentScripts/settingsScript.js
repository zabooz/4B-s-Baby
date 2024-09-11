import { dataKrakenGives, dataKrakenTrades,dataKrakenBestow } from "../utilities/dataKraken.js";
import { leaderBoards } from "../featureHtmlScripts/leaderBoards.js";
export const settingsScripts = async () => {
  const overviewListItems = document.querySelectorAll(".overview  span");
  const changeUsername = document.getElementById("changeUsername");

  const changePassword = document.getElementById("changePassword");
  const chooseProfilePic = document.getElementById("chooseProfilePic");
  const profilePicSrc = document.querySelectorAll(".img img");
  let data;

  const getUserStats = async () => {
    try {
      const response = await dataKrakenGives();

      data = response.data[0];
    } catch (error) {
      console.error(error);
    }
  };

  await getUserStats();

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

  let avatarSrc = "";

  profilePicSrc.forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector(".choosen")?.classList.remove("choosen");

      item.classList.toggle("choosen");
      avatarSrc = item.src;
    });
  });

  chooseProfilePic.addEventListener("click", async () => {
    const profilePictureNav = document.getElementById("profilePictureNav");
    const avatar = document.getElementById("avatar");

    if (avatarSrc) {
      avatar.src = avatarSrc;
      profilePictureNav.src = avatarSrc;
      await updateProfile("avatar", avatarSrc);
    }
  });

  if (data) {
    overviewListItems.forEach((item) => {
      item.innerText = data[item.id] || "N/A"; // Fallback if no data is available
    });
  }


  const leaderBoardTab = document.getElementById("leaderBoardTab");

  leaderBoardTab.addEventListener("click", async () => {
    const response = await dataKrakenBestow();
    if(response.success === true) {
        leaderBoards(response.data);
    }
  });



};
