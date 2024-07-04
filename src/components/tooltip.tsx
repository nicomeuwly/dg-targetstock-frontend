interface TooltipProps {
    text: string;
}

export default function Tooltip({ text }: TooltipProps) {
    return (
        <div className="h-7 w-fit bg-light-grays-F5F5F5 rounded-sm text-light-digitec-body-copy-primary text-sm py-1 px-2 shadow-lg relative bottom-6">
            {text}
        </div>
    );
}