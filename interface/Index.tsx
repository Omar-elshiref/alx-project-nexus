import { ElementType } from "react";
import { Product } from "@/sanity.types";


export interface LinksData {
  title: string;
  href: string;
}

export interface socialLinkData {
    title: string;
    href: string;
    icon:  ElementType;
    iconProps?: React.HTMLAttributes<SVGElement>;

}

export interface ContactItemData {
  title: string;
  subtitle: string;
  icon:  ElementType;
  iconProps?: React.HTMLAttributes<SVGElement>;
}

export interface ProductType {
  title: string;
  value: string;
}

export interface PriceProps {
  price: number | undefined;
  discount?: number | undefined;
  className?: string;
}

export interface PriceFormatterProps {
  amount: number | undefined;
  className?: string;
}

export interface AddToCartProps {
  product: Product;
  className?: string;
}

export interface extraDataBrandProps {
  title: string;
  description: string;
  icon: ElementType;
  iconProps?: React.HTMLAttributes<SVGElement>;
}
