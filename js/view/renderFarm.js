import { fetchNotes } from "../model/fetchNotes.js"

export async function renderFarm(){
    const dataF = await fetchNotes()
    let arr = []
    dataF.results.forEach(result => {

        if(result.location_type === "Farm"){
            addFarmCards(result)
        } 
    })
}

function addFarmCards(result){

    const divCardsFarm = document.querySelector("[data-farm-cards]")

    let arr = []
  
    result.attachments.images.forEach(element => {
        arr.push(element.thumb_url)
        
    })
    
    const farmCard =
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
    divCardsFarm.insertAdjacentHTML("beforeend", farmCard)
}