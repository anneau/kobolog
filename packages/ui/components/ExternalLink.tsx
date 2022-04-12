import classNames from "classnames";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  size?: "sm" | "base" | "lg" | "xl" | "2xl";
  wight?: "light" | "normal" | "medium" | "semibold" | "bold";
  align?: "center" | "left" | "right" | "justify";
} & JSX.IntrinsicElements["a"];

export const ExternalLink: FC<Props> = ({
  children,
  size = "base",
  wight = "normal",
  align = "left",
  ...props
}) => {
  return (
    <a
      className={classNames({
        "text-sky-600": true,
        [`text-${size}`]: true,
        [`text-${align}`]: true,
        [`font-${wight}`]: true,
        "cursor-pointer": true,
        "hover:underline": true,
      })}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};
