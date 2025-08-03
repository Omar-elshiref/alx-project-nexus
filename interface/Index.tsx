import { ElementType } from "react";

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

