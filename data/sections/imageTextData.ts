import { SectionProps } from "@/types/sectionProps";
import Image1 from '@/public/img/about1.webp';

export const ImageTextData: SectionProps = {
    wrapperCls: "mt-100 mb-100",
    container: "container",
    subheading: "Our Company",
    heading: "Transforming Ideas Into Digital Reality",
    text: "Arrow Marketplace empowers businesses of all sizes to thrive in the digital age. We specialize in creating powerful web solutions, mobile applications, eCommerce platforms, and comprehensive digital marketing strategies.",
    button: {
        label: "Get Started",
        href: "/contact-us",
        type: "primary"
    },
    image: {
        src: Image1.src,
        width: 992,
        height: 863,
        alt: 'Image',
        loading: 'lazy'
    },
    textList: [
        {
            text: "Custom web and mobile development"
        },
        {
            text: "Scalable eCommerce solutions"
        },
        {
            text: "Data-driven SEO and digital marketing"
        }
    ]
}
