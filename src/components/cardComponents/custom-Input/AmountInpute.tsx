import React from "react"

const AmountInpute: React.FC = ({ loan, chnagesHandler }) => {
    return (
        <div
            className="container grid grid-cols-5 h-14 border roundeds items-center"
            style={{ borderColor: "#E9EEF2" }}>
            <span className="px-3.5 blueGray100 text-base">$</span>
            <input
                style={{ color: "#4D6475" }}
                className="text-left col-span-4 h-full"
                type="text"
                name="amount"
                value={loan.amount}
                onChange={(e) => chnagesHandler(e)}
            />
        </div>
    )
}

export default AmountInpute
