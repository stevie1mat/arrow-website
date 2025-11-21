import { BannerSliderType } from "@/types/bannerSlider";
import { BannerSlides } from '@/data/sections/heroSliderData';
import BannerSliderImage from "@/public/img/banner/image.jpg";

export const BannerWithSliderData: BannerSliderType = {
    wrapperCls: "with-floating-header",
    backgroundImage: BannerSliderImage.src,
    subheading: "Digital Solutions Expert",
    heading: "Transform Your Vision Into Digital Reality",
    styledText: "Digital",
    text: "From stunning Websites and Mobile apps to powerful eCommerce platforms and SEO strategies - we build digital solutions that drive your business growth.",
    phone: "(307) 555-0133",
    button: {
        label: "Start Your Project",
        href: "/contact-us",
        type: "primary"
    },
    logoIconName: "LogoRotate",
    slides: BannerSlides,
    navigation: true,
}
