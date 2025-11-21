'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import HeaderStyle1 from '../HeaderStyle1';
import HeaderStyle2 from '../HeaderStyle2';

const Header = () => {
    const pathname = usePathname();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Default to HeaderStyle2 on server and until client hydrates
    const shouldUseStyle2 = pathname === '/home-2' || pathname === '/';

    return (
        <>        
            {shouldUseStyle2 ? <HeaderStyle2 /> : <HeaderStyle1 />}
        </>
    )
}

export default Header;