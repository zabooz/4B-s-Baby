import {leaderBoardScripts} from "../contentScripts/leaderBoardScripts.js"

const leaderBoard = () => {
    
    return `
    
                <table class="table table-dark table-striped">
                <thead>
                  <tr>
                    <th scope="col" data-key="place">#</th>
                    <th scope="col" data-key="username">Name</th>
                    <th scope="col" data-key="visits">Visits</th>
                    <th scope="col" data-key="tested_passwords">Tested Passwords</th>
                    <th scope="col" data-key="generated_passwords">Generated Passwords</th>
                    <th scope="col" data-key="generated_usernames">Generated Usernames</th>
                  </tr>
                </thead>
                <tbody id="leaderBoardTable">
                </tbody>
              </table>
    
    
    
    `;
}


export const createLeaderBoardHTML = (contentBox, style) => {
    const styleSheet = "../styles/leaderBoard.css";
    style.setAttribute("href", styleSheet);
    sessionStorage.setItem("content", "createLeaderBoardHTML");
    contentBox.innerHTML = leaderBoard();
    if(sessionStorage.getItem("leaderBoard")){
        contentBox.innerHTML = sessionStorage.getItem("leaderBoard");
    }else{
        contentBox.innerHTML = leaderBoard();
        sessionStorage.setItem("leaderBoard", contentBox.innerHTML);
    }
    leaderBoardScripts();
}