import { PricingProps } from "@/types/pricing";

export const PricingTableData: PricingProps[] = [
  {
    title: "Basic",
    description: "Essential support for your digital presence",
    price: "$29.00",
    period: "/Monthly",
    features: [
      "Community Support",
      "Email Support (48h response)",
      "Bug Fixes & Updates",
      "Monthly Performance Report",
      "Security Monitoring",
    ],
    link: "/contact-us",
  },
  {
    title: "Standard",
    description: "Enhanced support with priority assistance",
    price: "$69.00",
    period: "/Monthly",
    features: [
      "Priority Support (24h response)",
      "Dedicated Tech Expert",
      "Weekly Backups",
      "Content Updates",
      "24/7 System Monitoring",
    ],
    link: "/contact-us",
    active: true,
  },
  {
    title: "Premium",
    description: "Complete support solution with dedicated team",
    price: "$119.00",
    period: "/Monthly",
    features: [
      "VIP Support (4h response)",
      "Dedicated Development Team",
      "Daily Backups & Updates",
      "Custom Feature Development",
      "24/7 Priority Monitoring",
    ],
    link: "/contact-us",
  },
];
