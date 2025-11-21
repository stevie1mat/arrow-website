import "@/styles/header.css";
import Link from "next/link";
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
          <Link href="/" className="header-logo" aria-label="Arrow Marketplace logo">
            <h2 className="text-28 fw-700" style={{ color: '#2a3015', margin: 0, marginLeft: '30px' }}>
              ARROW<span style={{ color: '#636B2F' }}>.</span>
            </h2>
          </Link>
          
          {/* Nav Bar */}
          <NavBar />

          {/* Header Actions */}
          <HeaderActions />
        </div>
      </StickyHeader>
    )
}

export default Header;