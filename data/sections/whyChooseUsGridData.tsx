import { SectionProps } from "@/types/sectionProps";
import WhyChooseUsImage from "@/public/img/section3.webp";
import WhyChooseUsImageMobile from "@/public/img/section3.webp";
import PromoImage from "@/public/img/why-choose-us/2.jpg";
import Icons from "@/components/Icons";

export const WhyChooseUsGridData: SectionProps = {
    wrapperCls: "mt-100 section-padding",
    container: "container",
    image: {
        src: WhyChooseUsImage.src,
        srcMobile: WhyChooseUsImageMobile.src,
        width: 1000,
        height: 742,
        loading: "lazy",
        alt: "Choose us image"
    },
    subheading: "Why Choose Arrow Marketplace",
    heading: "Empowering Businesses with Innovative Digital Solutions",
    text: "We deliver cutting-edge digital solutions that transform your vision into reality. From web and mobile development to eCommerce and SEO, we're your trusted partner for growth.",
    button: {
        label: "More About Us",
        href: "/about-us",
        type: "primary"
    },
    rotatingLogo: {
        logo: <Icons.ChooseRotatingLogo />,
        text: "15+",
    },
    promotions: [
        {
            icon: <Icons.Mission />,
            title: "Our Mission",
            text: "Empowering businesses with cutting-edge digital solutions that transform ideas into reality and accelerate online success.",
        },
        {
            icon: <Icons.Vision />,
            title: "Our Vision",
            text: "Building the future of digital commerce through innovative web and mobile solutions that connect businesses with their customers.",
        },
        {
            icon: <Icons.Awards />,
            title: "Our Expertise",
            text: "Masters of React Native, Flutter, Next.js, WordPress, Shopify, WooCommerce - delivering scalable solutions that perform.",
        },
    ],
    promoImage: {
        src: "/img/section3small.webp",
        width: 800,
        height: 834,
        loading: "lazy",
        alt: "Choose us image"
    },
}