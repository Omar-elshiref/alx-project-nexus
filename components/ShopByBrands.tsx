import React from "react";
import Title from "./Title";
import Link from "next/link";
import { getAllBrands } from "@/sanity/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { extraDataBrand } from "@/constant/data";

interface BrandSlug {
    current: string;
}

interface Brand {
    _id: string;
    slug: BrandSlug;
    image?: {
        asset: {
            _ref: string;
            _type: string;
        };
        [key: string]: unknown;
    };
}

const ShopByBrands = async () => {
  const brands = await getAllBrands();
  return (
    <div className="mb-10 lg:mb-20 bg-shop_light_bg p-5 lg:p-7 rounded-md">
      <div className="flex items-center gap-5 justify-between mb-10">
        <Title>Shop By Brands</Title>
        <Link
          href={"/shop"}
          className="text-sm font-semibold tracking-wide hover:text-shop_btn_dark_green hoverEffect"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2.5">
        {brands?.map((brand: Brand) => (
            <Link
                key={brand?._id}
                href={{ pathname: "/shop", query: { brand: brand?.slug?.current } }}
                className="bg-white w-34 h-24 flex items-center justify-center rounded-md overflow-hidden hover:shadow-lg shadow-shop_dark_green/20 hoverEffect"
            >
                {brand?.image && (
                    <Image
                        src={urlFor(brand?.image).url()}
                        alt="brandImage"
                        width={250}
                        height={250}
                        className="w-32 h-20 object-contain"
                    />
                )}
            </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 p-2 shadow-sm hover:shadow-shop_light_green/20 py-5">
        {extraDataBrand?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 group text-lightColor hover:text-shop_light_green"
          >
            <span className="inline-flex scale-100 group-hover:scale-90 hoverEffect">
              {item?.icon && <item.icon className="w-10 h-10" />}
            </span>
            <div className="text-sm">
              <p className="text-darkColor/80 font-bold capitalize">
                {item?.title}
              </p>
              <p className="text-lightColor">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByBrands;