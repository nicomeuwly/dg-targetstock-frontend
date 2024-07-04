import { ReactNode } from 'react';

interface ContentLayoutProps {
  children: {
    title: string;
    process?: ReactNode;
    description?: string[];
    subtitle?: string;
    content: ReactNode;
  };
}

export default function ContentLayout({ children }: ContentLayoutProps) {
    return (
      <div className="mx-12 lg:mx-24 xl:mx-48 2xl:mx-80 mb-9 mt-36">
        <div className="mb-10 flex flex-row justify-between items-center"><h1 className="text-3xl font-semibold">{children.title}</h1>{children.process}</div>
        {children.description ? <div className="mb-12 flex flex-col gap-2">{children.description?.map((text) => (<p key={children.description?.indexOf(text)}>{text}</p>))}</div> : null}
        <div><h2 className="text-xl font-semibold mb-8">{children.subtitle}</h2>{children.content}</div>
      </div>
    );
  }