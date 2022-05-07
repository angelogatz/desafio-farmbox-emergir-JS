import { fetchPlantations } from "../model/fetchPlantations.js"

export async function renderTalhao(){
    const dataF = await fetchPlantations()
    const coringa = true

    let arr = []

    dataF.results.forEach((result, indice) => {
        addTalhao(result, indice, coringa)
    })
}



function addTalhao(result, indice, coringa){


    
    const divCardsTalhao = document.querySelector("[data-plantation-cards-div]")

    if(indice === 0 && coringa){

        const plantationCardDiv =

        `    
        <h1>Eventos dos Talhões</h1>
        <div class="section-navcard-links">
            <div class="navcard-link-1">
                
                <h3 data-header-0>${result.plot.name}<sup class="side-baloom">${result.cycle}° ciclo</sup></h3>
                <span data-colorido-0>${(result.variety.name + " - " + result.area + " Ha")}</span>
                <p class="plantado">${result.state == "active" ? 'Plantado' : ""}</p>
            </div>

            <div class="navcard-link-2">
                <div class="divisor-navcard"></div>
                <div class="info-link-card">
                    <div class="info-1">
                        <p >Data do plantio</p>
                        <p >Emergência </p>
                        <p >Colheita </p>
                    </div>
                    <div class="info-2">
                        <p data-date-0>${result.date !== null ? result.date.split("-").reverse().join("/") : "data indisponivel"}</p>
                        <p data-emergence-date-0>${result.emergence_prediction_date !== null ? result.emergence_prediction_date.split("-").reverse().join("/") : "data indisponivel"}</p>
                        <p data-harvest-date-0>${result.harvest_prediction_date !== null ? result.harvest_prediction_date.split("-").reverse().join("/") : "data indisponivel"}</p>
                    </div>
                </div>
                <div class="divisor-navcard"></div>
            </div>

            <div class="divisor-navcard-mobile"></div>

            <div class="navcard-link-3">
                <i class="uil uil-angle-up" id="arrow-hide${result.id}" class="placeholder"></i>
            </div>
        </div>
        <div data-id-cards${result.id} class="talhao-cards-hide"></div>
    `
        divCardsTalhao.insertAdjacentHTML("beforeend", plantationCardDiv)

        const arrowButton = document.querySelector(`#arrow-hide${result.id}`)
        const cardHide = document.querySelector(`[data-id-cards${result.id}]`)

    

        arrowButton.addEventListener("click", function(){

        
            if(cardHide.classList.contains("hide")){
                arrowButton.style.transform = ""
                cardHide.style.display = ""
                cardHide.classList.remove("hide")
            } else {
                arrowButton.style.transform = "rotateZ(180deg)"
                cardHide.classList.add("hide")
                cardHide.style.display = "none"
            }
        })
    } else if(indice === 0 && !coringa){
        const plantationCardDiv =

        `    
        <h1>Eventos dos Talhões</h1>
        <div class="section-navcard-links">
            <div class="navcard-link-1">
                
                <h3 data-header-0>${result.plot.name}<sup class="side-baloom">${result.cycle}° ciclo</sup></h3>
                <span data-colorido-0>${(result.variety.name + " - " + result.area + " Ha")}</span>
                <p class="plantado">${result.state == "active" ? 'Plantado' : ""}</p>
            </div>

            <div class="navcard-link-2">
                <div class="divisor-navcard"></div>
                <div class="info-link-card">
                    <div class="info-1">
                        <p >Data do plantio</p>
                        <p >Emergência </p>
                        <p >Colheita </p>
                    </div>
                    <div class="info-2">
                        <p data-date-0>${result.date !== null ? result.date.split("-").reverse().join("/") : "data indisponivel"}</p>
                        <p data-emergence-date-0>${result.emergence_prediction_date !== null ? result.emergence_prediction_date.split("-").reverse().join("/") : "data indisponivel"}</p>
                        <p data-harvest-date-0>${result.harvest_prediction_date !== null ? result.harvest_prediction_date.split("-").reverse().join("/") : "data indisponivel"}</p>
                    </div>
                </div>
                <div class="divisor-navcard"></div>
            </div>

            <div class="divisor-navcard-mobile"></div>

            <div class="navcard-link-3">
                <i class="uil uil-angle-up" class="talhao-cards-hide" id="arrow-hide${result.id}" style="transform: rotateZ(180deg);"></i>
            </div>
        </div>
        <div data-id-cards${result.id} class="placeholder hide" style="display: none;"></div>
        `
        divCardsTalhao.insertAdjacentHTML("beforeend", plantationCardDiv)

        const arrowButton = document.querySelector(`#arrow-hide${result.id}`)
        const cardHide = document.querySelector(`[data-id-cards${result.id}]`)

    

        arrowButton.addEventListener("click", function(){

        
            if(cardHide.classList.contains("hide")){
                arrowButton.style.transform = ""
                cardHide.style.display = ""
                cardHide.classList.remove("hide")
            } else {
                arrowButton.style.transform = "rotateZ(180deg)"
                cardHide.classList.add("hide")
                cardHide.style.display = "none"
            }
        })
    } else if(coringa){
        const plantationCardDiv =

        `    
        <h1> </h1>
        <div class="section-navcard-links">
            <div class="navcard-link-1">
                
                <h3 data-header-0>${result.plot.name}<sup class="side-baloom">${result.cycle}° ciclo</sup></h3>
                <span data-colorido-0>${(result.variety.name + " - " + result.area + " Ha")}</span>
                <p class="plantado">${result.state == "active" ? 'Plantado' : ""}</p>
            </div>

            <div class="navcard-link-2">
                <div class="divisor-navcard"></div>
                <div class="info-link-card">
                    <div class="info-1">
                        <p >Data do plantio</p>
                        <p >Emergência </p>
                        <p >Colheita </p>
                    </div>
                    <div class="info-2">
                        <p data-date-0>${result.date !== null ? result.date.split("-").reverse().join("/") : "data indisponivel"}</p>
                        <p data-emergence-date-0>${result.emergence_prediction_date !== null ? result.emergence_prediction_date.split("-").reverse().join("/") : "data indisponivel"}</p>
                        <p data-harvest-date-0>${result.harvest_prediction_date !== null ? result.harvest_prediction_date.split("-").reverse().join("/") : "data indisponivel"}</p>
                    </div>
                </div>
                <div class="divisor-navcard"></div>
            </div>

            <div class="divisor-navcard-mobile"></div>

            <div class="navcard-link-3">
                <i class="uil uil-angle-up" id="arrow-hide${result.id}" style="transform: rotateZ(180deg);"></i>
            </div>
        </div>
        <div data-id-cards${result.id} class="talhao-cards-hide hide" style="display: none;"></div>
        `
        divCardsTalhao.insertAdjacentHTML("beforeend", plantationCardDiv)

        const arrowButton = document.querySelector(`#arrow-hide${result.id}`)
        const cardHide = document.querySelector(`[data-id-cards${result.id}]`)

    

        arrowButton.addEventListener("click", function(){

        
            if(cardHide.classList.contains("hide")){
                arrowButton.style.transform = ""
                cardHide.style.display = ""
                cardHide.classList.remove("hide")
            } else {
                arrowButton.style.transform = "rotateZ(180deg)"
                cardHide.classList.add("hide")
                cardHide.style.display = "none"
            }
        })
    } else {
        const plantationCardDiv =

        `    
        <h1> </h1>
        <div class="section-navcard-links">
            <div class="navcard-link-1">
                
                <h3 data-header-0>${result.plot.name}<sup class="side-baloom">${result.cycle}° ciclo</sup></h3>
                <span data-colorido-0>${(result.variety.name + " - " + result.area + " Ha")}</span>
                <p class="plantado">${result.state == "active" ? 'Plantado' : ""}</p>
            </div>

            <div class="navcard-link-2">
                <div class="divisor-navcard"></div>
                <div class="info-link-card">
                    <div class="info-1">
                        <p >Data do plantio</p>
                        <p >Emergência </p>
                        <p >Colheita </p>
                    </div>
                    <div class="info-2">
                        <p data-date-0>${result.date !== null ? result.date.split("-").reverse().join("/") : "data indisponivel"}</p>
                        <p data-emergence-date-0>${result.emergence_prediction_date !== null ? result.emergence_prediction_date.split("-").reverse().join("/") : "data indisponivel"}</p>
                        <p data-harvest-date-0>${result.harvest_prediction_date !== null ? result.harvest_prediction_date.split("-").reverse().join("/") : "data indisponivel"}</p>
                    </div>
                </div>
                <div class="divisor-navcard"></div>
            </div>

            <div class="divisor-navcard-mobile"></div>

            <div class="navcard-link-3">
                <i class="uil uil-angle-up" id="arrow-hide${result.id}" style="transform: rotateZ(180deg);"></i>
            </div>
        </div>
        <div data-id-cards${result.id} class="talhao-cards-hide hide" style="display: none;"></div>
        `
        divCardsTalhao.insertAdjacentHTML("beforeend", plantationCardDiv)

        const arrowButton = document.querySelector(`#arrow-hide${result.id}`)
        const cardHide = document.querySelector(`[data-id-cards${result.id}]`)

    

        arrowButton.addEventListener("click", function(){

        
            if(cardHide.classList.contains("hide")){
                arrowButton.style.transform = ""
                cardHide.style.display = ""
                cardHide.classList.remove("hide")
            } else {
                arrowButton.style.transform = "rotateZ(180deg)"
                cardHide.classList.add("hide")
                cardHide.style.display = "none"
            }
        })
    }
    
    

}