interface ButtonProps {
    label: string;
    onClick?: () => void;
    disabled: boolean;
}

export function PrimaryButton ({ label, onClick, disabled }: ButtonProps) {
    return (
        <button onClick={onClick} className={"flex flex-row justify-center items-center h-10 bg-light-grays-444444 px-4 border border-light-transp-black-20 text-light-grays-FFFFFF " + (disabled ? "cursor-not-allowed" : "cursor-pointer")}>{label}</button>
    );
}