import { PrimaryIcon, SecondaryIcon } from "@/components/iconsButtons";

export default function ToolBar() {
    return (
        <div className="w-full border-b border-light-transp-black-20 py-3 flex flex-row items-center">
            <SecondaryIcon icon="ArrowLeftIcon" disabled={false} text="Back" />
            <div className="h-6 w-px bg-light-transp-black-20 ml-4 mr-2"></div>
            <div className="flex flex-row">
                <PrimaryIcon icon="AddIcon" disabled={false} tooltipText="Add a product" />
                <PrimaryIcon icon="MultipleSelectionIcon" disabled={false} tooltipText="Multiple selection mode" />
            </div>
        </div>
    );
}