import { cn } from "@/lib/utils"
import Link from "next/link"


const Logo = ({ className, spanDes }: { className?: string, spanDes?: string}) => {
  return (
    <Link href={"/"}>
        <h2 className={cn("text-2xl text-shop_dark_green font-black tracking-wider uppercase cursor-pointer hover:text-shop_light_green hoverEffect group font-sans", className)}>
            Shopcar<span className={cn("text-shop_light_green group-hover:text-shop_dark_green hoverEffect", spanDes)}>t</span>
        </h2>
    </Link>
  )
}

export default Logo