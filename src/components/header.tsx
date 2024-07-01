"use client";
import { usePathname } from "next/navigation";
import { PrimaryIcon } from "@/components/iconsButtons";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-screen bg-light-galaxus-page-background shadow-md flex flex-row justify-between px-9 2xl:px-72">
            <Link className="flex flex-row gap-2 items-center py-5" href="/">
                <img src="/images/logos/digitec.svg" alt="Digitec Logo" className="h-7" />
                <div className="h-8 w-px bg-light-grays-000000"></div>
                <img src="/images/logos/galaxus.svg" alt="Galaxus Logo" className="h-7" />
                <h1 className="font-bold text-xl py-1">Target Stock</h1>
            </Link>
            <ul className="flex flex-row gap-8">
                {HeaderElement("Dashboard", "/target-stock/dashboard")}
                {HeaderElement("New stock", "/target-stock/new-stock")}
                {HeaderElement("Current stock", "/target-stock/current-stock")}
            </ul>
            <div className="flex items-center gap-4">
                <PrimaryIcon icon="GlobeIcon" disabled={false}/>
                <PrimaryIcon icon="CogwheelIcon" disabled={false}/>
            </div>
        </header>
    );
}

function HeaderElement(text: string, link: string){
    const currentLocation = usePathname();
    return (
        <li className={"h-full border-b-4 text-sm text-light-galaxus-body-copy-primary hover:border-light-galaxus-blue-small-elements " + (currentLocation == link ? "border-light-galaxus-blue-small-elements" : "border-light-galaxus-page-background")}><Link href={link} className="h-full flex items-center">{text}</Link></li>
    );
}
