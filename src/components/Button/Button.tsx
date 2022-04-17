import React, { FC, ReactNode } from "react";
import cn from "classnames";
import s from "./Button.module.css";

interface IProps {
  size?: "middle" | "big";
  color: "yellow" | "blue";
  className: string;
  children: ReactNode;
  disabled?: boolean;
}

export const Button: FC<IProps> = ({
  size = "middle",
  color,
  className,
  children,
  disabled,
}) => {
  return (
    <button
      className={cn(
        s.btn,
        size === "big" && s.big,
        color === "blue" && s.blue,
        color === "yellow" && s.yellow,
        className
      )}
      type="button"
      disabled={disabled}
    >
      {children}
    </button>
  );
};
