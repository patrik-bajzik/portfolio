import React, {ComponentProps} from "react";

interface LayoutProps extends ComponentProps<"div"> {
  children?: React.ReactNode;
}

interface CustomProjectProps extends React.FC<LayoutProps> {
  image: React.FC<LayoutProps>;
  HeadingTagline: React.FC<LayoutProps>;
  header: React.FC<LayoutProps>;
  text: React.FC<LayoutProps>;
  link: React.FC<TextLayoutProps>;
}

interface TextLayoutProps extends LayoutProps {
  link: string;
}

const CustomProject: CustomProjectProps = ({ children, ...next }: LayoutProps) => {
  return (
    <div
      className={`w-[90%] mx-auto max-w-[80rem] py-16 md:py-24 grid grid-cols-1 grid-rows-1 justify-stretch`
        + ` items-center gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-16`}
      {...next}
    >
      {children}
    </div>
  );
};

CustomProject.image = (props: LayoutProps) => {
  return (
    <div className="image-wrapper w-auto h-auto border-4 shadow">
      {props.children}
    </div>
  );
};

CustomProject.HeadingTagline = (props: LayoutProps) => {
  return (
    <h2 className="text-base font-semibold mb-3 lg:text-lg 2xl:text-xl">
      {props.children}
    </h2>
  );
};

CustomProject.header = (props: LayoutProps) => {
  return (
    <h2 className="text-4xl font-bold mb-5 2xl:text-6xl">
      {props.children}
    </h2>
  );
};

CustomProject.text = (props: LayoutProps) => {
  return (
    <p className="mb-5 text-black/80 2xl:text-lg">
      {props.children}
    </p>
  );
};

CustomProject.link = (props: TextLayoutProps) => {
  return (
    <a
      className="group transition-all duration-300 ease-in-out break-all 2xl:text-lg"
      href={props.link} target="_blank"
    >
      <span
        className="hover:transitions-color text-blue-800 hover:text-sky-500 bg-left-bottom bg-gradient-to-r
        from-sky-500 to-sky-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px]
        transition-all duration-500 ease-out flex items-center gap-x-3"
      >
        {props.children}
      </span>
    </a>
  );
};

export default CustomProject;