interface ButtonProps {
    label: string;
    description?: string;
    link?: string;
    onClick?: () => void;
    disabled: boolean;
}

export function PrimaryButton ({ label, onClick, disabled }: ButtonProps) {
    return (
        <button onClick={onClick} className={"flex flex-row justify-center items-center h-10 bg-light-grays-444444 px-4 border border-light-transp-black-20 text-light-grays-FFFFFF " + (disabled ? "cursor-not-allowed" : "cursor-pointer")}>{label}</button>
    );
}

export function TileButton ({ label, description, link, disabled }: ButtonProps) {
    return (
        <button className={"w-1/2 h-40 p-6 bg-light-grays-FFFFFF border border-light-transp-black-20 rounded-md hover:bg-light-grays-F5F5F5 flex items-center justify-center"}><div className="flex flex-col gap-4 text-xl font-semibold">{label}<span className="text-base font-normal">{description}</span></div></button>
    );
}