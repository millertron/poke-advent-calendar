import { defaultState } from "../server/defaultState"

export const serverUrl = process.env.NODE_ENV === `production` ? `` : "http://localhost:3000"

export const isPastNthDayOfMonth = (n:number) :boolean => {
    const monthToCheck = 12
    const yearToCheck = 2019
    const today: Date = new Date()

    return today.getFullYear() === yearToCheck 
        && (today.getMonth() + 1) === monthToCheck // +1 as getMonth() is zero-indexed 
        && n <= today.getDate()
}

export const getPokeName = (pokeId :number) :string  => defaultState.pokeDataList[pokeId - 1]

export const  getPokeImgSrc = (pokeName :string) :string => {
    const formattedName = pokeName.toLowerCase().replace("'",'');
    return `https://img.pokemondb.net/sprites/black-white/anim/normal/${formattedName}.gif`
}
