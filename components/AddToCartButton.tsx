"use client";
import { AddToCartProps } from "@/interface/Index";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import useStore from "@/store";
import toast from "react-hot-toast";
import PriceFormatter from "./PriceFormatter";
import QuantityButtons from "./QuantityButtons";

const AddToCartButton = ({ product, className }: AddToCartProps) => {
  const isOutofStock = product?.stock === 0;
  const { addItem, getItemCount } = useStore();
  const itemCount = getItemCount(product._id);

  // Handle adding item to cart
  const handleAddToCart = () => {
    if ((product?.stock as number) > itemCount) {
      addItem(product);
      toast.success(`${product.name?.substring(0, 12)}... added successfully!`);
    } else {
      toast.error("Item is out of stock");
    }
  };

  return (
    <div>
      {itemCount ? (
      <div className="text-sm w-full">
        <div>
          <span className="text-xs text-darkColor/80">Quantity</span>
          <QuantityButtons product={product}/>
        </div>
        <div className="flex items-center justify-between border-t pt-1">
          <span className="text-xs font-semibold">Subtotal</span>
          <PriceFormatter amount={product?.price ? product?.price * itemCount : 0}/>
        </div>
      </div>
      ) : (
        <Button
          onClick={handleAddToCart}
          disabled={isOutofStock}
          className={cn(
            "w-full bg-shop_dark_green/80 text-lightBg shadow-none border border-shop_dark_green/80 font-semibold tracking-wide text-white hover:bg-shop_dark_green hover:border-shop_dark_green hoverEffect",
            className
          )}>
          <ShoppingBag /> {isOutofStock ? "Out of Stock" : "Add to Cart"}
        </Button>
      )}
    </div>
  );
};

export default AddToCartButton;
