import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

const AddToWishListButton = ({product, className} : {product: Product, className?: string}) => {
  return (
    <div className={cn("absolute top-2 right-2 z-10", className)}>
        <button className="p-2 rounded-full hover:bg-shop_btn_dark_green hover:text-white bg-deal-bg hoverEffect">
            <Heart size={15} />
        </button>
    </div>
  )
}

export default AddToWishListButton