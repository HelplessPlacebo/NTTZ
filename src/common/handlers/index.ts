import { exchangeRate } from '../../common/constants'

const toDoubleZerosFormatter = (num: number):string => num > 9 ? "" + num : "0" + num

const getRandomFloat = (min = 1, max = 2, decimals = 4) : number => {
    return parseFloat((Math.random() * (max - min) + min).toFixed(decimals))
}

export const enchantTime = (hours: number, minutes: number, seconds: number): string =>
    `${toDoubleZerosFormatter(hours)}:${toDoubleZerosFormatter(minutes)}:${toDoubleZerosFormatter(seconds)}`


export const getRandomRate = ():exchangeRate => {
    return {
        sellValue: getRandomFloat(),
        buyValue: getRandomFloat()
    }
}