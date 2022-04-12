import classNames from "classnames";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  center?: boolean;
};

export const Container: FC<Props> = ({ children, center = false }) => {
  return (
    <div
      className={classNames({
        container: true,
        "mx-auto": center,
      })}
    >
      {children}
    </div>
  );
};
