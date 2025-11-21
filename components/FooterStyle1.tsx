import FooterContact from "./FooterContact";
import FooterContactImage from "@/public/img/contact-us.jpg";
import FooterContactBgImage from "@/public/img/banner/image.jpg";
import FooterBgImage from "@/public/img/footer/footer-bg-large.jpg";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

interface FooterProps {
    container: string;
}

const FooterStyle1 = ({ container }: FooterProps) => {
    return (
        <>
            <FooterContact 
                container={container}
                bgImage={FooterContactBgImage.src}
                imageUrl={FooterContactImage.src}
                width={1290}
                height={1400}
                alt="Contact image"
                aosAnchor=".contact-box"
                subheading="Let's Connect"
                heading="Get Your Free Digital Solutions Consultation"
                text="Ready to transform your business with a stunning website, mobile app, or eCommerce platform? Let's discuss your project and bring your digital vision to life."
            />

            <div
                className="footer-main bg-contain"
                style={{ backgroundImage: `url(${FooterBgImage})` }}
            >
                <FooterTop container={container} />
                <FooterBottom container={container} />
            </div></>
    )
}

export default FooterStyle1;