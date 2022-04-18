import React from "react"
import { Products } from "src/global"
const ProductsComponent: React.FC<Array<Products>> = ({ products, IdHandler }) => {
    return (
        <div className="flex items-center justify-center py-2 md:py-4">
            {products.map(({ image, id }) => (
                <img src={image} key={id} className="h-12 w-12" onClick={() => IdHandler(id)} />
            ))}
        </div>
    )
}

export default ProductsComponent
