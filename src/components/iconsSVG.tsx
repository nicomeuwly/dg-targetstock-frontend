type IconProps = {
    colorVar: string;
};

/**
 * AddIcon component renders an "add" SVG icon with a specified color.
 * @param {IconProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered AddIcon component.
 */
export function AddIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8 2V7.999H2V8.999H8V15H9V8.999H14.999V7.999H9V2H8Z" fill={`var(--${colorVar})`} />
        </svg>
    );
}

/**
 * ArrowLeftIcon component renders a left arrow SVG icon with a specified color.
 * @param {IconProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered ArrowLeftIcon component.
 */
export function ArrowLeftIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.95 3.5L1 8.499L1.707 9.215L5.95 13.5L6.657 12.786L2.914 9.004H15V7.995H2.914L6.657 4.215L5.95 3.5Z" fill={`var(--${colorVar})`} />
        </svg>
    );
}

/**
 * BinClosedIcon component renders a closed bin SVG icon with a specified color.
 * @param {IconProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered BinClosedIcon component.
 */
export function BinClosedIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6 2V3.001H3V4.001H7V3.001H9.001V4.001H13V3.001H10.001V2H6ZM3.003 16H13.003V5H3.003V16ZM4.003 15.001H12.003V6.001H4.003V15.001ZM9.003 13.001H10.003V8.001H9.003V13.001ZM6.004 13.001H7.004V8.001H6.004V13.001Z" fill={`var(--${colorVar})`} />
        </svg>
    );
}

/**
 * BinOpenIcon component renders an open bin SVG icon with a specified color.
 * @param {IconProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered BinOpenIcon component.
 */
export function BinOpenIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.503 0L6.606 0.777L5.639 1.035L5.898 2.002L3 2.778L3.26 3.744L7.123 2.708L6.864 1.742L8.796 1.225L9.055 2.191L13.098 1.108V1.105L12.839 0.141L9.762 0.966L9.503 0Z" fill={`var(--${colorVar})`} />
            <path fillRule="evenodd" clipRule="evenodd" d="M3.003 16H13.003V5H3.003V16ZM4.003 15.001H12.003V6.001H4.003V15.001ZM9.003 13.001H10.003V8.001H9.003V13.001ZM6.004 13.001H7.004V8.001H6.004V13.001Z" fill={`var(--${colorVar})`} />
        </svg>
    );
}

/**
 * ChevronDownIcon component renders a downward chevron SVG icon with a specified color.
 * @param {IconProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered ChevronDownIcon component.
 */
export function ChevronDownIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.25 5L8 10.444L2.75 5L2 5.778L8 12L14 5.778L13.25 5Z" fill={`var(--${colorVar})`} />
        </svg>
    );
}

/**
 * ChevronUpIcon component renders an upward chevron SVG icon with a specified color.
 * @param {IconProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered ChevronUpIcon component.
 */
export function ChevronUpIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8 4L2 10.223L2.749 11L8 5.556L13.25 11L13.999 10.223L8 4Z" fill={`var(--${colorVar})`} />
        </svg>
    );
}

/**
 * ClockIcon component renders a clock SVG icon with a specified color.
 * @param {IconProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered ClockIcon component.
 */
export function ClockIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM7.5 3V7.5V8.5H8.5H12V7.5H8.5V3H7.5Z" fill={`var(--${colorVar})`} />
        </svg>
    );
}

/**
 * CogwheelIcon component renders a cogwheel SVG icon with a specified color.
 * @param {IconProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered CogwheelIcon component.
 */
