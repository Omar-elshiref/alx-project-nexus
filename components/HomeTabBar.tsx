import { productType } from "@/constant/data"
import Link from "next/link"

interface HomeTabBarProps {
  selectedTab: string;
  onTapSelected: (tab: string) => void;
}

const HomeTabBar = ({selectedTab, onTapSelected}: HomeTabBarProps) => {
  return (
    <div className="flex justify-between items-center flex-wrap gap-5">
        <div className="flex items-center gap-3 text-sm font-semibold">
            {productType.map((item)=>(
                <button onClick={() => onTapSelected(item?.title)} key={item?.title} className={`border border-shop_light_green/20 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect ${selectedTab === item?.title ? "bg-shop_light_green text-white border-shop_light_green" : "bg-shop_light_green/20 border-shop_light_green" }`}>{item?.title}</button>
            ))}
        </div>
        <Link href={"../app/(client)/shop/page.tsx"} className={`border border-shop_light_green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect`}>see all</Link>
    </div>
  )
}

export default HomeTabBar