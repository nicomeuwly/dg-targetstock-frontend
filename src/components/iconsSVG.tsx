type IconProps = {
    colorVar: string;
};

export function AddIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8 2V7.999H2V8.999H8V15H9V8.999H14.999V7.999H9V2H8Z" fill={`var(--${colorVar})`} />
        </svg>
    );
}

export function BinClosedIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6 2V3.001H3V4.001H7V3.001H9.001V4.001H13V3.001H10.001V2H6ZM3.003 16H13.003V5H3.003V16ZM4.003 15.001H12.003V6.001H4.003V15.001ZM9.003 13.001H10.003V8.001H9.003V13.001ZM6.004 13.001H7.004V8.001H6.004V13.001Z" fill={`var(--${colorVar})`} />
        </svg>
    );
}

export function BinOpenIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.503 0L6.606 0.777L5.639 1.035L5.898 2.002L3 2.778L3.26 3.744L7.123 2.708L6.864 1.742L8.796 1.225L9.055 2.191L13.098 1.108V1.105L12.839 0.141L9.762 0.966L9.503 0Z" fill={`var(--${colorVar})`} />
            <path fillRule="evenodd" clipRule="evenodd" d="M3.003 16H13.003V5H3.003V16ZM4.003 15.001H12.003V6.001H4.003V15.001ZM9.003 13.001H10.003V8.001H9.003V13.001ZM6.004 13.001H7.004V8.001H6.004V13.001Z" fill={`var(--${colorVar})`} />
        </svg>
    );
}

export function CogwheelIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.8584 12.2891L11.7614 12.0721C11.1814 12.5501 10.5014 12.9211 9.75143 13.1461L8.91443 14.9441C8.62143 14.9771 8.32643 15.0001 8.02443 15.0001C7.65943 15.0001 7.30243 14.9671 6.95243 14.9181L6.09343 13.0761C5.41643 12.8451 4.79843 12.4981 4.26843 12.0571L2.17643 12.2721C1.76543 11.7691 1.42343 11.2141 1.16943 10.6141L2.42143 8.99512C2.35743 8.67212 2.32043 8.34012 2.32043 8.00012C2.32043 7.67112 2.35643 7.35012 2.41643 7.03612L1.15943 5.41112C1.41043 4.81612 1.74543 4.26412 2.14843 3.76312L4.22843 3.97612C4.77443 3.51612 5.41243 3.15312 6.11543 2.91712L6.97043 1.07912C7.31543 1.03212 7.66543 1.00012 8.02443 1.00012C8.31943 1.00012 8.60843 1.02012 8.89443 1.05312L9.73043 2.84712C10.5054 3.07612 11.2074 3.46312 11.8004 3.96112L13.8864 3.74612C14.2634 4.21212 14.5864 4.71912 14.8314 5.26512L13.5974 6.86012C13.6814 7.22812 13.7274 7.60812 13.7274 8.00012C13.7274 8.40112 13.6774 8.79112 13.5894 9.16812L14.8194 10.7581C14.5694 11.3101 14.2424 11.8211 13.8584 12.2891ZM14.6694 8.91512C14.7164 8.60812 14.7404 8.30312 14.7404 8.00012C14.7404 7.70712 14.7174 7.41112 14.6744 7.11512L15.6354 5.87212L16.0004 5.40112L15.7564 4.86012C15.4864 4.25712 15.1234 3.67212 14.6764 3.12112L14.3314 2.69512L12.1064 2.92412C11.6014 2.55312 11.0534 2.25612 10.4684 2.03812L9.57643 0.122122L9.00743 0.0591221C8.65143 0.0191221 8.32943 0.00012207 8.02443 0.00012207C7.65643 0.00012207 7.27843 0.0281221 6.83343 0.0881221L6.28343 0.163122L6.05043 0.661122L5.36843 2.12712C4.85143 2.33912 4.36743 2.61112 3.92043 2.93912L1.70243 2.71112L1.35643 3.14012C0.887427 3.72312 0.506427 4.35712 0.224427 5.02612L0.000427246 5.56012L1.35043 7.30612C1.32243 7.54112 1.30743 7.77112 1.30743 8.00012C1.30743 8.23812 1.32343 8.48112 1.35343 8.72712L0.364427 10.0081L0.00742725 10.4691L0.235427 11.0021C0.522427 11.6771 0.910427 12.3141 1.38743 12.9001L1.73343 13.3231L3.96543 13.0941C4.39243 13.4021 4.85443 13.6601 5.34543 13.8641L6.03143 15.3361L6.26243 15.8331L6.81143 15.9081C7.26443 15.9711 7.64943 16.0001 8.02443 16.0001C8.33443 16.0001 8.66343 15.9791 9.03043 15.9371L9.59543 15.8731L9.83443 15.3621L10.4904 13.9531C11.0504 13.7421 11.5764 13.4591 12.0624 13.1091L13.7544 13.2831L14.2994 13.3401L14.6454 12.9181C15.0954 12.3691 15.4654 11.7801 15.7444 11.1661L15.9904 10.6241L14.6694 8.91512ZM8.00043 10.0001C6.89743 10.0001 6.00043 9.10212 6.00043 8.00012C6.00043 6.89712 6.89743 6.00012 8.00043 6.00012C9.10243 6.00012 10.0004 6.89712 10.0004 8.00012C10.0004 9.10212 9.10243 10.0001 8.00043 10.0001ZM8.00043 5.00012C6.34243 5.00012 5.00043 6.34312 5.00043 8.00012C5.00043 9.65712 6.34243 11.0001 8.00043 11.0001C9.65743 11.0001 11.0004 9.65712 11.0004 8.00012C11.0004 6.34312 9.65743 5.00012 8.00043 5.00012Z" fill={`var(--${colorVar})`} />
        </svg>
    )
}

