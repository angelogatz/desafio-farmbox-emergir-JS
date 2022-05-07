import { justCors } from "./urls/ulrJustcors.js"
import { farmUrl } from "./urls/urlFarm.js"

export async function fetchFarm(){
    

    let url = `${justCors}${farmUrl}`

    try{
        const resposta = await fetch(url)
        const data = await resposta.json()
        return data
        
    } catch (err) {
        console.log("algo deu errado", err)
    }
   
}