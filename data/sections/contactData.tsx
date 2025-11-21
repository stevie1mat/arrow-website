import { SectionProps } from "@/types/sectionProps";
import Icons from "@/components/Icons";
import ContactImage from "@/public/img/contactus.jpg";

export const ContactData: SectionProps = {
    wrapperCls: "section-padding",
    container: "container",
    subheading: "Contact Us",
    heading: "Let's Build Your Digital Solution Together",
    text: "Ready to transform your business with cutting-edge web development, mobile apps, eCommerce platforms, or digital marketing? Get in touch with Arrow Marketplace today and let's discuss how we can bring your vision to life.",
    imageList: [
        {
            src: ContactImage.src,
            width: 800,
            height: 600,
            alt: 'Contact Us',
            loading: 'lazy'
        }
    ],
    promotions: [
        {
            icon: <Icons.ThumbsUp />,
            title: "100+ Projects Delivered",
            text: "From custom websites and mobile apps to eCommerce platforms and comprehensive digital marketing campaigns",
        },
        {
            icon: <Icons.Support />,
            title: "Dedicated Support",
            text: "We're with you every step of the way, from initial consultation to post-launch support and ongoing optimization",
        },
    ],
    block: {
        heading: "Get Started Today",
        text: "Fill out the form below and we'll get back to you within 24 hours to discuss your project",
    },
}