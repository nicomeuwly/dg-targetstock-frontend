"use client";
import { useState } from 'react';
import { SecondaryIcon } from './iconsButtons';

interface ProductTileProps {
    product: {
        brand: string;
        product: string;
        details: string;
        price: number;
        imageURL: string;
        category: string;
    };
    viewType: string;
    isFirst: boolean;
    isLast: boolean;
}

/**
 * ProductTile component renders a product card with details such as brand, product name, 
 * price, and image. It supports two view types: "thumb" and "list". On hover, additional 
 * icons for actions (remove, edit, open) are displayed.
 * @param {ProductTileProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered ProductTile component.
 */
export default function ProductTile({ product, viewType, isFirst, isLast }: ProductTileProps) {
    const [isHovered, setIsHovered] = useState(false);

    /**
     * Toggles the hover state.
     */
    const handleHover = () => {
        setIsHovered(!isHovered);
    }
    return (
        <div className={`p-6 bg-light-galaxus-page-background hover:bg-light-transp-black-02 flex border-light-transp-black-20 ${viewType === "thumb" ? `basis-1/3 flex-col justify-between gap-4 ${isFirst ? 'border-r' : ''}${isLast ? 'border-l' : ''}` : "w-full border-y gap-16 items-end h-48"}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <div className={`flex ${viewType === "list" ? "gap-16 h-full basis-11/12" : "flex-col gap-4 justify-between"}`}>
                <div className={viewType === "list" ? "h-full w-32 flex justify-center items-center" : "h-52 w-full flex justify-center items-center"}>
                    <img src={`https://www.galaxus.ch${product.imageURL}`} className="max-w-full max-h-full" />
                </div>
                <div className={`flex flex-col gap-1 ${viewType === "list" ? "justify-center h-full" : "h-32"}`}>
                    <a href="" target="_blank" className="h-5 text-sm text-light-galaxus-blue-text hover:text-light-galaxus-blue-link-hover w-fit">{product.category}</a>
                    <div className="flex flex-col">
                        <p className="text-lg font-semibold h-6 w-fit">{Number.isInteger(product.price) ? product.price + ".–" : product.price}</p>
                        <p className="text-lg font-semibold min-h-6 w-fit">{product.brand} <span className="font-normal">{product.product}</span></p>
                        <p className="text-sm text-light-galaxus-body-copy-secondary h-5 w-fit">{product.details}</p>
                    </div>
                </div>
            </div>
            <div className={`h-4 flex flex-row justify-end items-end gap-4 ${viewType === "list" ? "basis-1/12" : ""}`}>
                {isHovered ? <>
                    <SecondaryIcon icon="BinClosedIcon" disabled={false} clickHandler={() => { }} tooltipText="Remove product" />
                    <SecondaryIcon icon="PencilIcon" disabled={false} clickHandler={() => { }} tooltipText="Edit product settings" />
                    <SecondaryIcon icon="ExternalLink" disabled={false} clickHandler={() => { }} tooltipText="Open product page" /></>
                    : null}
            </div>
        </div>
    );
}