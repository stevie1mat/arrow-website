import { SectionProps } from "@/types/sectionProps";
import WhyChooseUsBg from "@/public/img/banner/image.jpg";
import WhyChooseUsImage from "@/public/img/about2.webp";
import WhyChooseUsImageMobile from "@/public/img/about2.webp";
import PromoImage from "@/public/img/about3.webp";
import Icons from "@/components/Icons";

export const WhyChooseUsGridBgData: SectionProps = {
    wrapperCls: "!bg-transparent mt-100 section-padding",
    container: "container",
    backgroundImage: {
        src: WhyChooseUsBg.src,
        width: 1920,
        height: 887,
        loading: "lazy",
        alt: "Background image"
    },
    image: {
        src: WhyChooseUsImage.src,
        srcMobile: WhyChooseUsImageMobile.src,
        width: 1000,
        height: 742,
        loading: "lazy",
        alt: "Choose us image"
    },
    subheading: "Why Choose Us",
    heading: "Your Trusted Partner in Digital Innovation",
    text: "We deliver cutting-edge digital solutions backed by years of expertise in web development, mobile apps, eCommerce, and SEO. Our client-focused approach ensures your success every step of the way.",
    button: {
        label: "Start Your Project",
        href: "/contact-us",
        type: "primary"
    },
    rotatingLogo: {
        logo: <Icons.ChooseRotatingLogo />,
        text: "5+",
    },
    promotions: [
        {
            icon: <Icons.Mission />,
            title: "Our Mission",
            text: "To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and deliver measurable results.",
        },
        {
            icon: <Icons.Vision />,
            title: "Our Vision",
            text: "To be the leading digital solutions provider, recognized for excellence in web development, mobile apps, and digital marketing.",
        },
        {
            icon: <Icons.Awards />,
            title: "Our Expertise",
            text: "5+ years delivering successful projects in React, Next.js, React Native, Shopify, SEO, and comprehensive digital marketing.",
        },
    ],
    promoImage: {
        src: PromoImage.src,
        width: 800,
        height: 834,
        loading: "lazy",
        alt: "Choose us image"
    },
}