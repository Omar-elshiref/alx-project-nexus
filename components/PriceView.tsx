import { PriceProps } from "@/interface/Index";
import PriceFormatter from "./PriceFormatter";
const PriceView = ( {price, discount}: PriceProps) => {
  return (
   
        <div className="flex items-center gap-2">
           <PriceFormatter amount={price} className="text-shop_dark_green" />
            {price && discount && (
                <PriceFormatter amount={price + (discount * price) / 100} 
                className="line-through text-shop_light_text font-normal"
                />
                )}
        </div>
    
  )
}

export default PriceView