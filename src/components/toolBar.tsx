"use client";
import { PrimaryIcon, SecondaryIcon } from "@/components/iconsButtons";
import { SortListIcon, SortThumbIcon } from "./iconsSVG";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Tooltip } from "react-tooltip";

interface ToolBarProps {
    isLoading: boolean;
    totalProducts: number;
    sendDataToParent: (data: string) => void;
    disabled?: boolean;
    backButton: boolean;
}

/**
 * ToolBar component renders a toolbar with various icons, a back button, 
 * and information about the total products and location.
 * @param {ToolBarProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered ToolBar component.
 */
export default function ToolBar({ isLoading, totalProducts, sendDataToParent, disabled, backButton }: ToolBarProps) {
    const [location, setLocation] = useState("No location selected");
    const router = useRouter();

    /**
     * Handles data sent from the child component and forwards it to the parent.
     * @param {string} data - The data sent from the child component.
     */
    function handleDataFromChild(data: string) {
        sendDataToParent(data);
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            const loc = localStorage.getItem("Location");
            setLocation(loc ? loc : "No location selected");
        }
    }, []);
    return (
        <div className="w-full border-b border-light-transp-black-20 py-2 flex flex-row items-center">
            <div className="flex flex-row items-center basis-1/4">
                {backButton ? <><SecondaryIcon icon="ArrowLeftIcon" disabled={false} text="Back" clickHandler={() => router.back()} />
                    <div className="h-6 w-px bg-light-transp-black-20 ml-4 mr-2"></div></> : null}
                <div className="flex flex-row">
                    <PrimaryIcon icon="AddIcon" disabled={false} tooltipText="Add a product" />
                    <PrimaryIcon icon="BinClosedIcon" disabled={disabled ? disabled : false} tooltipText="Delete all products" />
                    <PrimaryIcon icon="MultipleSelectionIcon" disabled={disabled ? disabled : false} tooltipText="Multiple selection mode" />
                    <PrimaryIcon icon="CogwheelIcon" disabled={disabled ? disabled : false} tooltipText="Stock settings" />
                </div>
            </div>
            <p className="basis-2/4 text-center">{isLoading ? "Loading..." : `${location} | ${totalProducts} products`}</p>
            <ChangeViewType sendDataToParent={handleDataFromChild} disabled={disabled ? disabled : false} />
        </div>
    );
}

interface ChangeViewTypeProps {
    sendDataToParent: (data: string) => void;
    disabled?: boolean;
}

/**
 * ChangeViewType component renders two icons to switch between "thumb" and "list" view types.
 * It communicates the selected view type to the parent component.
 * @param {ChangeViewTypeProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered ChangeViewType component.
 */
function ChangeViewType({ sendDataToParent, disabled }: ChangeViewTypeProps) {
    const [viewType, setViewType] = useState("thumb");
    const [colorThumb, setColorThumb] = useState("light-grays-565656");
    const [colorList, setColorList] = useState("light-grays-565656");

    /**
     * Handles the click event to change the view type.
     * @param {string} type - The selected view type.
     */
    function handleClick(type: string) {
        if (disabled) return;
        setViewType(type);
        sendDataToParent(type);
    }

    return (
        <div className="flex basis-1/4 justify-end" data-view-selected={viewType}>
            <div className="flex flex-row w-fit">
                <div className={"py-2 px-3 cursor-pointer " + (viewType === "thumb" ? "border border-light-grays-000000 rounded-sm" : "border-y border-l border-light-transp-black-20 rounded-l-sm")} onMouseEnter={() => setColorThumb("light-grays-000000")} onMouseLeave={() => setColorThumb("light-grays-565656")} onClick={() => handleClick("thumb")} data-tooltip-id="thumb-tooltip" data-tooltip-content="Panel view" data-tooltip-place="top" data-tooltip-offset={-2}>
                    <SortThumbIcon colorVar={disabled ? "light-transp-black-26" : colorThumb} />
                    <Tooltip id="thumb-tooltip" className="tooltip" disableStyleInjection={true} />
                </div>
                <div className={"py-2 px-3 cursor-pointer " + (viewType === "list" ? "border border-light-grays-000000 rounded-sm" : "border-y border-r border-light-transp-black-20 rounded-r-sm")} onMouseEnter={() => setColorList("light-grays-000000")} onMouseLeave={() => setColorList("light-grays-565656")} onClick={() => handleClick("list")} data-tooltip-id="list-tooltip" data-tooltip-content="List view" data-tooltip-place="top" data-tooltip-offset={-2}>
                    <SortListIcon colorVar={disabled ? "light-transp-black-26" : colorList} />
                    <Tooltip id="list-tooltip" className="tooltip" disableStyleInjection={true} />
                </div>
            </div>
        </div>
    );
}