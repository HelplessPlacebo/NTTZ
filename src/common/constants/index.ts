export interface optionType {
    value: string,
    label: string
}

export interface exchangeRate {
    buyValue:number
    sellValue:number
}

export const TIMER_START_VALUE = 64800000

export const CURRENCY = [
    {value: "USD/RUB", label: "USD/RUB"},
    {value: "EUR/USD", label: "EUR/USD"},
    {value: "TRY/CNY", label: "TRY/CNY"},
    {value: "CNY/USD", label: "CNY/USD"}
] as optionType[]