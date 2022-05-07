import { fetchPlantations } from "../model/fetchPlantations.js"
import { fetchContentDetails } from "../model/fetchContentDetails.js"
import { fetchFarm } from "../model/fetchFarm.js"


const nameOwner = document.querySelector("[data-owner-name]")
const dateVisit = document.querySelector("[data-visita]")
const initials = document.querySelector("[data-owner-initials]")
const obs = document.querySelector(".side-bottom-subtitle")
const farmName = document.querySelector("[farm-name]")
const safraDate = document.querySelector("[data-safra]")
const qntdTalhoes = document.querySelector("[data-qntd-talhoes]")
const rvDate = document.querySelector("[data-rv-date]")
const nivelPluviometria = document.querySelector("[data-nivel-Pl]")

export async function renderAside(){
    const dataO = await fetchContentDetails()
    const dataF = await fetchPlantations()
    const dataIf = await fetchFarm()

    let numTalhoes = dataF.results.length + dataIf.plots

    nivelPluviometria.innerHTML = (`<i class="fa-solid fa-droplet"></i> ${dataIf.rain_until_date}`)

    nameOwner.textContent = dataO.owner.name
    farmName.textContent = dataO.farm.name
    dateVisit.textContent = dataO.details.date.split("-").reverse().join("/")
    initials.textContent = dataO.owner.initials
    obs.textContent = dataO.details.observation 
    safraDate.textContent = dataO.harvest.name
    rvDate.textContent += " - " + dataO.details.date.split("-").reverse().join("/")
    qntdTalhoes.textContent = (numTalhoes + " Talhões")
}
