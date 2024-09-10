
import { dataKrakenGives } from "../utilities/dataKraken.js"


export const settingsScripts = async () => {
    const overviewListItems = document.querySelectorAll(".overview  span");
    
    
   const  getUuserStats = async () => {
        try{
    
            const response = await dataKrakenGives()
    
            const data = response.data[0]
            overviewListItems.forEach((item) => {
                console.log(data)
                item.innerText = data[item.id]
            })
            
    
        } catch (error) {
            console.error(error)
        }
    
    }
    
    getUuserStats()
    
}