"use client";
import icons from "@/components/iconsSVG";
import { on } from "events";
import { useState } from "react";

type IconProps = {
    icon: string;
    disabled: boolean;
    clickHandler?: () => void;
};

export function PrimaryIcon({ icon, disabled, clickHandler }: IconProps) {
    const IconComponent = icons[icon];
    const [colorVar, setColorVar] = useState("light-grays-565656");
    const [isActive, setIsActive] = useState(false);
    return (
        <button onClick={clickHandler} onMouseEnter={() => !disabled ? setColorVar("light-grays-000000") : setColorVar("light-transp-black-26")} onMouseLeave={() => !disabled ? setColorVar("light-grays-565656") : setColorVar("light-transp-black-26")} onMouseDown={() => !disabled && setIsActive(true)} onMouseUp={() => !disabled && setIsActive(false)} onMouseOut={() => !disabled && setIsActive(false)} className={"flex items-center justify-center w-8 h-8 rounded-full " + (disabled ? "" : "active:bg-light-transp-black-10")}>
            <IconComponent colorVar={disabled ? "light-transp-black-26" : isActive ? "light-grays-444444" : colorVar} />
        </button>
    );
}

export function SecondaryIcon({ icon }: IconProps) {
    return (
        <button></button>
    );
}

export function AccountIcon({ onClick }: { onClick: () => void }) {
    return (
        <button onClick={onClick} className="flex items-center justify-center w-10 h-10 rounded-full active:bg-light-transp-black-10"><img src="/images/avatar.svg" /></button>
    );
}