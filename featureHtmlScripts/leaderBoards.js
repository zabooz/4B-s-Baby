export const leaderBoards = (data) => {

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

        place.innerText = index + 1
        name.innerText = item.username;
        testPw.innerText = item.tested_passwords
        genPw.innerText = item.generated_passwords
        genUser.innerText = item.generated_usernames
        visits.innerText = item.visits
        row.append(place,name, visits ,testPw, genPw, genUser)
        leaderBoardTable.append(row)
    })

}