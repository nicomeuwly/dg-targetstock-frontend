"use client";
import { useState, useEffect } from "react";
import { ChevronUpIcon, ChevronDownIcon, LightModeIcon, DarkModeIcon, SystemModeIcon } from "@/components/iconsSVG";
import Link from "next/link";

export default function Footer() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Light");
    const [location, setLocation] = useState("");

    const options = [{ name: "Light", description: "Always use light mode" }, { name: "Dark", description: "Always use dark mode" }, { name: "Automatic", description: "Use the settings from your device" }];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const saveTheme = (option: string) => {
        localStorage.setItem("Theme", option);
        setSelectedOption(option);
        setIsOpen(false);
    }

    useEffect(() => {
        const location = localStorage.getItem("Location") || "";
        const theme = localStorage.getItem("Theme") || "Light";
        setSelectedOption(theme);
        setLocation(location);
    }, []);
    return (
        <footer className="w-screen h-24 bg-light-grays-333333 flex flex-row justify-between py-7 px-12 lg:px-24 xl:px-48 2xl:px-80 text-sm relative bottom-0">
            <p className="text-light-grays-FFFFFF flex items-center gap-0.5">Current location :<Link href="/target-stock/current-stock" className="text-light-transp-white-70 hover:text-light-grays-FFFFFF">{location}</Link></p>
            <div className="w-48 flex flex-col absolute bottom-7 right-12 lg:right-24 xl:right-48 2xl:right-80">
                {isOpen && <ul className="bg-light-galaxus-page-background w-48 border border-light-grays-B3B3B3">
                    {options.map((option) => (
                        <li key={options.indexOf(option)} onClick={() => saveTheme(option.name)} className={"h-fit flex flex-col cursor-pointer text-light-galaxus-body-copy-primary px-3 py-2 hover:bg-light-grays-F5F5F5 " + (selectedOption === option.name ? "font-semibold" : "font-normal")}>{option.name}<span className="text-light-galaxus-body-copy-secondary font-normal">{option.description}</span></li>
                    ))}
                </ul>
                }
                <button onClick={toggleDropdown} className="w-full h-10 flex flex-row justify-between items-center border px-3 border-light-grays-B3B3B3 text-light-grays-FFFFFF"><div className="flex flex-row gap-2 items-center">{selectedOption === "Light" ? <LightModeIcon colorVar="light-grays-B3B3B3" /> : selectedOption === "Dark" ? <DarkModeIcon colorVar="light-grays-B3B3B3" /> : <SystemModeIcon colorVar="light-grays-B3B3B3" />}{selectedOption}</div>{isOpen ? <ChevronUpIcon colorVar="light-grays-B3B3B3" /> : <ChevronDownIcon colorVar="light-grays-B3B3B3" />}</button>
            </div>
        </footer>
    );
}