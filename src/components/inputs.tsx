"use client";
import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@/components/iconsSVG";

interface DropdownProps {
    options: string[];
    label: string;
    onSelect: (option: string) => void;
}

/**
 * Dropdown component renders a dropdown menu with selectable options.
 * @param {DropdownProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered Dropdown component.
 */
export function Dropdown({ options, label, onSelect }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(localStorage.getItem(label) || options[0]);

    /**
     * Toggles the visibility of the dropdown menu.
     */
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    /**
     * Handles the selection of an option.
     * @param {string} option - The selected option.
     */
    const handleOptionClick = (option: string): void => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option);
    };
    return (
        <div className="w-48 flex flex-col gap-1">
            <p className="text-light-galaxus-body-copy-secondary">{label}</p>
            <div>
                <button type="button" onClick={toggleDropdown} className={"w-full h-10 flex flex-row justify-between items-center border px-3 " + (isOpen ? "border-light-grays-565656" : "border-light-grays-B3B3B3")}>{selectedOption}{isOpen ? <ChevronUpIcon colorVar="light-transp-black-87" /> : <ChevronDownIcon colorVar="light-transp-black-87" />}</button>
                {isOpen && <ul className="absolute bg-light-galaxus-page-background w-48 border border-light-grays-B3B3B3">
                    {options.map((option) => (
                        <li key={options.indexOf(option)} onClick={() => handleOptionClick(option)} className={"h-10 flex items-center cursor-pointer text-light-galaxus-body-copy-secondary px-3 hover:bg-light-grays-F5F5F5 " + (selectedOption === option ? "font-semibold" : "font-normal")}>{option}</li>
                    ))}
                </ul>
                }
            </div>
        </div>
    );
}
