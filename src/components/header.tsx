"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PrimaryIcon, AccountIcon } from "@/components/iconsButtons";
import Link from "next/link";
import { AccountMenu, LocationLanguageMenu } from "@/components/modals";

/**
 * Header component for the application.
 * This component includes navigation links, account menu, and location/language switcher.
 * It also handles the display and toggle logic for account and location/language menus.
 */
export default function Header() {
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showLocationLanguageMenu, setShowLocationLanguageMenu] = useState(false);
    const pathname = usePathname();
    const router = useRouter()

    /**
     * Toggles the visibility of the account menu.
     */
    const toggleAccountMenu = () => {
        setShowAccountMenu(!showAccountMenu);
    };

    /**
     * Toggles the visibility of the location/language menu.
     */
    const toggleLocationLanguageMenu = () => {
        setShowLocationLanguageMenu(!showLocationLanguageMenu);
    };

    /**
     * Effect hook that closes the account menu whenever the pathname changes.
     */
    useEffect(() => {
        setShowAccountMenu(false);
    }, [pathname]);
    return (
        <header className="w-screen h-24 bg-light-galaxus-page-background shadow-md flex flex-row px-12 lg:px-24 xl:px-48 2xl:px-80 fixed top-0">
            {showAccountMenu && <AccountMenu closeMenu={toggleAccountMenu} />}
            {showLocationLanguageMenu && <LocationLanguageMenu closeMenu={toggleLocationLanguageMenu} />}
            <Link className="flex flex-row gap-2 items-center basis-1/4" href="/">
                <img src="/images/logos/digitec.svg" alt="Digitec Logo" className="h-7" />
                <div className="h-8 w-px bg-light-grays-000000"></div>
                <img src="/images/logos/galaxus.svg" alt="Galaxus Logo" className="h-7" />
                <h1 className="font-['europa'] font-bold text-xl py-1">Target Stock</h1>
            </Link>
            <ul className="flex flex-row gap-8 basis-2/4 justify-center">
                {HeaderElement("Dashboard", "/target-stock/dashboard")}
                {HeaderElement("New stock", "/target-stock/new-stock")}
                {HeaderElement("Current stock", "/target-stock/current-stock")}
            </ul>
            <div className="flex items-center gap-4 basis-1/4 justify-end">
                <PrimaryIcon icon="GlobeIcon" disabled={false} clickHandler={toggleLocationLanguageMenu} tooltipText="Location Language Switcher " />
                <PrimaryIcon icon="CogwheelIcon" disabled={false} clickHandler={() => router.push('/settings')} tooltipText="General Settings" />
                <AccountIcon clickHandler={toggleAccountMenu} tooltipText="Account" icon="none" disabled={false} />
            </div>
        </header>
    );
}

/**
 * HeaderElement component creates a navigation link with a text label.
 * It also applies styles based on the current pathname.
 *
 * @param {string} text - The text to display for the link.
 * @param {string} link - The URL path for the link.
 * @returns {JSX.Element} The navigation link element.
 */
function HeaderElement(text: string, link: string) {
    const currentLocation = usePathname();
    return (
        <li className={"h-full border-b-4 text-sm text-light-galaxus-body-copy-primary hover:border-light-galaxus-blue-small-elements " + (currentLocation.includes(link) ? "border-light-galaxus-blue-small-elements" : "border-light-galaxus-page-background")}><Link href={link} className="h-full flex items-center">{text}</Link></li>
    );
}
