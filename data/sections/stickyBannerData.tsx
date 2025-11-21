import { SectionProps } from "@/types/sectionProps";
import Image1 from "@/public/img/customapps.webp";
import Image2 from "@/public/img/onlinestores.webp";
import Image3 from "@/public/img/seo.webp";

export const StickyBannerData: SectionProps = {
    wrapperCls: "mt-100",
    container: "container",
    heading: "Comprehensive Digital Solutions for Modern Businesses",
    text: "From concept to launch, we deliver end-to-end digital solutions that transform your business. Expert development in web, mobile, eCommerce, and digital marketing.",
    blockList: [
        {
            subheading: "Web & Mobile Development",
            heading: "Custom Apps That Drive Engagement",
            text: "Build powerful, user-friendly applications with React Native, Flutter, and Next.js that work seamlessly across all devices and platforms.",    
            button: {
                label: "Learn More",
                href: "/services",
                type: "primary"
            },
            image: {
                src: Image1.src,
                width: 1000,
                height: 707,
                loading: "lazy",
                alt: "Web and Mobile Development",
            },
        },
        {
            subheading: "eCommerce Solutions",
            heading: "Online Stores That Convert",
            text: "Launch and scale your online business with Shopify, WooCommerce, and WordPress solutions designed to maximize sales and customer satisfaction.",    
            button: {
                label: "Learn More",
                href: "/services",
                type: "primary"
            },
            image: {
                src: Image2.src,
                width: 1000,
                height: 707,
                loading: "lazy",
                alt: "eCommerce Solutions",
            },
        },
        {
            subheading: "SEO & Digital Marketing",
            heading: "Get Found, Get Customers",
            text: "Dominate search rankings and drive targeted traffic with our proven SEO strategies, content marketing, and digital advertising campaigns.",    
            button: {
                label: "Learn More",
                href: "/services",
                type: "primary"
            },
            image: {
                src: Image3.src,
                width: 1000,
                height: 707,
                loading: "lazy",
                alt: "SEO and Digital Marketing",
            },
        }
    ]
}
