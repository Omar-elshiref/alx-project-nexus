import Image from "next/image"
import { Title } from "./ui/text"
import Link from "next/link"
import { banner_1 } from "@/images"
const HomeBanner = () => {
  return (
    <div className="py-16 md:py-0 bg-shop_light_pink rounded-lg px-10 lg:px-24 flex items-center justify-between">
        <div className="space-y-5">
            <Title className="mb-5">
                Grab Upto 50% Off on <br />
                Your First Order
            </Title>
            <Link href={"/products"} className="bg-shop_dark_green/90 text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:bg-shop_dark_green hover:text-white hoverEffect">
                Buy Now
            </Link>
        </div>
        <div>
            <Image src={banner_1} alt="banner_1" className="hidden md:inline-flex w-96" />
        </div>
    </div>
  )
}

export default HomeBanner