export function CogwheelIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.8584 12.2891L11.7614 12.0721C11.1814 12.5501 10.5014 12.9211 9.75143 13.1461L8.91443 14.9441C8.62143 14.9771 8.32643 15.0001 8.02443 15.0001C7.65943 15.0001 7.30243 14.9671 6.95243 14.9181L6.09343 13.0761C5.41643 12.8451 4.79843 12.4981 4.26843 12.0571L2.17643 12.2721C1.76543 11.7691 1.42343 11.2141 1.16943 10.6141L2.42143 8.99512C2.35743 8.67212 2.32043 8.34012 2.32043 8.00012C2.32043 7.67112 2.35643 7.35012 2.41643 7.03612L1.15943 5.41112C1.41043 4.81612 1.74543 4.26412 2.14843 3.76312L4.22843 3.97612C4.77443 3.51612 5.41243 3.15312 6.11543 2.91712L6.97043 1.07912C7.31543 1.03212 7.66543 1.00012 8.02443 1.00012C8.31943 1.00012 8.60843 1.02012 8.89443 1.05312L9.73043 2.84712C10.5054 3.07612 11.2074 3.46312 11.8004 3.96112L13.8864 3.74612C14.2634 4.21212 14.5864 4.71912 14.8314 5.26512L13.5974 6.86012C13.6814 7.22812 13.7274 7.60812 13.7274 8.00012C13.7274 8.40112 13.6774 8.79112 13.5894 9.16812L14.8194 10.7581C14.5694 11.3101 14.2424 11.8211 13.8584 12.2891ZM14.6694 8.91512C14.7164 8.60812 14.7404 8.30312 14.7404 8.00012C14.7404 7.70712 14.7174 7.41112 14.6744 7.11512L15.6354 5.87212L16.0004 5.40112L15.7564 4.86012C15.4864 4.25712 15.1234 3.67212 14.6764 3.12112L14.3314 2.69512L12.1064 2.92412C11.6014 2.55312 11.0534 2.25612 10.4684 2.03812L9.57643 0.122122L9.00743 0.0591221C8.65143 0.0191221 8.32943 0.00012207 8.02443 0.00012207C7.65643 0.00012207 7.27843 0.0281221 6.83343 0.0881221L6.28343 0.163122L6.05043 0.661122L5.36843 2.12712C4.85143 2.33912 4.36743 2.61112 3.92043 2.93912L1.70243 2.71112L1.35643 3.14012C0.887427 3.72312 0.506427 4.35712 0.224427 5.02612L0.000427246 5.56012L1.35043 7.30612C1.32243 7.54112 1.30743 7.77112 1.30743 8.00012C1.30743 8.23812 1.32343 8.48112 1.35343 8.72712L0.364427 10.0081L0.00742725 10.4691L0.235427 11.0021C0.522427 11.6771 0.910427 12.3141 1.38743 12.9001L1.73343 13.3231L3.96543 13.0941C4.39243 13.4021 4.85443 13.6601 5.34543 13.8641L6.03143 15.3361L6.26243 15.8331L6.81143 15.9081C7.26443 15.9711 7.64943 16.0001 8.02443 16.0001C8.33443 16.0001 8.66343 15.9791 9.03043 15.9371L9.59543 15.8731L9.83443 15.3621L10.4904 13.9531C11.0504 13.7421 11.5764 13.4591 12.0624 13.1091L13.7544 13.2831L14.2994 13.3401L14.6454 12.9181C15.0954 12.3691 15.4654 11.7801 15.7444 11.1661L15.9904 10.6241L14.6694 8.91512ZM8.00043 10.0001C6.89743 10.0001 6.00043 9.10212 6.00043 8.00012C6.00043 6.89712 6.89743 6.00012 8.00043 6.00012C9.10243 6.00012 10.0004 6.89712 10.0004 8.00012C10.0004 9.10212 9.10243 10.0001 8.00043 10.0001ZM8.00043 5.00012C6.34243 5.00012 5.00043 6.34312 5.00043 8.00012C5.00043 9.65712 6.34243 11.0001 8.00043 11.0001C9.65743 11.0001 11.0004 9.65712 11.0004 8.00012C11.0004 6.34312 9.65743 5.00012 8.00043 5.00012Z" fill={`var(--${colorVar})`} />
        </svg>
    )
}

/**
 * CloseIcon component renders a close (X) SVG icon with a specified color.
 * @param {IconProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered CloseIcon component.
 */
export function CloseIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.192 3.00049L7.95 7.24349L3.708 3.00049L3 3.70649L7.243 7.94949L3 12.1925L3.708 12.8995L7.95 8.65649L12.192 12.8995L12.899 12.1935V12.1915L8.657 7.94949L12.899 3.70749L12.192 3.00049Z" fill={`var(--${colorVar})`} />
        </svg>
    );
}

