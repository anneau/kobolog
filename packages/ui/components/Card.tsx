import classNames from "classnames";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Card: FC<Props> = ({ children }) => {
  return (
    <div
      className={classNames({
        "rounded-lg": true,
        "p-6": true,
        "bg-neutral-700": true,
      })}
    >
      {children}
    </div>
  );
};
