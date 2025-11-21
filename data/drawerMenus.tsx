import Icons from "../components/Icons";

export const MenuService = {
    title: "Our Services",
    menus: [
        {
            title: "Web Development",
            path: "/services"
        },
        {
            title: "Mobile Apps",
            path: "/services"
        },
        {
            title: "eCommerce Solutions",
            path: "/services"
        },
        {
            title: "SEO & Digital Marketing",
            path: "/services"
        }
    ]
}

export const MenuContact = {
    title: "Quick Contact",
    menus: [
        {
            title: "Toronto, Ontario, Canada",
            path: null,
            icon: <Icons.Location />
        },
        {
            title: "+1 (289) 991-2009",
            path: "tel:+12899912009",
            icon: <Icons.Phone />
        },
        {
            title: "info@arrowmarketplace.com",
            path: "mailto:info@arrowmarketplace.com",
            icon: <Icons.Envelope />
        }
    ]
}