/**
 * DarkModeIcon component renders a dark mode SVG icon with a specified color.
 * @param {IconProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered DarkModeIcon component.
 */
export function DarkModeIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.4081 0.401977C10.0078 0.300849 9.60059 0.233095 9.1904 0.200441C8.04937 0.109604 6.88568 0.290365 5.78628 0.779851C2.03829 2.44856 0.456758 7.07339 2.25383 11.1097C4.05091 15.146 8.54607 17.0653 12.2941 15.3966C13.3935 14.9071 14.3065 14.1633 15.0024 13.2545C15.2527 12.9278 15.4748 12.5799 15.6675 12.2147C15.2725 12.2555 14.8791 12.2655 14.491 12.2461C11.9155 12.1172 9.57289 10.6896 8.51815 8.32064C7.4634 5.95164 7.97001 3.25551 9.59758 1.25525C9.84282 0.95386 10.1135 0.668272 10.4081 0.401977ZM8.40556 1.1817C7.65576 1.2086 6.90783 1.37514 6.19301 1.6934C3.01214 3.10961 1.56603 7.10625 3.16738 10.703C4.76873 14.2996 8.70645 15.8993 11.8873 14.483C12.6021 14.1648 13.2264 13.7204 13.7481 13.1812C11.109 12.8319 8.73324 11.2623 7.6046 8.72737C6.47596 6.1924 6.89921 3.37663 8.40556 1.1817Z" fill={`var(--${colorVar})`} />
        </svg>
    );
}

/**
 * ExternalLink component renders an external link SVG icon with a specified color.
 * @param {IconProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered ExternalLink component.
 */
export function ExternalLink({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0V9H1V1H15V15H7V16H16V0H0ZM5 4.001V5H10.293L0.147 15.147L0.5 15.5L0.853 15.854L11 5.707V11H12V4.001H5Z" fill={`var(--${colorVar})`} />
        </svg>
    );
}

/**
 * GlobeIcon component renders a globe SVG icon with a specified color.
 * @param {IconProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered GlobeIcon component.
 */
export function GlobeIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.92 12C15.6 10.82 16 9.46 16 8C16 6.54 15.6 5.18 14.92 4C13.65 1.8 11.36 0.26 8.69 0.04C8.46 0.01 8.23 0 8 0C7.77 0 7.54 0.01 7.31 0.03C4.64 0.26 2.35 1.8 1.08 4C0.4 5.18 0 6.54 0 8C0 9.46 0.4 10.82 1.08 12C2.35 14.2 4.64 15.74 7.31 15.96C7.54 15.99 7.77 16 8 16C8.23 16 8.46 15.99 8.69 15.97C11.36 15.74 13.65 14.2 14.92 12ZM8.5 14.84V13H10.35C9.83 13.71 9.21 14.32 8.5 14.84ZM8.5 12V8.5H11.96C11.89 9.76 11.54 10.95 10.98 12H8.5ZM8.5 7.5V4H10.98C11.55 5.05 11.89 6.24 11.96 7.5H8.5ZM8.5 3V1.16C9.21 1.68 9.83 2.29 10.35 3H8.5ZM10.31 1.4C11.28 1.74 12.16 2.29 12.89 3H11.56C11.2 2.42 10.78 1.89 10.31 1.4ZM4.45 3H3.11C3.83 2.29 4.71 1.74 5.69 1.4C5.22 1.89 4.8 2.42 4.45 3ZM7.5 1.16V3H5.65C6.17 2.29 6.79 1.68 7.5 1.16ZM7.5 4V7.5H4.04C4.11 6.24 4.46 5.05 5.02 4H7.5ZM7.5 8.5V12H5.02C4.45 10.95 4.11 9.76 4.04 8.5H7.5ZM7.5 13V14.84C6.79 14.32 6.17 13.71 5.65 13H7.5ZM5.69 14.6C4.72 14.26 3.84 13.71 3.11 13H4.44C4.8 13.58 5.22 14.11 5.69 14.6ZM11.55 13H12.88C12.16 13.71 11.28 14.26 10.3 14.6C10.78 14.11 11.2 13.58 11.55 13ZM12.1 12C12.6 10.93 12.91 9.75 12.97 8.5H14.98C14.89 9.8 14.45 10.99 13.74 12H12.1ZM14.97 7.5H12.96C12.9 6.25 12.6 5.07 12.1 4H13.74C14.44 5.01 14.88 6.2 14.97 7.5ZM3.9 4C3.4 5.07 3.1 6.25 3.03 7.5H1.03C1.12 6.2 1.56 5.01 2.26 4H3.9ZM1.03 8.5H3.04C3.1 9.75 3.4 10.93 3.9 12H2.26C1.56 10.99 1.12 9.8 1.03 8.5Z" fill={`var(--${colorVar})`} />
        </svg>
    );
}

