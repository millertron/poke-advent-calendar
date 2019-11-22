export const serverUrl = process.env.NODE_ENV === `production` ? `` : "http://localhost:3000"

export function isPastNthDayOfMonth(n:number) :boolean {
    const monthToCheck = 11
    const yearToCheck = 2019
    const today: Date = new Date()

    return today.getFullYear() === yearToCheck 
        && (today.getMonth() + 1) === monthToCheck // +1 as getMonth() is zero-indexed 
        && n <= today.getDate()
}