export function ExternalLink({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0V9H1V1H15V15H7V16H16V0H0ZM5 4.001V5H10.293L0.147 15.147L0.5 15.5L0.853 15.854L11 5.707V11H12V4.001H5Z" fill={`var(--${colorVar})`} />
        </svg>
    );
}

export function GlobeIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.92 12C15.6 10.82 16 9.46 16 8C16 6.54 15.6 5.18 14.92 4C13.65 1.8 11.36 0.26 8.69 0.04C8.46 0.01 8.23 0 8 0C7.77 0 7.54 0.01 7.31 0.03C4.64 0.26 2.35 1.8 1.08 4C0.4 5.18 0 6.54 0 8C0 9.46 0.4 10.82 1.08 12C2.35 14.2 4.64 15.74 7.31 15.96C7.54 15.99 7.77 16 8 16C8.23 16 8.46 15.99 8.69 15.97C11.36 15.74 13.65 14.2 14.92 12ZM8.5 14.84V13H10.35C9.83 13.71 9.21 14.32 8.5 14.84ZM8.5 12V8.5H11.96C11.89 9.76 11.54 10.95 10.98 12H8.5ZM8.5 7.5V4H10.98C11.55 5.05 11.89 6.24 11.96 7.5H8.5ZM8.5 3V1.16C9.21 1.68 9.83 2.29 10.35 3H8.5ZM10.31 1.4C11.28 1.74 12.16 2.29 12.89 3H11.56C11.2 2.42 10.78 1.89 10.31 1.4ZM4.45 3H3.11C3.83 2.29 4.71 1.74 5.69 1.4C5.22 1.89 4.8 2.42 4.45 3ZM7.5 1.16V3H5.65C6.17 2.29 6.79 1.68 7.5 1.16ZM7.5 4V7.5H4.04C4.11 6.24 4.46 5.05 5.02 4H7.5ZM7.5 8.5V12H5.02C4.45 10.95 4.11 9.76 4.04 8.5H7.5ZM7.5 13V14.84C6.79 14.32 6.17 13.71 5.65 13H7.5ZM5.69 14.6C4.72 14.26 3.84 13.71 3.11 13H4.44C4.8 13.58 5.22 14.11 5.69 14.6ZM11.55 13H12.88C12.16 13.71 11.28 14.26 10.3 14.6C10.78 14.11 11.2 13.58 11.55 13ZM12.1 12C12.6 10.93 12.91 9.75 12.97 8.5H14.98C14.89 9.8 14.45 10.99 13.74 12H12.1ZM14.97 7.5H12.96C12.9 6.25 12.6 5.07 12.1 4H13.74C14.44 5.01 14.88 6.2 14.97 7.5ZM3.9 4C3.4 5.07 3.1 6.25 3.03 7.5H1.03C1.12 6.2 1.56 5.01 2.26 4H3.9ZM1.03 8.5H3.04C3.1 9.75 3.4 10.93 3.9 12H2.26C1.56 10.99 1.12 9.8 1.03 8.5Z" fill={`var(--${colorVar})`} />
        </svg>
    );
}

