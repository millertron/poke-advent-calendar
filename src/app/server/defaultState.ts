import { Pocket, ImageData } from '../types/types'

function isPastNthDayOfMonth(n:number) :boolean {
    const monthToCheck = 11
    const yearToCheck = 2019
    const today: Date = new Date()

    return today.getFullYear() === yearToCheck 
        && (today.getMonth() + 1) === monthToCheck // +1 as getMonth() is zero-indexed 
        && n <= today.getDate()
}

export const defaultState = {
    pokeDataList: [
        "Bulbasaur",
        "Ivysaur",
        "Venusaur",
        "Charmander",
        "Charmeleon",
        "Charizard",
        "Squirtle",
        "Wartortle",
        "Blastoise",
        "Caterpie",
        "Metapod",
        "Butterfree",
        "Weedle",
        "Kakuna",
        "Beedrill",
        "Pidgey",
        "Pidgeotto",
        "Pidgeot",
        "Rattata",
        "Raticate",
        "Spearow",
        "Fearow",
        "Ekans",
        "Arbok",
        "Pikachu",
        "Raichu",
        "Sandshrew",
        "Sandslash",
        "Nidoran♀",
        "Nidorina",
        "Nidoqueen",
        "Nidoran♂",
        "Nidorino",
        "Nidoking",
        "Clefairy",
        "Clefable",
        "Vulpix",
        "Ninetales",
        "Jigglypuff",
        "Wigglytuff",
        "Zubat",
        "Golbat",
        "Oddish",
        "Gloom",
        "Vileplume",
        "Paras",
        "Parasect",
        "Venonat",
        "Venomoth",
        "Diglett",
        "Dugtrio",
        "Meowth",
        "Persian",
        "Psyduck",
        "Golduck",
        "Mankey",
        "Primeape",
        "Growlithe",
        "Arcanine",
        "Poliwag",
        "Poliwhirl",
        "Poliwrath",
        "Abra",
        "Kadabra",
        "Alakazam",
        "Machop",
        "Machoke",
        "Machamp",
        "Bellsprout",
        "Weepinbell",
        "Victreebel",
        "Tentacool",
        "Tentacruel",
        "Geodude",
        "Graveler",
        "Golem",
        "Ponyta",
        "Rapidash",
        "Slowpoke",
        "Slowbro",
        "Magnemite",
        "Magneton",
        "Farfetch'd",
        "Doduo",
        "Dodrio",
        "Seel",
        "Dewgong",
        "Grimer",
        "Muk",
        "Shellder",
        "Cloyster",
        "Gastly",
        "Haunter",
        "Gengar",
        "Onix",
        "Drowzee",
        "Hypno",
        "Krabby",
        "Kingler",
        "Voltorb",
        "Electrode",
        "Exeggcute",
        "Exeggutor",
        "Cubone",
        "Marowak",
        "Hitmonlee",
        "Hitmonchan",
        "Lickitung",
        "Koffing",
        "Weezing",
        "Rhyhorn",
        "Rhydon",
        "Chansey",
        "Tangela",
        "Kangaskhan",
        "Horsea",
        "Seadra",
        "Goldeen",
        "Seaking",
        "Staryu",
        "Starmie",
        "Mr. Mime",
        "Scyther",
        "Jynx",
        "Electabuzz",
        "Magmar",
        "Pinsir",
        "Tauros",
        "Magikarp",
        "Gyarados",
        "Lapras",
        "Ditto",
        "Eevee",
        "Vaporeon",
        "Jolteon",
        "Flareon",
        "Porygon",
        "Omanyte",
        "Omastar",
        "Kabuto",
        "Kabutops",
        "Aerodactyl",
        "Snorlax",
        "Articuno",
        "Zapdos",
        "Moltres",
        "Dratini",
        "Dragonair",
        "Dragonite",
        "Mewtwo",
        "Mew"
    ],
    pockets: <Pocket[]>[
        <Pocket> { dayNum: 1, pokeId: null, available: isPastNthDayOfMonth(1) },
        <Pocket> { dayNum: 2, pokeId: null, available: isPastNthDayOfMonth(2) },
        <Pocket> { dayNum: 3, pokeId: null, available: isPastNthDayOfMonth(3) },
        <Pocket> { dayNum: 4, pokeId: null, available: isPastNthDayOfMonth(4) },
        <Pocket> { dayNum: 5, pokeId: null, available: isPastNthDayOfMonth(5) },
        <Pocket> { dayNum: 6, pokeId: null, available: isPastNthDayOfMonth(6) },
        <Pocket> { dayNum: 7, pokeId: null, available: isPastNthDayOfMonth(7) },
        <Pocket> { dayNum: 8, pokeId: null, available: isPastNthDayOfMonth(8) },
        <Pocket> { dayNum: 9, pokeId: null, available: isPastNthDayOfMonth(9) },
        <Pocket> { dayNum: 10, pokeId: null, available: isPastNthDayOfMonth(10) },
        <Pocket> { dayNum: 11, pokeId: null, available: isPastNthDayOfMonth(11) },
        <Pocket> { dayNum: 12, pokeId: null, available: isPastNthDayOfMonth(12) },
        <Pocket> { dayNum: 13, pokeId: null, available: isPastNthDayOfMonth(13) },
        <Pocket> { dayNum: 14, pokeId: null, available: isPastNthDayOfMonth(14) },
        <Pocket> { dayNum: 15, pokeId: null, available: isPastNthDayOfMonth(15) },
        <Pocket> { dayNum: 16, pokeId: null, available: isPastNthDayOfMonth(16) },
        <Pocket> { dayNum: 17, pokeId: null, available: isPastNthDayOfMonth(17) },
        <Pocket> { dayNum: 18, pokeId: null, available: isPastNthDayOfMonth(18) },
        <Pocket> { dayNum: 19, pokeId: null, available: isPastNthDayOfMonth(19) },
        <Pocket> { dayNum: 20, pokeId: null, available: isPastNthDayOfMonth(20) },
        <Pocket> { dayNum: 21, pokeId: null, available: isPastNthDayOfMonth(21) },
        <Pocket> { dayNum: 22, pokeId: null, available: isPastNthDayOfMonth(22) },
        <Pocket> { dayNum: 23, pokeId: null, available: isPastNthDayOfMonth(23) },
        <Pocket> { dayNum: 24, pokeId: null, available: isPastNthDayOfMonth(24) },
        <Pocket> { dayNum: 25, pokeId: null, available: isPastNthDayOfMonth(25) }
    ]
}
