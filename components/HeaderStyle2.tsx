import "@/styles/header.css";
import Logo from "./Logo";
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
            <Logo 
              src="/icons/arrow-logo.svg"
              width={75}
              height={35}
              url="/"
              cls="header-logo"
              alt="Arrow Marketplace logo"
              ariaLabel="Arrow Marketplace logo"
              loading="eager"
            />

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