/**
 * LightModeIcon component renders a light mode SVG icon with a specified color.
 * @param {IconProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered LightModeIcon component.
 */
export function LightModeIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 0V3H8.5V0H7.5Z" fill={`var(--${colorVar})`} />
            <path d="M7.5 13V16H8.5V13H7.5Z" fill={`var(--${colorVar})`} />
            <path d="M16 7.5H13V8.5H16V7.5Z" fill={`var(--${colorVar})`} />
            <path d="M3 7.5H0V8.5H3V7.5Z" fill={`var(--${colorVar})`} />
            <path d="M11.1819 4.11107L13.3032 1.98975L14.0103 2.69685L11.889 4.81817L11.1819 4.11107Z" fill={`var(--${colorVar})`} />
            <path d="M1.98951 13.3035L4.11083 11.1821L4.81794 11.8892L2.69662 14.0106L1.98951 13.3035Z" fill={`var(--${colorVar})`} />
            <path d="M14.0105 13.3032L11.8892 11.1819L11.1821 11.889L13.3034 14.0103L14.0105 13.3032Z" fill={`var(--${colorVar})`} />
            <path d="M4.81811 4.11083L2.69679 1.98951L1.98968 2.69662L4.111 4.81794L4.81811 4.11083Z" fill={`var(--${colorVar})`} />
            <path fillRule="evenodd" clipRule="evenodd" d="M12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8ZM11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill={`var(--${colorVar})`} />
        </svg>
    );
}

/**
 * LockIcon component renders a lock SVG icon with a specified color.
 * @param {IconProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered LockIcon component.
 */
export function LockIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_230_3097" fill="white">
                <path fillRule="evenodd" clipRule="evenodd" d="M2 6H4V4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4V6H14V15H2V6ZM11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4V6H11V4Z" />
            </mask>
            <path d="M4 6V7H5V6H4ZM2 6V5H1V6H2ZM12 6H11V7H12V6ZM14 6H15V5H14V6ZM14 15V16H15V15H14ZM2 15H1V16H2V15ZM5 6H4V7H5V6ZM11 6V7H12V6H11ZM4 5H2V7H4V5ZM3 4V6H5V4H3ZM8 -1C5.23858 -1 3 1.23858 3 4H5C5 2.34315 6.34315 1 8 1V-1ZM13 4C13 1.23858 10.7614 -1 8 -1V1C9.65685 1 11 2.34315 11 4H13ZM13 6V4H11V6H13ZM14 5H12V7H14V5ZM15 15V6H13V15H15ZM2 16H14V14H2V16ZM1 6V15H3V6H1ZM8 2C9.10457 2 10 2.89543 10 4H12C12 1.79086 10.2091 0 8 0V2ZM6 4C6 2.89543 6.89543 2 8 2V0C5.79086 0 4 1.79086 4 4H6ZM6 6V4H4V6H6ZM11 5H5V7H11V5ZM10 4V6H12V4H10Z" fill={`var(--${colorVar})`} mask="url(#path-1-inside-1_230_3097)" />
        </svg>
    );
}

/**
 * MultipleSelectionIcon component renders a multiple selection SVG icon with a specified color.
 * @param {IconProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered MultipleSelectionIcon component.
 */
