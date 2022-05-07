import { justCors } from "./urls/ulrJustcors.js"
import { asideUrl } from "./urls/urlContentDetails.js"

export async function fetchContentDetails(){

    let url = `${justCors}${asideUrl}`

    try{
        const resposta = await fetch(url)
        const data = await resposta.json()
        return data
        
    } catch (err) {
        console.log("algo deu errado", err)
    }
   
}