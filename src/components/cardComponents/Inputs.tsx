import React from "react"
import AmountInpute from "./custom-Input/AmountInpute"
import DateInput from "./custom-Input/DateInput"
const Inputs: React.FC = ({ loan, chnagesHandler, IncrimentHandler, DecrimentHandler }) => {
    return (
        <div className="grid gap-4 pb-4 md:pb-6 md:grid-cols-3">
            <div className="md:col-span-2">
                <label className="text-xs">Loan amount</label>
                <AmountInpute loan={loan} chnagesHandler={chnagesHandler}></AmountInpute>
            </div>
            <div>
                <label className="text-xs">Number of Months</label>
                <DateInput
                    loan={loan}
                    chnagesHandler={chnagesHandler}
                    IncrimentHandler={IncrimentHandler}
                    DecrimentHandler={DecrimentHandler}>
                    Number of Months
                </DateInput>
            </div>
        </div>
    )
}

export default Inputs
