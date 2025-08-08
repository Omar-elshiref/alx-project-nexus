"use client";
import { AddToCartProps } from "@/interface/Index";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";



const AddToCartButton = ({product, className} : AddToCartProps) => {
    const isOutofStock = product?.stock === 0;
    const handleAddToCart = () => {
        window.alert("Product added to cart!");
    }

    return (
    <div>
        <Button
        onClick={handleAddToCart}
        disabled={isOutofStock}
        className={cn(
            "w-full bg-shop_dark_green/80 text-lightBg shadow-none border border-shop_dark_green/80 font-semibold tracking-wide text-white hover:bg-shop_dark_green hover:border-shop_dark_green hoverEffect",
            className
          )}>
            <ShoppingBag /> {isOutofStock ? "Out of Stock" : "Add to Cart"}
        </Button>
    </div>
  )
}

export default AddToCartButton