import { renderTalhao } from "../view/renderTalhoes.js"
import { renderPlantations } from "../view/renderPlantations.js"
import { renderFarm } from "../view/renderFarm.js"
import { renderAside } from "../view/renderAside.js"

export function load(){
    window.onload = async () => {
        
        document.querySelector(".wrapper").style = "display: none;"
        document.querySelector("[loadingEmptyState]")
        const farmContent = document.querySelector(".section-cards-container")
        const titleFarmCards = `<h1>Anotações da fazenda</h1>`

        if(document.readyState === "complete"){
            try{
                await renderAside()
                await renderFarm()
                await renderTalhao()
                await renderPlantations()
                farmContent.insertAdjacentHTML("beforebegin", titleFarmCards)
            } catch (err){
                console.log("Erro ->" + err)
            } finally {
                document.querySelector("[loadingEmptyState]").style = "display: none;"
                document.querySelector(".lds-hourglass").style = "display: none;"
                document.querySelector(".wrapper").style = ""
            }
        }
    }
}