interface Products {
    id: string
    interest: string
    name: string
    min_amount: string
    max_amount: string
    min_tenure: string
    max_tenure: string
    image: string
}
interface Loans {
    loanId: string
    Months: string
    amount: string
    TotalAmount: string
    monthlyInstallment: string
    targetMonth: string
}
export { Loans, Products }