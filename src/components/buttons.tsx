import Link from "next/link";

interface ButtonProps {
    label: string;
    description?: string;
    link?: string;
    onClick?: () => void;
    disabled: boolean;
}

export function PrimaryButton ({ label, onClick, disabled }: ButtonProps) {
    return (
        <button type="button" onClick={disabled ? () => {} : onClick} className={"min-w-32 flex flex-row justify-center items-center h-10 px-4 border text-sm border-light-transp-black-20 rounded-sm " + (disabled ? "cursor-not-allowed text-light-galaxus-body-copy-tertiary" : "cursor-pointer text-light-grays-FFFFFF bg-light-grays-444444 hover:bg-light-grays-000000 hover:border-light-grays-000000 active:bg-light-grays-444444 active:border-light-transp-black-20 active:shadow")}>{label}</button>
    );
}

export function SecondaryButton ({ label, onClick, disabled }: ButtonProps) {
    return (
        <button type="button" onClick={disabled ? () => {} : onClick} className={"min-w-32 flex flex-row justify-center items-center h-10 px-4 border text-sm border-light-transp-black-20 rounded-sm " + (disabled ? "cursor-not-allowed text-light-galaxus-body-copy-tertiary" : "cursor-pointer text-light-galaxus-body-copy-primary bg-light-grays-EEEEEE hover:bg-light-grays-DDDDDD active:bg-light-grays-EEEEEE active:shadow")}>{label}</button>
    );
}

export function TileButton ({ label, description, link }: ButtonProps) {    
    return (
        <button type="button" className={"w-1/2 h-40 p-6 bg-light-grays-FFFFFF border border-light-transp-black-20 rounded-md hover:bg-light-grays-F5F5F5 flex items-center justify-center"}><Link href={link ? link : "/"} className="flex flex-col gap-4 text-xl font-semibold">{label}<span className="text-base font-normal">{description}</span></Link></button>
    );
}