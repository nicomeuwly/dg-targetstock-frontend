"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PrimaryIcon, AccountIcon } from "@/components/iconsButtons";
import Link from "next/link";
import { AccountMenu, LocationLanguageMenu } from "@/components/modals";

export default function Header() {
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showLocationLanguageMenu, setShowLocationLanguageMenu] = useState(false);
    const pathname = usePathname();
    const router = useRouter()

    const toggleAccountMenu = () => {
        setShowAccountMenu(!showAccountMenu);
    };

    const toggleLocationLanguageMenu = () => {
        setShowLocationLanguageMenu(!showLocationLanguageMenu);
    };

    useEffect(() => {
        setShowAccountMenu(false);
    }, [pathname]);
    return (
        <header className="w-screen h-24 bg-light-galaxus-page-background shadow-md flex flex-row justify-between px-12 lg:px-24 xl:px-48 2xl:px-96">
            {showAccountMenu && <AccountMenu closeMenu={toggleAccountMenu} />}
            {showLocationLanguageMenu && <LocationLanguageMenu closeMenu={toggleLocationLanguageMenu} />}
            <Link className="flex flex-row gap-2 items-center" href="/">
                <img src="/images/logos/digitec.svg" alt="Digitec Logo" className="h-7" />
                <div className="h-8 w-px bg-light-grays-000000"></div>
                <img src="/images/logos/galaxus.svg" alt="Galaxus Logo" className="h-7" />
                <h1 className="font-['europa'] font-bold text-xl py-1">Target Stock</h1>
            </Link>
            <ul className="flex flex-row gap-8">
                {HeaderElement("Dashboard", "/target-stock/dashboard")}
                {HeaderElement("New stock", "/target-stock/new-stock")}
                {HeaderElement("Current stock", "/target-stock/current-stock")}
            </ul>
            <div className="flex items-center gap-4">
                <PrimaryIcon icon="GlobeIcon" disabled={false} clickHandler={toggleLocationLanguageMenu} />
                <PrimaryIcon icon="CogwheelIcon" disabled={false} clickHandler={() => router.push('/settings')} />
                <AccountIcon onClick={toggleAccountMenu} />
            </div>
        </header>
    );
}

function HeaderElement(text: string, link: string) {
    const currentLocation = usePathname();
    return (
        <li className={"h-full border-b-4 text-sm text-light-galaxus-body-copy-primary hover:border-light-galaxus-blue-small-elements " + (currentLocation == link ? "border-light-galaxus-blue-small-elements" : "border-light-galaxus-page-background")}><Link href={link} className="h-full flex items-center">{text}</Link></li>
    );
}
