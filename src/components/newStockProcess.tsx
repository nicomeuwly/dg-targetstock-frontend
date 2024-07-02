import { DoneStepIcon, ErrorStepIcon, PastStepIcon, WarningStepIcon, FutureStepIcon, CurrentStepIcon } from "./iconsSVG";

interface NewStockProcessProps {
    status: number[];
}

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