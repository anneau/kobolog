import classNames from "classnames";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  color?: "gray" | "white";
  size?: "sm" | "base" | "lg" | "xl" | "2xl";
  wight?: "light" | "normal" | "medium" | "semibold" | "bold";
  align?: "center" | "left" | "right" | "justify";
};

export const Text: FC<Props> = ({
  children,
  color = "white",
  size = "base",
  wight = "normal",
  align = "left",
}) => {
  return (
    <p
      className={classNames({
        "text-neutral-50": color === "white",
        "text-neutral-500": color === "gray",
        [`text-${size}`]: true,
        [`text-${align}`]: true,
        [`font-${wight}`]: true,
      })}
    >
      {children}
    </p>
  );
};
