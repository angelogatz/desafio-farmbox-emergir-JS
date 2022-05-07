import { fetchNotes } from "../model/fetchNotes.js"

export async function renderPlantations(){
    const dataF = await fetchNotes()
    
    dataF.results.forEach(result => {

        if(result.location_type === "Plantation"){
            addPlantationsCards(result)
        }
    })
}


function addPlantationsCards(result){

    const divCardsPlantations = document.querySelector(`[data-id-cards${result.location.id}]`)

    let arr = []
    
 
    result.attachments.images.forEach(element => {
        arr.push(element.thumb_url)
       
    })

   
    if(arr.length !== 0){
        const plantationsCard =
        `
        <div class="section-card">
            <div class="section-card-links">
                <h2 class="cards-title"><i class="fa-solid fa-pencil"></i>Anotação</h2>
                <div class="images">
                    ${arr.map(url => `<img src="${url}" alt="img-1">`).join("")}
                </div>
                <p class="cards-subtitle">${result.description}</p>
            </div>
        </div>
        `
    divCardsPlantations.insertAdjacentHTML("beforeend", plantationsCard)
    } else {
        const plantationsCard =
        `
        <div class="section-card">
            <div class="section-card-links">
                <h2 class="cards-title"><i class="fa-solid fa-pencil"></i>Anotação</h2>
                
                <p class="cards-subtitle">${result.description}</p>
            </div>
        </div>
        `
    divCardsPlantations.insertAdjacentHTML("beforeend", plantationsCard)
    }
    
    
    
    
}