export function MultipleSelectionIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4 0H15H16V1V12L16 13H15H14V12H15L15 1H4V2L3 2V1V0H4ZM12 4H1V15H12V4ZM1 3H0V4V15V16H1H12H13V15V4V3H12H1ZM10.0776 7.07764L4.87238 12.2829L4.51882 12.6365L4.16527 12.2829L2.44118 10.5588L3.14829 9.85171L4.51882 11.2223L9.37054 6.37054L10.0776 7.07764Z" fill={`var(--${colorVar})`} />
        </svg>
    )
}

/**
 * PencilIcon component renders a pencil (edit) SVG icon with a specified color.
 * @param {IconProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered PencilIcon component.
 */
export function PencilIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.758 0L0 11.758V16H4.243L16.001 4.243L11.758 0ZM10.344 2.829L11.758 1.414L14.587 4.243L13.172 5.656L10.344 2.829ZM1 12.172L9.637 3.536L12.464 6.364L3.829 15H1V12.172Z" fill={`var(--${colorVar})`} />
        </svg>
    );
}

/**
 * SelectAllIcon component renders a select all SVG icon with a specified color.
 * @param {IconProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered SelectAllIcon component.
 */
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

/**
 * SortListIcon component renders a sort list SVG icon with a specified color.
 * @param {IconProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered SortListIcon component.
 */
export function SortListIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1 5H15V0.999001H1V5ZM2 4H14V2H2V4ZM1 10H15V6H1V10ZM2 9H14V7H2V9ZM1 15H15V11H1V15ZM2 14H14V12H2V14Z" fill={`var(--${colorVar})`} />
        </svg>
    );
}

/**
 * SortThumbIcon component renders a sort thumbnail SVG icon with a specified color.
 * @param {IconProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered SortThumbIcon component.
 */
export function SortThumbIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9 7H15V1H9V7ZM10 6H14V2H10V6ZM1 7H7V1H1V7ZM2 6H6.001V2H2V6ZM9 15H15V9H9V15ZM10 14.001H14V10H10V14.001ZM1 15H7V9H1V15ZM2 14.001H6.001V10H2V14.001Z" fill={`var(--${colorVar})`} />
        </svg>
    );
}

/**
 * FutureStepIcon component renders a future step indicator SVG icon.
 * This icon does not accept color properties as it is a static icon.
 * @returns {JSX.Element} The rendered FutureStepIcon component.
 */
export function FutureStepIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="white" />
            <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#565656" />
        </svg>

    );
}

/**
 * PastStepIcon component renders a past step indicator SVG icon.
 * This icon does not accept color properties as it is a static icon.
 * @returns {JSX.Element} The rendered PastStepIcon component.
 */
export function PastStepIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="white" />
            <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#565656" />
            <path fillRule="evenodd" clipRule="evenodd" d="M17.213 8L9.597 15.459L6.787 12.706L6 13.477L9.597 17L18 8.77L17.213 8Z" fill="black" />
        </svg>
    );
}

/**
 * DoneStepIcon component renders a completed step indicator SVG icon.
 * This icon does not accept color properties as it is a static icon.
 * @returns {JSX.Element} The rendered DoneStepIcon component.
 */
export function DoneStepIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="#73C44D" />
            <path fillRule="evenodd" clipRule="evenodd" d="M17.213 8L9.597 15.459L6.787 12.706L6 13.477L9.597 17L18 8.77L17.213 8Z" fill="black" />
        </svg>
    );
}

/**
 * WarningStepIcon component renders a warning step indicator SVG icon.
 * This icon does not accept color properties as it is a static icon.
 * @returns {JSX.Element} The rendered WarningStepIcon component.
 */
export function WarningStepIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="#EEB524" />
            <path d="M12 15C12.553 15 13 15.447 13 16C13 16.553 12.553 17 12 17C11.447 17 11 16.553 11 16C11 15.447 11.447 15 12 15Z" fill="black" />
            <path d="M13 13H11V7H13V13Z" fill="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z" fill="black" />
        </svg>
    );
}

/**
 * ErrorStepIcon component renders an error step indicator SVG icon.
 * This icon does not accept color properties as it is a static icon.
 * @returns {JSX.Element} The rendered ErrorStepIcon component.
 */