export function MultipleSelectionIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4 0H15H16V1V12L16 13H15H14V12H15L15 1H4V2L3 2V1V0H4ZM12 4H1V15H12V4ZM1 3H0V4V15V16H1H12H13V15V4V3H12H1ZM10.0776 7.07764L4.87238 12.2829L4.51882 12.6365L4.16527 12.2829L2.44118 10.5588L3.14829 9.85171L4.51882 11.2223L9.37054 6.37054L10.0776 7.07764Z" fill={`var(--${colorVar})`} />
        </svg>
    )
}

export function PencilIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.758 0L0 11.758V16H4.243L16.001 4.243L11.758 0ZM10.344 2.829L11.758 1.414L14.587 4.243L13.172 5.656L10.344 2.829ZM1 12.172L9.637 3.536L12.464 6.364L3.829 15H1V12.172Z" fill={`var(--${colorVar})`} />
        </svg>
    );
}

export function SelectAllIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 5H1V3H0V5Z" fill={`var(--${colorVar})`} />
            <path d="M0 1H1V0H0V1Z" fill={`var(--${colorVar})`} />
            <path d="M3 0H5V1H3V0Z" fill={`var(--${colorVar})`} />
            <path d="M16 1H15V0H16V1Z" fill={`var(--${colorVar})`} />
            <path d="M7 0H9V1H7V0Z" fill={`var(--${colorVar})`} />
            <path d="M11 0H13V1H11V0Z" fill={`var(--${colorVar})`} />
            <path d="M16 3V5H15V3H16Z" fill={`var(--${colorVar})`} />
            <path d="M16 7V9H15V7H16Z" fill={`var(--${colorVar})`} />
            <path d="M16 11V13H15V11H16Z" fill={`var(--${colorVar})`} />
            <path d="M16 15V16H15V15H16Z" fill={`var(--${colorVar})`} />
            <path d="M13 16H11V15H13V16Z" fill={`var(--${colorVar})`} />
            <path d="M9 16H7V15H9V16Z" fill={`var(--${colorVar})`} />
            <path d="M5 16H3V15H5V16Z" fill={`var(--${colorVar})`} />
            <path d="M1 16H0V15H1V16Z" fill={`var(--${colorVar})`} />
            <path d="M0 13V11H1V13H0Z" fill={`var(--${colorVar})`} />
            <path d="M0 9V7H1V9H0Z" fill={`var(--${colorVar})`} />
            <path fillRule="evenodd" clipRule="evenodd" d="M3 3H13V13H3V3ZM4 4H12V12H4V4Z" fill={`var(--${colorVar})`} />
        </svg>
    );
}

export function SortListIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1 5H15V0.999001H1V5ZM2 4H14V2H2V4ZM1 10H15V6H1V10ZM2 9H14V7H2V9ZM1 15H15V11H1V15ZM2 14H14V12H2V14Z" fill={`var(--${colorVar})`} />
        </svg>
    );
}

export function SortThumbIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9 7H15V1H9V7ZM10 6H14V2H10V6ZM1 7H7V1H1V7ZM2 6H6.001V2H2V6ZM9 15H15V9H9V15ZM10 14.001H14V10H10V14.001ZM1 15H7V9H1V15ZM2 14.001H6.001V10H2V14.001Z" fill={`var(--${colorVar})`} />
        </svg>
    );
}

const icons: { [key: string]: React.FC<IconProps> } = {
    AddIcon,
    BinClosedIcon,
    BinOpenIcon,
    CogwheelIcon,
    ExternalLink,
    GlobeIcon,
    MultipleSelectionIcon,
    PencilIcon,
    SelectAllIcon,
    SortListIcon,
    SortThumbIcon,
};

export default icons;