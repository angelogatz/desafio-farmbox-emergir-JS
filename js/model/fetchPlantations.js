import { justCors } from "./urls/ulrJustcors.js"
import { plantationUrl } from "./urls/urlPlantations.js"

export async function fetchPlantations(){

    const url = `${justCors}${plantationUrl}`

    try{
        const resposta = await fetch(url)
        const data = await resposta.json()
        return data
        
    } catch (err) {
        console.log("algo deu errado", err)
    }
}