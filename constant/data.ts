import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactItemData, socialLinkData, LinksData, ProductType, extraDataBrandProps } from "@/interface/Index";
import { GitCompareArrows, Headset, ShieldCheck, Truck } from "lucide-react";


export const headerData: LinksData[] = [
    { title: "Home", href: "/" },
    { title: "Shop", href: "/shop" },
    { title: "Blog Us", href: "/blog" },
    { title: "Contact", href: "/contact" },
    { title: "Hot Deal", href: "/deal" },
]

export const quickLinksData: LinksData[] = [
  { title: "About us", href: "/about" },
  { title: "Contact us", href: "/contact" },
  { title: "Terms & Conditions", href: "/terms" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "FAQs", href: "/faqs" },
  { title: "Help", href: "/help" },
];
export const categoriesData: LinksData[] = [
  { title: "Mobiles", href: "mobiles" },
  { title: "Appliances", href: "appliances" },
  { title: "Smartphones", href: "smartphones" },
  { title: "Air Conditioners", href: "air-conditioners" },
  { title: "Washing Machine", href: "washing-machine" },
  { title: "Kitchen Appliances", href: "kitchen-appliances" },
  { title: "gadget accessories", href: "gadget-accessories" },
];

export const productType: ProductType[] = [
  { title: "Gadget", value: "gadget" },
  { title: "Appliances", value: "appliances" },
  { title: "Refrigerators", value: "refrigerators" },
  { title: "Others", value: "others" },
];

export const socialLink : socialLinkData[] = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/@reactjsBD",
    icon: Youtube,
    iconProps: { className: "w-5 h-5" },
  },
  {
    title: "Github",
    href: "https://www.youtube.com/@reactjsBD",
    icon: Github,
    iconProps: { className: "w-5 h-5" },
  },
  {
    title: "Linkedin",
    href: "https://www.youtube.com/@reactjsBD",
    icon: Linkedin,
    iconProps: { className: "w-5 h-5" },
  },
  {
    title: "Facebook",
    href: "https://www.youtube.com/@reactjsBD",
    icon: Facebook,
    iconProps: {},
  },
  {
    title: "Slack",
    href: "https://www.youtube.com/@reactjsBD",
    icon: Slack,
    iconProps: { className: "w-5 h-5" },
  },
];

export const dataTopFooter: ContactItemData[] = [
  {
    title: "Visit Us",
    subtitle: "New Orlean, USA",
    icon: MapPin, 
    iconProps: { className:"h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" },
  },
  {
    title: "Call Us",
    subtitle: "+12 958 648 597",
    icon: Phone,
    iconProps: { className:"h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" },
    
  },
  {
    title: "Working Hours",
    subtitle: "Mon - Sat: 10:00 AM - 7:00 PM",
    icon: Clock,
    iconProps: {className:"h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" },
    
  },
  {
    title: "Email Us",
    subtitle: "Shopcart@gmail.com",
    icon: Mail,
    iconProps: {className:"h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" },

  },
];

export const extraDataBrand : extraDataBrandProps[] = [
  {
    title: "Free Delivery",
    description: "Free shipping over $100",
    icon: Truck,
    iconProps: { className: "w-11 h-11" },
  },
  {
    title: "Free Return",
    description: "Free shipping over $100",
    icon: GitCompareArrows,
    iconProps: { className: "w-11 h-11" },
  },
  {
    title: "Customer Support",
    description: "Friendly 27/7 customer support",
    icon: Headset,
    iconProps: { className: "w-11 h-11" },
  },
  {
    title: "Money Back guarantee",
    description: "Quality checked by our team",
    icon: ShieldCheck,
    iconProps: { className: "w-15 h-15" },
  },
];