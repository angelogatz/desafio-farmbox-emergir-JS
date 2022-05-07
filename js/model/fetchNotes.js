import { justCors } from "./urls/ulrJustcors.js"
import { notesUrl } from "./urls/urlNotes.js"

export async function fetchNotes(){

    const url = `${justCors}${notesUrl}`

    try{
        const resposta = await fetch(url)
        const data = await resposta.json()
        return data
        
    } catch (err) {
        console.log("algo deu errado", err)
    }
}