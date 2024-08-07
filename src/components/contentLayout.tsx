import { ReactNode } from 'react';
import { PrimaryButton } from './buttons';

interface ContentLayoutProps {
  children: {
    title: string;
    process?: ReactNode;
    description?: string[];
    button?: { label: string; onClick: () => void; disabled: boolean; };
    subtitle?: string;
    content: ReactNode;
  };
}

/**
 * ContentLayout component
 * Renders a layout structure for the content, including title, process, description, button, subtitle, and main content.
 * @param {ContentLayoutProps} props - The properties object.
 * @param {string} props.children.title - The main title of the content.
 * @param {ReactNode} [props.children.process] - The process component to display alongside the title.
 * @param {string[]} [props.children.description] - An array of description paragraphs to display.
 * @param {{label: string; onClick: () => void; disabled: boolean;}} [props.children.button] - An optional button to display.
 * @param {string} [props.children.subtitle] - The subtitle of the content section.
 * @param {ReactNode} props.children.content - The main content to display.
 */
export default function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="mx-12 lg:mx-24 xl:mx-48 2xl:mx-80 mb-9 mt-36">
      <div className="mb-10 flex flex-row justify-between items-center"><h1 className="text-3xl font-semibold">{children.title}</h1>{children.process}</div>
      <div className="mb-12 flex justify-between items-center">{children.description ? <div className="flex flex-col gap-2">{children.description?.map((text) => (<p key={children.description?.indexOf(text)}>{text}</p>))}</div> : null}
        {children.button ? <PrimaryButton label={children.button.label} onClick={children.button.onClick} disabled={children.button.disabled} /> : null}</div>
      <div><h2 className="text-xl font-semibold mb-8">{children.subtitle}</h2>{children.content}</div>
    </div>
  );
}