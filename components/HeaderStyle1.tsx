import "@/styles/header.css";
import Logo from "./Logo";
import NavBar from "./menus/NavBar";
import HeaderActions from "./HeaderActions";
import StickyHeader from "./StickyHeader";

const Header = () => {
    return (
      <StickyHeader 
        wrapperCls="header-1 header-floating"
        container="container-fluid"
        stickyType= 'always'
      >
        <div className="header-grid">
          {/* Logo */}
          <Logo                   
            src="/icons/arrow-logo-white.svg"
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
          <HeaderActions />
        </div>
      </StickyHeader>
    )
}

export default Header;