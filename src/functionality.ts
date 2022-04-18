import { Products,Loans } from "./global"
const TotalAmountCalculator = (val1: string,val2:Products[],val3:Loans): string => {
    const result = val2.filter(({ id }) => id === val3.loanId)
    return (parseInt(val1) + parseInt(val1) * parseFloat(result[0]["interest"])).toString()
}
const loanDateCalculator = (month: string): string => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]
    const date = new Date()
    const monthAll = date.getMonth() + parseInt(month)
    return months[monthAll % 12] + " " + (date.getFullYear() + parseInt(monthAll / 12))
}


export {TotalAmountCalculator,loanDateCalculator}