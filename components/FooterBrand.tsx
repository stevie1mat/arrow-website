import Link from "next/link";
import Social from "./Social";

const FooterBrand = () => {
    return (
        <div
            className="footer-widget footer-widget-brand"
            data-aos="fade-up"
            data-aos-anchor=".footer-top"
        >
            <Link href="/" className="footer-logo" aria-label="Arrow Marketplace logo">
                <h2 className="text-32 fw-700" style={{ color: 'white', margin: 0 }}>ARROW</h2>
            </Link>
            <p className="text text-16">
                Transforming businesses through cutting-edge web development, mobile apps, eCommerce platforms, and digital marketing solutions. Let's bring your vision to life.
            </p>
            <Social 
                wrapperCls="social-icons"
                aos="fade-up"
                aosAnchor=".footer-top"
            />
        </div>
    )
}

export default FooterBrand;