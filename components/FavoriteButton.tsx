import Link from "next/link";
import { Heart } from "lucide-react";
const FavoriteButton = () => {
  return (
    <Link href="/#" className="group relative">
        <Heart  className="w-5 h-5 hover:text-shop_light_green hoverEffect"/>
        <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-shop_light_green text-[10px] text-white">0</span>
    </Link>
  )
}

export default FavoriteButton