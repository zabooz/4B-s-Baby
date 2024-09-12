import { dataKrakenGives } from "../utilities/dataKraken.js";
import { setWithExpiry, getWithExpiry } from "../utilities/expireToken.js";
export const leaderBoardScripts = async () => {
  const col = "visits";
  let data;

  if (getWithExpiry(col)) {
    data = getWithExpiry(col);
  } else {
    const response = await dataKrakenGives(col);
    data = response.data;
    setWithExpiry(col, data, 180000);
  }

  const table = document.querySelector("table");

  table.addEventListener("click", async (event) => {
    const target = event.target;

    if (target.tagName === "TH" && target.cellIndex > 1) {
      const col = target.dataset.key;
      try {
        if (getWithExpiry(col)) {
          data = getWithExpiry(col);
        } else {
          const response = await dataKrakenGives(col);
          data = response.data;
          setWithExpiry(col, data, 180000);
        }

        const leaderBoardTable = document.getElementById("leaderBoardTable");
        leaderBoardTable.innerHTML = "";
        data.forEach((item, index) => {
          const row = document.createElement("tr");
          const td = document.createElement("td");

          let keyArr;

          if (!item.user) {
            keyArr = Object.keys(item);
            td.textContent = index + 1;
          } else {
            td.textContent = item.rank;
            item = item.user;
            keyArr = Object.keys(item);
            row.id = "userRow";
          }
          row.append(td);
          keyArr.forEach((key) => {
            const td = document.createElement("td");
            td.innerText = item[key];
            row.append(td);
          });

          leaderBoardTable.append(row);
        });
      } catch (err) {
        console.log(err);
      }
    }
  });

  const thirdTh = document.querySelector("th[data-key='visits']");
  thirdTh.click();
};
