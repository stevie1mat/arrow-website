import { SectionProps } from "@/types/sectionProps";
import Icons from "@/components/Icons";
import Section1Image from '@/public/img/section1.png';

export const ImageText2Data: SectionProps = {
    wrapperCls: "mt-100",
    container: "container",
    subheading: "About Arrow Marketplace",
    heading: "Building Digital Solutions That Scale",
    text: "We specialize in creating cutting-edge websites, mobile apps, and eCommerce platforms that help businesses succeed in the digital world.",
    textList: [
        {
            icon: <Icons.Ambition />,
            title: "Our Mission",
            text: "Deliver world-class digital solutions that transform businesses and drive measurable growth."
        },
        {
            icon: <Icons.Purpose />,
            title: "Our Expertise",
            text: "Web development, mobile apps, SEO, WordPress, Shopify, WooCommerce, React Native, Flutter & more."
        }
    ],
    button: {
        label: "Learn More",
        href: "/about-us",
        type: "primary"
    },
    imageList: [
        {
            src: Section1Image.src,
            width: 992,
            height: 863,
            alt: 'Image',
            loading: 'lazy'
        }
    ]
}
