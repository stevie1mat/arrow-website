import "@/styles/header.css";
import Link from "next/link";
import NavBar from "./menus/NavBar";
import HeaderActions2 from "./HeaderActions2";
import AdditionalDrawer from "./AdditionalDrawer";
import StickyHeader from "./StickyHeader";

const Header2 = () => {
    return (
      <>
        <StickyHeader 
          wrapperCls="header-2 header-floating"
          container="container-fluid"
          stickyType= 'always'
        >
          <div className="header-grid">
            {/* Logo */}
            <Link href="/" className="header-logo" aria-label="Arrow Marketplace logo">
              <h2 className="text-28 fw-700" style={{ color: '#1a1a1a', margin: 0, marginLeft: '30px' }}>
                ARROW<span style={{ color: '#636B2F' }}>.</span>
              </h2>
            </Link>

            {/* Nav Bar */}
            <NavBar />

            {/* Header Actions */}
            <HeaderActions2 />
          </div>
        </StickyHeader>

        {/* Additional Drawer */}
        <AdditionalDrawer />
      </>
    )
}

export default Header2;