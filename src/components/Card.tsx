import React from "react"
import ProductsComponent from "./cardComponents/ProductsComponent"
import Inputs from "./cardComponents/Inputs"
import MonthlyAmount from "./cardComponents/MonthlyAmount"
import CTA from "./cardComponents/CTA"
import { Products } from "src/global"

const Card: React.FC<any> = ({
    products,
    loan,
    chnagesHandler,
    IncrimentHandler,
    DecrimentHandler,
    IdHandler,
    subsHnadler
}) => {
    return (
        <div className="w-[360px] h-[586px] shadow-lg rounded-md md:w-[560px] md:h-[511px] px-10 bg-white">
            <ProductsComponent products={products} IdHandler={IdHandler} />
            <Inputs
                loan={loan}
                chnagesHandler={chnagesHandler}
                IncrimentHandler={IncrimentHandler}
                DecrimentHandler={DecrimentHandler}
            />
            <MonthlyAmount loan={loan} products={products} />
            <CTA subsHnadler={subsHnadler} />
        </div>
    )
}

export default Card