export function ErrorStepIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="#E86646" />
            <path fillRule="evenodd" clipRule="evenodd" d="M16.192 7.00049L11.95 11.2435L7.708 7.00049L7 7.70649L11.243 11.9495L7 16.1925L7.708 16.8995L11.95 12.6565L16.192 16.8995L16.899 16.1935V16.1915L12.657 11.9495L16.899 7.70749L16.192 7.00049Z" fill="black" />
        </svg>
    );
}

/**
 * CurrentStepIcon component renders a current step indicator SVG icon.
 * This icon does not accept color properties as it is a static icon.
 * @returns {JSX.Element} The rendered CurrentStepIcon component.
 */
export function CurrentStepIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="white" />
            <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#565656" />
            <path fillRule="evenodd" clipRule="evenodd" d="M14.05 7.5L13.343 8.215L17.086 11.995H5V13.004H17.086L13.343 16.786L14.05 17.5L18.293 13.215L19 12.499L14.05 7.5Z" fill="black" />
        </svg>
    );
}

/**
 * SystemModeIcon component renders a system mode SVG icon with a specified color.
 * @param {IconProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered SystemModeIcon component.
 */
export function SystemModeIcon({ colorVar }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.2169 0.09198C9.68584 0.163574 10.1414 0.275757 10.5798 0.425049C10.9233 0.541992 11.2562 0.681641 11.5769 0.842224C11.9472 1.02765 12.301 1.24091 12.6358 1.47931C12.9094 1.67413 13.1702 1.88574 13.4166 2.11267C13.7112 2.38379 13.9853 2.6767 14.2364 2.98889C14.4482 3.25214 14.6437 3.52911 14.8213 3.81818C15.0405 4.17493 15.2325 4.55029 15.3944 4.94116C15.5361 5.28326 15.6547 5.63733 15.7483 6.0014C15.8697 6.47321 15.949 6.96191 15.9823 7.4632C15.994 7.64062 16 7.81958 16 8C16 8.01923 15.9999 8.03851 15.9998 8.05774C15.9978 8.34607 15.9805 8.63068 15.9487 8.91095C15.4967 12.9008 12.1104 16.0004 8 16C3.58173 16.0004 0 12.4186 0 8.00037C0 3.58209 3.58173 0.000366211 8 0C8.41373 0 8.82011 0.0314331 9.2169 0.09198ZM8 1.00037L8.00002 1.30884L8.30209 1.00677C8.80957 1.02832 9.30305 1.10388 9.77696 1.22791L8 3.00488V4.41907L10.8252 1.59387C11.2084 1.76312 11.5736 1.96576 11.917 2.19806L8 6.11511V7.5293L12.7086 2.82068C13.0049 3.09015 13.2779 3.3847 13.5244 3.70093L8 9.22534V10.6395L14.0911 4.54846C14.301 4.91815 14.4783 5.30884 14.619 5.71655L8 12.3355V13.7497L14.905 6.84467C14.9675 7.22064 15 7.60669 15 8.00037C15 8.15491 14.995 8.30829 14.9851 8.46033L8.45995 14.9855C8.30791 14.9954 8.15454 15.0004 8 15.0004C4.134 15.0004 1 11.8663 1 8.00037C1 4.1344 4.134 1.00037 8 1.00037ZM10.218 14.6417C12.2999 13.9467 13.9464 12.3002 14.6413 10.2183L10.218 14.6417Z" fill={`var(--${colorVar})`} />
        </svg>
    );
}

/**
 * Exporting all the icon components as a single object.
 */
const icons: { [key: string]: React.FC<IconProps> } = {
    AddIcon,
    ArrowLeftIcon,
    BinClosedIcon,
    BinOpenIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    ClockIcon,
    CogwheelIcon,
    CloseIcon,
    DarkModeIcon,
    ExternalLink,
    GlobeIcon,
    LightModeIcon,
    LockIcon,
    MultipleSelectionIcon,
    PencilIcon,
    SelectAllIcon,
    SortListIcon,
    SortThumbIcon,
    SystemModeIcon
};

export default icons;