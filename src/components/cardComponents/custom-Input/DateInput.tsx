import React from "react"

const DateInput: React.FC = ({ loan, chnagesHandler, IncrimentHandler, DecrimentHandler }) => {
    return (
        <div className="grid grid-cols-5 border rounded h-14" style={{ borderColor: "#E9EEF2" }}>
            <button className="font-bold blueGray300" onClick={() => DecrimentHandler()}>
                &lt;
            </button>
            <input
                style={{ color: "#4D6475" }}
                className="text-center col-span-3"
                type="text"
                name="Months"
                value={loan.Months}
                onChange={(e) => chnagesHandler(e)}
            />
            <button className="font-bold blueGray300" onClick={() => IncrimentHandler()}>
                &gt;
            </button>
        </div>
    )
}

export default DateInput
