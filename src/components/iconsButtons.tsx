"use client";
import icons from "@/components/iconsSVG";
import { useState } from "react";
import { Tooltip } from 'react-tooltip'

type IconProps = {
    icon: string;
    disabled: boolean;
    text?: string;
    clickHandler?: () => void;
    tooltipText?: string;
};

export function PrimaryIcon({ icon, disabled, clickHandler, tooltipText }: IconProps) {
    const IconComponent = icons[icon];
    const [colorVar, setColorVar] = useState("light-grays-565656");
    const [isActive, setIsActive] = useState(false);

    const handleMouseEnter = () => {
        disabled ? setColorVar("light-transp-black-26") : setColorVar("light-grays-000000");
    }
    const handleMouseLeave = () => {
        disabled ? setColorVar("light-transp-black-26") : setColorVar("light-grays-565656");
    }
    return (
        <>
            <button data-tooltip-id="icon-tooltip-1" data-tooltip-content={tooltipText} data-tooltip-place="top" data-tooltip-offset={4} type="button" onClick={clickHandler} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={() => !disabled && setIsActive(true)} onMouseUp={() => !disabled && setIsActive(false)} onMouseOut={() => !disabled && setIsActive(false)} className={"flex items-center justify-center w-8 h-8 rounded-full " + (disabled ? "" : "active:bg-light-transp-black-10")}>
                <IconComponent colorVar={disabled ? "light-transp-black-26" : isActive ? "light-grays-444444" : colorVar} />
            </button>
            {tooltipText ? <Tooltip id="icon-tooltip-1" className="tooltip" disableStyleInjection={true} /> : null}
        </>
    );
}

export function SecondaryIcon({ icon, disabled, clickHandler, tooltipText, text }: IconProps) {
    let iconSVG = icon;
    let IconComponent = icons[icon];
    const [colorVar, setColorVar] = useState("light-galaxus-blue-text");

    const handleMouseEnter = () => {
        setColorVar("light-galaxus-blue-link-hover");
        if (iconSVG === "BinClosedIcon") {
            iconSVG = "BinOpenIcon";
            IconComponent = icons[iconSVG];
        };
    }
    const handleMouseLeave = () => {
        setColorVar("light-galaxus-blue-text");
        if (iconSVG === "BinOpenIcon") {
            iconSVG = "BinClosedIcon";
            IconComponent = icons[iconSVG];
        };
    }
    return (
        <>
            <button data-tooltip-id="icon-tooltip-2" data-tooltip-content={tooltipText} data-tooltip-place="top" type="button" onClick={clickHandler} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex flex-row justify-center gap-2 text-sm text-light-galaxus-blue-text hover:text-light-galaxus-blue-link-hover">
                {icon === "none" ? null : <IconComponent colorVar={colorVar} />}
                {text ? text : null}
            </button>
            {tooltipText ? <Tooltip id="icon-tooltip-2" className="tooltip" disableStyleInjection={true} /> : null}
        </>
    );
}

export function AccountIcon({ icon, disabled, clickHandler, tooltipText }: IconProps) {
    return (
        <>
            <button data-tooltip-id="account-tooltip" data-tooltip-content={tooltipText} data-tooltip-place="top" data-tooltip-offset={0} type="button" onClick={clickHandler} className="flex items-center justify-center w-10 h-10 rounded-full active:bg-light-transp-black-10"><img src="/images/avatar.svg" /></button>
            <Tooltip id="account-tooltip" className="tooltip" disableStyleInjection={true} />
        </>
    );
}