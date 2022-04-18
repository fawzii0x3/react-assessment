import React,{useState,useEffect} from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Card from "./components/card"
import { Products,Loans } from "./global"
import {TotalAmountCalculator,loanDateCalculator} from './functionality'
const App: React.FC = () => {
    const [products, setProducts] = useState<Products[]>([])
    const [loan, setLoan] = useState<Loans>({
        loanId: "20",
        Months: "1",
        amount: "1",
        TotalAmount: "1",
        monthlyInstallment: loanDateCalculator("1"),
        targetMonth: loanDateCalculator("1"),
    })
    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => JSON.stringify(data))
            .then((data) => JSON.parse(data))
            .then((data) => {
                setProducts(data)
            })
    }, [])

    const chnagesHandler = (e: any) => {
        const { name, value } = e.target
        if (!isNaN(value)) {
            setLoan({
                ...loan,
                [name]: value,
                TotalAmount: name === "amount" ? TotalAmountCalculator(value,products,loan) : loan.TotalAmount,
                targetMonth: name === 'Months' ?loanDateCalculator(value):loan.targetMonth
            })
        }
    }
    
    const IncrimentHandler = () => {
        const result = products.filter(({ id }) => id === loan.loanId)
        if (parseInt(result[0]["max_tenure"]) > parseInt(loan.Months)) {
            const month = (parseInt(loan.Months) + 1).toString()
            setLoan({
                ...loan,
                Months: month,
                targetMonth:loanDateCalculator(month)
            })
        }
        if (parseInt(result[0]["max_tenure"]) < parseInt(loan.Months)) {
            const month=result[0]["max_tenure"]
            setLoan({
                ...loan,
                Months: month,
                targetMonth:loanDateCalculator(month)
            })
        }
    }
    const DecrimentHandler = () => {
        const result = products.filter(({ id }) => id === loan.loanId)
        if (parseInt(result[0]["min_tenure"]) < parseInt(loan.Months)) {
            const month =(parseInt(loan.Months) - 1).toString()
            setLoan({
                ...loan,
                Months: month,
                targetMonth:loanDateCalculator(month)
            })
        }
        if (parseInt(result[0]["min_tenure"]) > parseInt(loan.Months)) {
            const month = result[0]["min_tenure"]
            setLoan({
                ...loan,
                Months: month,
                targetMonth:loanDateCalculator(month)
            })
        }
    }
    const IdHandler = (id) => {
        setLoan({
            loanId: id,
            Months: "1",
            amount: "1",
            TotalAmount: "1",
            monthlyInstallment: loanDateCalculator("1"),
            targetMonth: loanDateCalculator("1"),
        })
    }
    const subsHnadler=()=>{
        const result = products.filter(({ id }) => id === loan.loanId)[0]
        if(loan.Months >= result.min_tenure && loan.Months <= result.max_tenure   && loan.amount >= result.min_amount && loan.amount <= result.max_amount ){
            alert('Done')
            setLoan({
                ...loan,
                Months: "1",
                amount: "1",
                TotalAmount: "1",
                monthlyInstallment: loanDateCalculator("1"),
                targetMonth: loanDateCalculator("1"),
            })
        }else{
            alert('check your input')
            
        }
    }
    return (
        <div style={{ backgroundColor: "#F4F8FA" }} className="w-full h-full">
            <div className="w-full h-full flex flex-col items-center pt-[128px]">
                <h1 className="brandColor pb-[24px]">
                    Let's plan your <span className="font-bold">loan.</span>
                </h1>
                {products.length > 0 && (
                    <Card
                        products={products}
                        loan={loan}
                        chnagesHandler={chnagesHandler}
                        DecrimentHandler={DecrimentHandler}
                        IncrimentHandler={IncrimentHandler}
                        IdHandler={IdHandler}
                        subsHnadler={subsHnadler}
                    />
                )}
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
