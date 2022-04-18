import React from "react"
const Bolder:React.FC<{children:string}>=({children})=>(<span className="font-bold">{children}</span>)
const MonthlyAmount: React.FC = ({ loan }) => {
    

    const formater = (val: string): string => {
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    return (
        <div className="container border rounded-lg w-full" style={{ borderColor: "#E9EEF2" }}>
            <div className="container flex justify-between px-[32px] pt-[24px] items-end pb-[16px]">
                <span className="font-normal" style={{ fontSize: "20px" }}>
                    Monthly amount
                </span>
                <span className="font-medium" style={{ color: "#0079FF", fontSize: "32px" }}>
                    ${parseInt(loan.TotalAmount / loan.Months)}
                </span>
            </div>
            <div
                className="container px-[32px] py-[24px] text-xs font-normal"
                style={{ backgroundColor: "#F4F8FA", color: "#1C1E1F" }}>
                <p className="text-center md:text-left">
                    You’re planning {loan.Months}{" "}
                    <Bolder>monthly deposits</Bolder> to reach your{" "}
                    <Bolder>$ {formater(loan.amount)}</Bolder> goal by{" "}
                    <Bolder>{loan.targetMonth}</Bolder>. The total
                    amount loaned will be{" "}
                    <Bolder>${formater(loan.TotalAmount)}</Bolder>
                </p>
            </div>
        </div>
    )
}

export default MonthlyAmount
