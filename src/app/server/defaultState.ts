import { Pocket } from '../types/types'

console.log("Today is", new Date().getFullYear(), new Date().getMonth(), new Date().getDate())

function isPastNthDayOfMonth(n:number) :boolean {
    const monthToCheck = 11
    const yearToCheck = 2019
    const today: Date = new Date()

    return today.getFullYear() === yearToCheck 
        && (today.getMonth() + 1) === monthToCheck // +1 as getMonth() is zero-indexed 
        && n <= today.getDate()
}

export const defaultState = {
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
