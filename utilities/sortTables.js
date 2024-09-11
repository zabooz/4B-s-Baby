import { dataKrakenGives } from "../utilities/dataKraken.js";
import { setWithExpiry,getWithExpiry } from "./expireToken.js";
export const sortTables = async () => {
  const table = document.querySelector("table");

    let data;




  table.addEventListener("click",async (event) => {
    const target = event.target;

    if (target.tagName === "TH" && target.cellIndex > 1) {


        const col = target.dataset.key


        try{

            if(getWithExpiry(col)) {
                data = getWithExpiry(col);
            }else{
                const response = await dataKrakenGives(col);
                data = response.data
                setWithExpiry(col, data, 180000);
            }

            const leaderBoardTable = document.getElementById("leaderBoardTable");
            leaderBoardTable.innerHTML = "";
            data.forEach((item, index) => {
                const row = document.createElement("tr");
                const place = document.createElement("td");
                const name = document.createElement("td");
                const testPw = document.createElement("td");
                const genPw = document.createElement("td");
                const genUser = document.createElement("td");
                const visits = document.createElement("td");
                if(item.user) {

                    place.innerText = item.rank
                    item = item.user
                }else{
                    place.innerText = index + 1
                }
                name.innerText = item.username;
                testPw.innerText = item.tested_passwords
                genPw.innerText = item.generated_passwords
                genUser.innerText = item.generated_usernames
                visits.innerText = item.visits
                row.append(place,name, visits ,testPw, genPw, genUser)
                leaderBoardTable.append(row)
            })
        
        } catch(err) {
            console.log(err)
        }
        }
  });






}

