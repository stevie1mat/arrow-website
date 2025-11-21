import { SectionProps } from "@/types/sectionProps";
import BgImage from '@/public/img/contact-us.jpg';

export const TextBannerData: SectionProps = {
    wrapperCls: "text-banner-spaced",
    container: "container-fluid",
    backgroundImage: {
        src: BgImage.src,
        width: 1920,
        height: 600,
        alt: 'Background image',
        loading: 'lazy'
    },
    subheading: "Digital Excellence",
    heading: "Building innovative solutions that drive your business forward.",
    text: "From web development to mobile apps, eCommerce platforms to SEO strategies—we deliver comprehensive digital solutions tailored to your unique needs. Let us transform your vision into reality with cutting-edge technology and expert execution.",
    button: {
        label: "Get Started",
        href: "/contact-us",
        type: "secondary"
    }
}
