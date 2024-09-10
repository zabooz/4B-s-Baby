
import { dataKrakenGives, dataKrakenTrades } from "../utilities/dataKraken.js"


export const settingsScripts = async () => {
    const overviewListItems = document.querySelectorAll(".overview  span");
    const avaterBtn     = document.getElementById("avater")
    const changeUsername = document.getElementById("changeUsername")
    const changePassword = document.getElementById("changePassword")


    let data;

   const  getUserStats = async () => {
        try{
    
            const response = await dataKrakenGives()
    
            data = response.data[0]

            
            
        } catch (error) {
            console.error(error)
        }
        

    }
    
    await getUserStats()



    const updateProfile = async (key,value) => {
        try{
            const response = await dataKrakenTrades(key,value)
           if(response.message){
               alert(response.message)
               
            }else{
               console.log("error")
           }




        }catch (error) {
            console.error(error)
        }
    } 
    changeUsername.addEventListener("click", async () => {
        const username = prompt("Enter new username:");
        if (username) {
            await updateProfile("username", username)
        }
        })

    changePassword.addEventListener("click", async () => {
        const password = prompt("Enter new password:");
        if (password) {
            await updateProfile("password", password)
        }
        })



        if (data) {  
 
        overviewListItems.forEach((item) => {
            item.innerText = data[item.id] || 'N/A'; // Fallback if no data is available
        });
    }


    
}