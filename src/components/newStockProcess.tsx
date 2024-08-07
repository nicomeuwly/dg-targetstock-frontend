import { DoneStepIcon, ErrorStepIcon, PastStepIcon, WarningStepIcon, FutureStepIcon, CurrentStepIcon } from "./iconsSVG";

interface NewStockProcessProps {
    status: number[];
}

/**
 * NewStockProcess component renders a series of step icons based on the provided status array.
 * Each status corresponds to a specific icon representing the step's state.
 * @param {NewStockProcessProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered NewStockProcess component.
 */
export default function NewStockProcess({ status }: NewStockProcessProps) {
    const steps = [<FutureStepIcon />, <CurrentStepIcon />, <DoneStepIcon />, <PastStepIcon />, <ErrorStepIcon />, <WarningStepIcon />]

    return (
        <div className="flex flex-row items-center">
            {steps[status[0]]}
            <div className="w-8 h-px bg-light-grays-565656"></div>
            {steps[status[1]]}
            <div className="w-8 h-px bg-light-grays-565656"></div>
            {steps[status[2]]}
        </div>
    );
}