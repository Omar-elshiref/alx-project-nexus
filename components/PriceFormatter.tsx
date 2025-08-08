import { PriceFormatterProps } from "@/interface/Index";
import { cn } from "@/lib/utils";



const PriceFormatter = ({ amount, className }: PriceFormatterProps) => {
  const formattedPrice = new Number(amount).toLocaleString("en-US", {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 2,
  });
  return (
    <span
      className={cn("text-sm font-semibold text-darkColor", className)}
    >
      {formattedPrice}
    </span>
  );
};

export default PriceFormatter;