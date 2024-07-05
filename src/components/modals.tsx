"use client";
import { PrimaryIcon } from "./iconsButtons";
import Link from "next/link";
import { LockIcon, ClockIcon } from "./iconsSVG";
import { useState } from "react";
import { Dropdown } from "@/components/inputs";
import { PrimaryButton } from "@/components/buttons";

export function AccountMenu({ closeMenu }: { closeMenu: () => void }) {
    return (
        <div className="absolute top-24 right-12 lg:right-24 xl:right-48 2xl:right-80 bg-light-grays-F5F5F5 w-fit p-6 flex flex-col gap-6">
            <div className="flex flex-row items-center justify-between">
                <h3 className="font-semibold text-lg">Hello John</h3>
                <PrimaryIcon icon="CloseIcon" disabled={false} clickHandler={closeMenu} />
            </div>
            <div className="flex flex-col gap-2">
                <MenuLink url="/account/app-access" text="Manage app access" icon="lock" closeMenu={closeMenu} />
                <MenuLink url="/account/changes-history" text="History of changes" icon="clock" closeMenu={closeMenu} />
            </div>
            <MenuLink url="/" text="Log out" closeMenu={closeMenu} />
        </div>
    );
}

interface MenuLinkProps {
    url: string;
    text: string;
    icon?: string;
    closeMenu: () => void;
}

function MenuLink({ url, text, icon, closeMenu }: MenuLinkProps) {
    const [colorVar, setColorVar] = useState("light-galaxus-body-copy-primary");
    const linkIcon = icon && icon === "lock" ? <LockIcon colorVar={colorVar} /> : icon && icon === "clock" ? <ClockIcon colorVar={colorVar} /> : null;
    return (
        <Link onClick={closeMenu} href={url} className="flex flex-row items-center gap-2 text-light-galaxus-body-copy-primary hover:text-light-galaxus-body-copy-secondary" onMouseEnter={() => setColorVar("light-galaxus-body-copy-secondary")} onMouseLeave={() => setColorVar("light-galaxus-body-copy-primary")}>{linkIcon}{text}</Link>
    );
}

export function LocationLanguageMenu({ closeMenu }: { closeMenu: () => void }) {
    const location: string[] = ["Basel", "Bern", "Dietikon", "Geneva", "Kriens", "Lausanne", "St Gallen", "Winterthur", "Wohlen", "Zurich"];
    const language = ["Deutsch", "English", "Français", "Italiano"];
    const [locationSelected, setLocationSelected] = useState(localStorage.getItem("Location") || "Basel");
    const [languageSelected, setLanguageSelected] = useState(localStorage.getItem("Language") || "Deutsch");

    const saveSettings = () => {
        localStorage.setItem("Location", locationSelected);
        localStorage.setItem("Language", languageSelected);
        closeMenu();
        window.location.reload();
    }
    return (
        <div className="flex flex-col gap-6 absolute top-20 right-12 lg:right-24 xl:right-48 2xl:right-80 z-20 w-fit h-fit bg-light-galaxus-page-background shadow-md p-6">
            <Dropdown options={location} label="Location" onSelect={(option: string) => setLocationSelected(option)}/>
            <Dropdown options={language} label="Language" onSelect={(option: string) => setLanguageSelected(option)}/>
            <PrimaryButton label="Next" disabled={false} onClick={saveSettings} />
        </div>
    );
}